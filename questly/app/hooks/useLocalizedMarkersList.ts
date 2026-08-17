import { DocumentNode } from "@apollo/client";
import { client } from "@/app/lib/apollo";
import { useMemo } from "react";

type MarkerWithRelations = {
	uuid: string;
	map_icon: {
		title: string;
		uuid: string;
		icon: string;
	};
	quest: {
		uuid: string;
		title: string;
		quest_type: {
			uuid: string;
			icon: string;
			name: string;
		};
	} | null;
};

type LocalizedMarkersOptions<T extends MarkerWithRelations, TVars> = {
	locale: string;
	defaultLocale?: string;
	query: DocumentNode;
	vars: TVars;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
	pageSize?: number;
};

type CacheEntry<T> = {
	status: "pending" | "success" | "error";
	promise: Promise<void>;
	data?: T;
	error?: unknown;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resourceCache = new Map<string, CacheEntry<any>>();

async function fetchAllPages<T, TVars>({
	client,
	query,
	vars,
	locale,
	getItems,
	pageSize
}: {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	client: any;
	query: DocumentNode;
	vars: TVars;
	locale: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItems: (data: any) => T[];
	pageSize: number;
}): Promise<T[]> {
	let page = 1;
	let all: T[] = [];

	while (true) {
		const { data } = await client.query({
			query,
			variables: {
				...vars,
				locale,
				pagination: { page, pageSize }
			},
			fetchPolicy: "network-only"
		});

		const items = getItems(data) ?? [];
		all = all.concat(items);

		if (items.length < pageSize) break;
		page++;
	}

	return all;
}

function useSuspenseResource<T>(key: string, fetcher: () => Promise<T>): T {
	let entry = resourceCache.get(key) as CacheEntry<T> | undefined;

	if (!entry) {
		const promise = fetcher()
			.then((data) => {
				entry!.status = "success";
				entry!.data = data;
			})
			.catch((error) => {
				entry!.status = "error";
				entry!.error = error;
			});

		entry = { status: "pending", promise };
		resourceCache.set(key, entry);
	}

	if (entry.status === "pending") {
		throw entry.promise;
	}

	if (entry.status === "error") {
		throw entry.error;
	}

	return entry.data as T;
}

function mergeMarkers<T extends MarkerWithRelations>(localized: T[], fallback: T[]): T[] {
	const localizedMarkers = new Map(localized.map((m) => [m.uuid, m]));

	const merged = fallback.map((marker) => localizedMarkers.get(marker.uuid) ?? marker);

	const localizedIcons = new Map(localized.filter((m) => m.map_icon).map((m) => [m.map_icon.uuid, m.map_icon]));

	const localizedQuestTypes = new Map(localized.filter((m) => m.quest?.quest_type).map((m) => [m.quest!.quest_type.uuid, m.quest!.quest_type]));

	return merged.map((marker) => ({
		...marker,

		map_icon: marker.map_icon ? (localizedIcons.get(marker.map_icon.uuid) ?? marker.map_icon) : null,

		quest: marker.quest
			? {
					...marker.quest,
					quest_type: localizedQuestTypes.get(marker.quest.quest_type.uuid) ?? marker.quest.quest_type
				}
			: null
	}));
}

export function useLocalizedMarkersList<T extends MarkerWithRelations, TVars>({
	locale,
	defaultLocale = "en",
	query,
	vars,
	getItems,
	pageSize = 10
}: LocalizedMarkersOptions<T, TVars>) {
	const cacheKey = useMemo(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const queryName = (query as any).definitions?.[0]?.name?.value ?? "query";
		return `${queryName}:${JSON.stringify(vars)}:${locale}:${defaultLocale}:${pageSize}`;
	}, [query, vars, locale, defaultLocale, pageSize]);

	const markers = useSuspenseResource(cacheKey, async () => {
		const localized = await fetchAllPages({ client, query, vars, locale, getItems, pageSize });

		if (locale === defaultLocale) {
			return localized;
		}

		const fallback = await fetchAllPages({
			client,
			query,
			vars,
			locale: defaultLocale,
			getItems,
			pageSize
		});

		return mergeMarkers(localized, fallback);
	});

	return { markers };
}
