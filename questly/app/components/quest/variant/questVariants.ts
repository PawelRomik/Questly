import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const questVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type QuestVariants = keyof typeof questVariants;
