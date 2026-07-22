import { useApollo } from "@/app/hooks/useApollo";
import { DocumentNode } from "@apollo/client";
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
};

export function useLocalizedMarkersList<T extends MarkerWithRelations, TVars>({ locale, defaultLocale = "en", query, vars, getItems }: LocalizedMarkersOptions<T, TVars>) {
	const { data: localizedData, loading: localizedLoading } = useApollo(query, {
		...vars,
		locale
	});

	const { data: fallbackData, loading: fallbackLoading } = useApollo(query, {
		...vars,
		locale: defaultLocale
	});

	const loading = (locale !== defaultLocale && localizedLoading) || fallbackLoading;

	const markers = useMemo(() => {
		if (loading) {
			return [];
		}

		const localized = getItems(localizedData);
		const fallback = getItems(fallbackData);

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
	}, [loading, localizedData, fallbackData, getItems]);

	return {
		markers,
		loading
	};
}
