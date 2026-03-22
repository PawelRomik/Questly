import { gql } from "@apollo/client";

export const GET_QUESTS_NO_TAGS = gql`
	query GetQuests($search: String) {
		quests(filters: { Title: { containsi: $search } }) {
			Title
			quest_type {
				name
			}
			level
			Desc
			ShortDesc
			location {
				Name
				minimap {
					url
				}
				banner {
					url
				}
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

export const GET_QUESTS_WITH_TAGS = gql`
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
				minimap {
					url
				}
				banner {
					url
				}
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
