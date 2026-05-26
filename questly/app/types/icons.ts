type ImageAsset = {
	url: string;
};

export type Icons = {
	checkbox_image: ImageAsset;
	logo: ImageAsset;
	character: ImageAsset;
	backgrounds: ImageAsset[];
	nav_icons: ImageAsset[];
	currency_icon: ImageAsset;
	experience_icon: ImageAsset;
	item_icon: ImageAsset;
	game_icon: ImageAsset;
	default_icon: ImageAsset;
	achievement_icon: ImageAsset;
	search_icon: ImageAsset;
};

export type GameAssetsContextType = {
	game: string;

	checkbox_image: ImageAsset | null;
	logo: ImageAsset | null;
	character: ImageAsset | null;

	backgrounds: ImageAsset[];
	nav_icons: ImageAsset[];

	currency_icon: ImageAsset | null;
	experience_icon: ImageAsset | null;
	item_icon: ImageAsset | null;
	game_icon: ImageAsset | null;
	default_icon: ImageAsset | null;
	achievement_icon: ImageAsset | null;
	search_icon: ImageAsset | null;

	loading: boolean;
	error?: Error;
};

export type GetIconsResponse = {
	icons: Icons[];
};
