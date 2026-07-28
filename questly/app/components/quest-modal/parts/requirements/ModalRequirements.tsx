"use client";

import { Requirement } from "@/app/types/quest";

import { RequirementQuest } from "./RequirementQuest";
import { RequirementLevel } from "./RequirementLevel";
import { RequirementItem } from "./RequirementItem";
import { getTheme } from "@/app/lib/utils/getTheme";

type Props = {
	requirements: Requirement[];
	game?: string;
};

export const ModalRequirements = ({ requirements, game }: Props) => {
	const theme = getTheme("questModal", game);
	if (!requirements?.length) return null;

	return (
		<div className={theme.requirements.base()}>
			<h3 className={theme.requirements.title()}>Requirements</h3>

			<div className={theme.requirements.list()}>
				{requirements.map((req, index) => {
					switch (req.type) {
						case "quest":
							return <RequirementQuest game={game} key={index} quest={req.quest} />;

						case "level":
							return <RequirementLevel game={game} key={index} level={req.level} />;

						case "item":
							return <RequirementItem game={game} key={index} item={req.item} amount={req.item_amount} />;

						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};
