import { gql } from "@apollo/client";

export const GET_QUESTS_NO_TAGS = gql`
	query GetQuests($search: String, $game: String!, $locale: I18NLocaleCode) {
		quests(locale: $locale, filters: { game: { slug: { eq: $game } }, title: { containsi: $search } }) {
			title
			quest_type {
				name
				icon {
					url
				}
				color
			}
			missable
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
					quest_type {
						icon {
							url
						}
					}
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
			dlc {
				title
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_QUESTS_WITH_TAGS = gql`
	query GetQuests($search: String, $game: String!, $locale: I18NLocaleCode) {
		quests(
			locale: $locale
			filters: { game: { slug: { eq: $game } }, or: [{ title: { containsi: $search } }, { tags: { name: { containsi: $search } } }, { dlc: { title: { containsi: $search } } }] }
		) {
			title
			quest_type {
				name
				icon {
					url
				}
				color
			}
			missable
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
					quest_type {
						icon {
							url
						}
					}
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
			dlc {
				title
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_NEXT_QUEST = gql`
	query GetNextQuest($currentUuid: String!, $locale: I18NLocaleCode) {
		quests(locale: $locale, filters: { requirement: { quest: { uuid: { eq: $currentUuid } } } }) {
			title
			uuid
			quest_type {
				icon {
					url
				}
			}
			dlc {
				title
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_ACHIEVEMENTS = gql`
	query GetAchievements($game: String!, $search: String, $locale: I18NLocaleCode) {
		achievements(locale: $locale, filters: { game: { slug: { eq: $game } }, title: { containsi: $search } }) {
			title
			description
			secret
			uuid
			icon {
				url
			}
			missable
			achievement_group {
				name
				icon {
					url
				}
			}
			dlc {
				title
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_COLLECTION_GROUPS = gql`
	query GetCollectionGroups($game: String!, $locale: I18NLocaleCode) {
		collectionGroups(locale: $locale, filters: { game: { slug: { eq: $game } } }) {
			title
		}
	}
`;

export const GET_COLLECTIONS = gql`
	query GetCollections($collectionGroup: String!, $locale: I18NLocaleCode) {
		collectionGroups(locale: $locale, filters: { title: { eq: $collectionGroup } }) {
			collections {
				uuid
				items {
					uuid
					image {
						url
					}
					missable
					name
					description
					dlc {
						title
						color
						icon {
							url
						}
					}
				}
				type
				title
			}
		}
	}
`;

export const SEARCH_COLLECTIONS = gql`
	query SearchCollections($search: String!, $game: String!, $locale: I18NLocaleCode) {
		collections(locale: $locale, filters: { title: { containsi: $search }, game: { slug: { eq: $game } } }) {
			uuid
			type
			title

			items {
				uuid

				image {
					url
				}

				name
				description
			}
		}
	}
`;

export const GET_ICONS = gql`
	query GetCollectionGroups($game: String!) {
		icons(filters: { game: { slug: { eq: $game } } }) {
			checkbox_image {
				url
			}
			game {
				title
				slug
			}
			logo {
				url
			}
			character {
				url
			}
			backgrounds {
				url
			}
			nav_icons {
				url
			}
			currency_icon {
				url
			}
			experience_icon {
				url
			}
			default_icon {
				url
			}
			item_icon {
				url
			}
			game_icon {
				url
			}
			achievement_icon {
				url
			}
			search_icon {
				url
			}
			missable {
				missable_icon {
					url
				}
				missable_logo {
					url
				}
				missable_color
			}
		}
	}
`;
