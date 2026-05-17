import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const sectionVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type SectionVariants = keyof typeof sectionVariants;
