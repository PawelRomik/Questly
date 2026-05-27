import { cyberpunk2077Styles } from "@/app/components/tag/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultTagStyles } from "@/app/components/tag/variant/default";

export const tagVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultTagStyles)
};

export type tagVariants = keyof typeof tagVariants;
