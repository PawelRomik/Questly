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

			checkbox_image: icons?.checkbox_image?.url ?? default_check,
			logo: icons?.logo?.url ?? default_game_icon,
			character: icons?.character?.url ?? null,

			backgrounds: icons?.backgrounds?.length ? icons.backgrounds : [{ url: default_background }],
			nav_icons: icons?.nav_icons ?? [],

			currency_icon: icons?.currency_icon?.url ?? default_money,
			experience_icon: icons?.experience_icon?.url ?? default_exp,
			item_icon: icons?.item_icon?.url ?? default_item,
			game_icon: icons?.game_icon?.url ?? default_game_icon,
			default_icon: icons?.default_icon?.url ?? default_quest,
			achievement_icon: icons?.achievement_icon?.url ?? default_trophy,
			search_icon: icons?.search_icon?.url ?? default_search,

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
