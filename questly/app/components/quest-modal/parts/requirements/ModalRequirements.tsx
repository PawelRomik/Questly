"use client";

import { Requirement } from "@/app/types/quest";

import { RequirementQuest } from "./RequirementQuest";
import { RequirementLevel } from "./RequirementLevel";
import { RequirementItem } from "./RequirementItem";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	requirements: Requirement[];
};

export const ModalRequirements = ({ requirements }: Props) => {
	const styles = useGameStyles(questModalVariants);
	if (!requirements?.length) return null;

	return (
		<div className={styles.requirements.base()}>
			<h3 className={styles.requirements.title()}>Requirements</h3>

			<div className={styles.requirements.list()}>
				{requirements.map((req, index) => {
					switch (req.type) {
						case "quest":
							return <RequirementQuest key={index} quest={req.quest} />;

						case "level":
							return <RequirementLevel key={index} level={req.level} />;

						case "item":
							return <RequirementItem key={index} item={req.item} amount={req.item_amount} />;

						default:
							return null;
					}
				})}
			</div>
		</div>
	);
};
