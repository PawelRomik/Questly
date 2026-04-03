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
				}
				other
			}
		}
	}
`;
