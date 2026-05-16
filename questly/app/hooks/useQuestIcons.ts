import { Quest } from "@/app/types/quest";

const BASE_URL = "http://localhost:1337";

export function useQuestIcons() {
	const getTypeIcon = (list: Quest[]) => (list[0]?.quest_type?.icon?.url ? `${BASE_URL}${list[0].quest_type.icon.url}` : undefined);
	const getActIcon = (list: Quest[]) => (list[0]?.quest_act?.icon?.url ? `${BASE_URL}${list[0].quest_act.icon.url}` : undefined);
	const getGroupIcon = (list: Quest[]) => (list[0]?.quest_groups[0]?.icon?.url ? `${BASE_URL}${list[0].quest_groups[0]?.icon?.url}` : undefined);
	const getLocationIcon = (list: Quest[]) => (list[0]?.location?.banner?.url ? `${BASE_URL}${list[0].location.banner.url}` : undefined);

	return { getTypeIcon, getLocationIcon, getActIcon, getGroupIcon };
}
