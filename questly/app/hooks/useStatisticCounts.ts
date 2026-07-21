import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";

import { GET_STAT_COUNTS } from "@/app/lib/queries";
import { useCompleted } from "@/app/context/CompletedContext";

type StatCountsQuery = {
	quests: {
		uuid: string;
	}[];
	achievements: {
		uuid: string;
	}[];
	collections: {
		items: {
			uuid: string;
		}[];
	}[];
	mapMarkers: {
		uuid: string;
	}[];
};

export function useStatisticCounts() {
	const { game } = useParams<{ game: string }>();

	const { completed: completedQuests } = useCompleted(game, "quests");
	const { completed: completedAchievements } = useCompleted(game, "achievements");
	const { completed: completedCollections } = useCompleted(game, "collections");
	const { completed: completedMapMarkers } = useCompleted(game, "mapMarkers");

	const { data, loading, error } = useQuery<StatCountsQuery>(GET_STAT_COUNTS, {
		variables: {
			game
		}
	});

	const counts = useMemo(() => {
		if (!data) {
			return {
				quests: {
					total: 0,
					completed: 0
				},
				achievements: {
					total: 0,
					completed: 0
				},
				collections: {
					total: 0,
					completed: 0
				},
				mapMarkers: {
					total: 0,
					completed: 0
				}
			};
		}

		return {
			quests: {
				total: new Set(data.quests.map((quest) => quest.uuid)).size,
				completed: completedQuests.length
			},
			achievements: {
				total: new Set(data.achievements.map((achievement) => achievement.uuid)).size,
				completed: completedAchievements.length
			},
			collections: {
				total: new Set(data.collections.flatMap((collection) => collection.items.map((item) => item.uuid))).size,
				completed: completedCollections.length
			},
			mapMarkers: {
				total: new Set(data.mapMarkers.map((marker) => marker.uuid)).size,
				completed: completedMapMarkers.length
			}
		};
	}, [data, completedQuests, completedAchievements, completedCollections, completedMapMarkers]);

	return {
		counts,
		loading,
		error
	};
}
