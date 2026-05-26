"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_ICONS } from "@/app/lib/queries";
import { GameAssetsContextType, GetIconsResponse, Icons } from "@/app/types/icons";

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

			checkbox_image: icons?.checkbox_image ?? null,
			logo: icons?.logo ?? null,
			character: icons?.character ?? null,

			backgrounds: icons?.backgrounds ?? [],
			nav_icons: icons?.nav_icons ?? [],

			currency_icon: icons?.currency_icon ?? null,
			experience_icon: icons?.experience_icon ?? null,
			item_icon: icons?.item_icon ?? null,
			game_icon: icons?.game_icon ?? null,
			default_icon: icons?.default_icon ?? null,
			achievement_icon: icons?.achievement_icon ?? null,
			search_icon: icons?.search_icon ?? null,

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
