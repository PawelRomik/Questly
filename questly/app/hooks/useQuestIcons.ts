import { Quest } from "@/app/types/quest";

const BASE_URL = "http://localhost:1337";

export function useQuestIcons() {
	const getTypeIcon = (list: Quest[]) => (list[0]?.quest_type?.icon?.url ? `${BASE_URL}${list[0].quest_type.icon.url}` : undefined);

	const getLocationIcon = (list: Quest[]) => (list[0]?.location?.banner?.url ? `${BASE_URL}${list[0].location.banner.url}` : undefined);

	return { getTypeIcon, getLocationIcon };
}
