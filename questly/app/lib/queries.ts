import { gql } from "@apollo/client";

export const GET_QUESTS_NO_TAGS = gql`
	query GetQuests($game: String!, $locale: I18NLocaleCode) {
		quests(locale: $locale, filters: { game: { slug: { eq: $game } } }) {
			title
			quest_type {
				name
				locale
				uuid
				icon {
					url
				}
				color
			}
			missable
			quest_act {
				title
				locale
				uuid
				order
				icon {
					url
				}
			}
			quest_groups {
				title
				locale
				uuid
				icon {
					url
				}
			}
			uuid
			level
			description
			short_desc
			location {
				name
				uuid
				locale
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
				uuid
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_QUESTS_WITH_TAGS = gql`
	query GetQuests($game: String!, $locale: I18NLocaleCode) {
		quests(locale: $locale, filters: { game: { slug: { eq: $game } } }) {
			title
			quest_type {
				uuid
				locale
				name
				icon {
					url
				}
				color
			}
			missable
			quest_act {
				uuid
				locale
				title
				order
				icon {
					url
				}
			}
			quest_groups {
				title
				locale
				uuid
				icon {
					url
				}
			}
			uuid
			level
			description
			short_desc
			location {
				name
				locale
				uuid
				locale
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
				uuid
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
				uuid
				color
				icon {
					url
				}
			}
		}
	}
`;

export const GET_ACHIEVEMENTS = gql`
	query GetAchievements($game: String!, $locale: I18NLocaleCode) {
		achievements(locale: $locale, filters: { game: { slug: { eq: $game } } }) {
			title
			description
			secret
			uuid
			icon {
				url
			}
			tags {
				name
			}
			missable
			achievement_group {
				name
				uuid
				locale
				icon {
					url
				}
			}
			dlc {
				title
				uuid
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
			uuid
		}
	}
`;

export const GET_COLLECTIONS = gql`
	query GetCollections($game: String!, $locale: I18NLocaleCode) {
		collections(locale: $locale, filters: { game: { slug: { eq: $game } } }) {
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
					uuid
					color
					icon {
						url
					}
				}
			}
			type
			collection_groups {
				title
				uuid
			}
			title
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

export const GET_DLCS = gql`
	query GetDLCS($locale: I18NLocaleCode, $game: String) {
		dlcs(filters: { game: { slug: { eq: $game } } }, locale: $locale) {
			title
			uuid
		}
	}
`;

export const GET_STAT_COUNTS = gql`
	query ($game: String!) {
		quests(pagination: { limit: 1000 }, filters: { game: { slug: { eq: $game } } }) {
			uuid
		}

		achievements(pagination: { limit: 1000 }, filters: { game: { slug: { eq: $game } } }) {
			uuid
		}
		collections(pagination: { limit: 1000 }, filters: { game: { slug: { eq: $game } } }) {
			items {
				uuid
			}
		}

		mapMarkers(pagination: { limit: 1000 }, filters: { game: { slug: { eq: $game } } }) {
			uuid
		}
	}
`;

export const GET_GAMES = gql`
	query ($locale: I18NLocaleCode) {
		games(locale: $locale) {
			title
			slug
			logo {
				url
			}
		}
	}
`;

export const GET_MAP_MARKERS = gql`
	query ($location: String) {
		mapMarkers(filters: { location: { name: { eq: $location } } }) {
			map_icon {
				icon {
					url
				}
				title
			}
			quest {
				uuid
				title
				quest_type {
					icon {
						url
					}
					name
				}
			}
			lat
			lng
			uuid
		}
	}
`;

export const GET_QUEST_BY_UUID = gql`
	query ($locale: I18NLocaleCode, $uuid: String) {
		quests(locale: $locale, filters: { uuid: { eq: $uuid } }) {
			title
			quest_type {
				uuid
				locale
				name
				icon {
					url
				}
				color
			}
			missable
			quest_act {
				uuid
				locale
				title
				order
				icon {
					url
				}
			}
			quest_groups {
				title
				locale
				uuid
				icon {
					url
				}
			}
			uuid
			level
			description
			short_desc

			location {
				name
				locale
				uuid
				locale
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
				uuid
				color
				icon {
					url
				}
			}
		}
	}
`;
