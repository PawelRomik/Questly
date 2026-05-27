import { cyberpunk2077Styles } from "@/app/components/section/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultSectionStyles } from "@/app/components/section/variant/default";

export const sectionVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultSectionStyles)
};

export type SectionVariants = keyof typeof sectionVariants;
