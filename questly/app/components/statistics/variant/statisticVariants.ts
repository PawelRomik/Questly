import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const statisticVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type statisticVariant = keyof typeof statisticVariants;
