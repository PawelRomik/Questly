import { DocumentNode } from "@apollo/client";

export default async function fetchAllPages<T, TVars>({
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
