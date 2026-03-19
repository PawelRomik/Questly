import { gql } from "@apollo/client";

export const GET_QUESTS = gql`
	query GetQuests($search: String) {
		quests(filters: { or: [{ Title: { containsi: $search } }, { tags: { name: { containsi: $search } } }] }) {
			Title
			quest_type {
				name
			}
			level
			Desc
			ShortDesc
			location {
				Name
			}
			character {
				Name
				Image {
					url
				}
			}
			tags {
				name
			}
			rewards
		}
	}
`;
