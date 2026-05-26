import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { Quest } from "@/app/types/quest";

export function useQuestIcons() {
	const { default_icon } = useGameAssets();
	const getTypeIcon = (list: Quest[]) => list[0]?.quest_type?.icon?.url || default_icon?.url;

	const getActIcon = (list: Quest[]) => list[0]?.quest_act?.icon?.url || default_icon?.url;

	const getGroupIcon = (list: Quest[]) => list[0]?.quest_groups[0]?.icon?.url || default_icon?.url;

	const getLocationIcon = (list: Quest[]) => list[0]?.location?.banner?.url || default_icon?.url;

	return {
		getTypeIcon,
		getLocationIcon,
		getActIcon,
		getGroupIcon
	};
}
