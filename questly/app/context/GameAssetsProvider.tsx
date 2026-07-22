"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_ICONS } from "@/app/lib/queries";
import { GameAssetsContextType, GetIconsResponse, Icons } from "@/app/types/icons";
import default_game_icon from "../../public/assets/logo.png";
import default_background from "../../public/assets/background.png";
import default_search from "../../public/assets/search.png";
import default_trophy from "../../public/assets/trophy.png";
import default_item from "../../public/assets/item.webp";
import default_quest from "../../public/assets/quest.png";
import default_money from "../../public/assets/money.png";
import default_exp from "../../public/assets/exp.png";
import default_check from "../../public/assets/check.png";
import default_missable from "../../public/assets/missable.png";
import default_miss from "../../public/assets/miss.png";

const GameAssetsContext = createContext<GameAssetsContextType | null>(null);

type Props = {
	children: ReactNode;
};

export function GameAssetsProvider({ children }: Props) {
	const params = useParams();

	const game = params.game as string;

	const { data, loading, error } = useQuery<GetIconsResponse>(GET_ICONS, {
		variables: { game },
		skip: !game,
		fetchPolicy: "cache-first",
		nextFetchPolicy: "cache-first"
	});

	const icons: Icons | undefined = data?.icons?.[0];

	const value = useMemo(
		() => ({
			game,

			checkbox_image: icons?.checkbox_image ?? default_check,
			logo: icons?.logo ?? default_game_icon,
			character: icons?.character ?? null,

			backgrounds: icons?.backgrounds?.length ? icons.backgrounds : [default_background.src],
			nav_icons: icons?.nav_icons ?? [],

			currency_icon: icons?.currency_icon ?? default_money,
			experience_icon: icons?.experience_icon ?? default_exp,
			item_icon: icons?.item_icon ?? default_item,
			game_icon: icons?.game_icon ?? default_game_icon,
			default_icon: icons?.default_icon ?? default_quest,
			achievement_icon: icons?.achievement_icon ?? default_trophy,
			search_icon: icons?.search_icon ?? default_search,
			missable_icon: icons?.missable?.missable_icon ?? default_miss,
			missable_logo: icons?.missable?.missable_logo ?? default_missable,
			missable_color: icons?.missable?.missable_color ?? "red",

			loading,
			error
		}),
		[icons, loading, error, game]
	);

	return <GameAssetsContext.Provider value={value}>{children}</GameAssetsContext.Provider>;
}

export function useGameAssets() {
	const context = useContext(GameAssetsContext);

	if (!context) {
		throw new Error("useGameAssets must be used within GameAssetsProvider");
	}

	return context;
}
