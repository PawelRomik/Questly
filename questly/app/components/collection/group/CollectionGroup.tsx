"use client";

import { getTheme } from "@/app/lib/utils/getTheme";
import { CollectionGroupButton } from "./CollectionGroupButton";
import { useTranslations } from "next-intl";

type Props = {
	groups: { uuid: string; title: string }[];
	onSelect: (title: string) => void;
	active: string | null;
	game?: string;
};

export default function CollectionGroup({ groups, onSelect, active, game }: Props) {
	const t = useTranslations("filters");
	const isSearching = active === "search";
	const theme = getTheme("collection", game);

	return (
		<div className={theme.group.wrapper()}>
			{isSearching && <CollectionGroupButton game={game} title={t("searchResults")} active />}

			{groups.map((g) => (
				<CollectionGroupButton game={game} key={g.title} title={g.title} active={active === g.uuid} disabled={isSearching} onClick={() => !isSearching && onSelect(g.uuid)} />
			))}
		</div>
	);
}
