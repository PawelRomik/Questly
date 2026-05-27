import { cyberpunk2077Styles } from "@/app/components/quest-modal/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultModalStyles } from "@/app/components/quest-modal/variant/default";

export const questModalVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultModalStyles)
};

export type questModalVariant = keyof typeof questModalVariants;
