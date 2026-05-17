import { gql } from "@apollo/client";

export const GET_QUESTS_NO_TAGS = gql`
	query GetQuests($search: String, $game: String!) {
		quests(filters: { game: { slug: { eq: $game } }, title: { containsi: $search } }) {
			title
			quest_type {
				name
				icon {
					url
				}
				color
			}
			quest_act {
				title
				order
				icon {
					url
				}
			}
			quest_groups {
				title
				icon {
					url
				}
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
					item_type {
						name
						icon {
							url
						}
					}
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
				icon {
					url
				}
				color
			}
			quest_act {
				title
				order
				icon {
					url
				}
			}
			quest_groups {
				title
				icon {
					url
				}
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
					item_type {
						name
						icon {
							url
						}
					}
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
			achievement_group {
				name
			}
		}
	}
`;

export const GET_COLLECTION_GROUPS = gql`
	query GetCollectionGroups($game: String!) {
		collectionGroups(filters: { game: { slug: { eq: $game } } }) {
			title
		}
	}
`;

export const GET_COLLECTIONS = gql`
	query GetCollections($collectionGroup: String!) {
		collectionGroups(filters: { title: { eq: $collectionGroup } }) {
			collections {
				items {
					uuid
					image {
						url
					}
					name
					description
				}
				type
				title
			}
		}
	}
`;
