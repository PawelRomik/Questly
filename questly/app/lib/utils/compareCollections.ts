import { SortOption } from "@/app/components/filters/types";
import { CollectionType } from "@/app/types/collection";

export default function compareCollections(a: CollectionType, b: CollectionType, sort: string) {
	switch (sort) {
		case SortOption.ZA:
			return b.title.localeCompare(a.title);

		case SortOption.AZ:
		default:
			return a.title.localeCompare(b.title);
	}
}
