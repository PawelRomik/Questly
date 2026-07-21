import { cyberpunk2077Styles } from "./cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import { defaultStyles } from "./default";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const mapVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultStyles)
};

export type MapVariants = keyof typeof mapVariants;
