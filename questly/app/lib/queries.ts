import { gql } from "@apollo/client";

export const GET_QUESTS_NO_TAGS = gql`
	query GetQuests($search: String, $game: String!) {
		quests(filters: { game: { slug: { eq: $game } }, title: { containsi: $search } }) {
			title
			quest_type {
				name
			}
			uuid
			level
			description
			short_desc
			map {
				x
				y
				z
			}
			location {
				name
				minimap {
					url
				}
				banner {
					url
				}
			}
			character {
				name
				image {
					url
				}
			}
			tags {
				name
			}
			requirement {
				level
				type
				quest {
					title
					uuid
				}
				desc
				character {
					name
				}
				item {
					name
				}
				item_amount
			}
			rewards {
				experience
				money
				items {
					image {
						url
					}
					name
					rarity {
						name
						color
					}
					description
					amount
					price
					type
				}
				other
			}
		}
	}
`;

export const GET_QUESTS_WITH_TAGS = gql`
	query GetQuests($search: String, $game: String!) {
		quests(filters: { game: { slug: { eq: $game } }, or: [{ title: { containsi: $search } }, { tags: { name: { containsi: $search } } }] }) {
			title
			quest_type {
				name
			}
			uuid
			level
			description
			short_desc
			map {
				x
				y
				z
			}
			location {
				name
				minimap {
					url
				}
				banner {
					url
				}
			}
			character {
				name
				image {
					url
				}
			}
			tags {
				name
			}
			requirement {
				level
				type
				quest {
					title
					uuid
				}
				desc
				character {
					name
				}
				item {
					name
				}
				item_amount
			}
			rewards {
				experience
				money
				items {
					image {
						url
					}
					name
					rarity {
						name
						color
					}
					description
					amount
					price
					type
				}
				other
			}
		}
	}
`;

export const GET_NEXT_QUEST = gql`
	query GetNextQuest($currentUuid: String!) {
		quests(filters: { requirement: { quest: { uuid: { eq: $currentUuid } } } }) {
			title
			uuid
		}
	}
`;

export const GET_ACHIEVEMENTS = gql`
	query GetAchievements($game: String!, $search: String) {
		achievements(filters: { game: { slug: { eq: $game } }, title: { containsi: $search } }) {
			title
			description
			secret
			uuid
			icon {
				url
			}
		}
	}
`;
