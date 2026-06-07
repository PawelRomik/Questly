import { StaticImageData } from "next/image";

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
	missable: {
		missable_icon: ImageAsset;
		missable_logo: ImageAsset;
		missable_color: string;
	};
};

export type GameAssetsContextType = {
	game: string;

	checkbox_image: string | StaticImageData;
	logo: string | StaticImageData;
	character: string | null;

	backgrounds: ImageAsset[] | { url: StaticImageData }[];
	nav_icons: ImageAsset[];

	currency_icon: string | StaticImageData;
	experience_icon: string | StaticImageData;
	item_icon: string | StaticImageData;
	game_icon: string | StaticImageData;
	default_icon: string | StaticImageData;
	achievement_icon: string | StaticImageData;
	search_icon: string | StaticImageData;
	missable_icon: string | StaticImageData;
	missable_logo: string | StaticImageData;
	missable_color: string;
	loading: boolean;
	error?: Error;
};

export type GetIconsResponse = {
	icons: Icons[];
};
