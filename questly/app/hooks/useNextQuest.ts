import { GET_NEXT_QUEST } from "@/app/lib/queries";
import { useQuery } from "@apollo/client/react";

type GetNextQuestResponse = {
	quests: {
		title: string;
		uuid: string;
	}[];
};

type GetNextQuestVariables = {
	currentUuid: string;
};

export function useNextQuest(currentUuid: string) {
	const { data, loading, error } = useQuery<GetNextQuestResponse, GetNextQuestVariables>(GET_NEXT_QUEST, {
		variables: { currentUuid }
	});

	return {
		nextQuest: data?.quests?.[0] || null,
		loading,
		error
	};
}
