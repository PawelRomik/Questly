import { StaticImageData } from "next/image";

export type Icons = {
	checkbox_image: string;
	logo: string;
	character: string;
	backgrounds: string[];
	nav_icons: string[];
	currency_icon: string;
	experience_icon: string;
	item_icon: string;
	game_icon: string;
	default_icon: string;
	achievement_icon: string;
	search_icon: string;
	missable: {
		missable_icon: string;
		missable_logo: string;
		missable_color: string;
	};
};

export type GameAssetsContextType = {
	game: string;

	checkbox_image: string | StaticImageData;
	logo: string | StaticImageData;
	character: string | null;

	backgrounds: string[];
	nav_icons: string[];

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
