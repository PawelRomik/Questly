import { cyberpunk2077Styles } from "@/app/components/quest/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultQuestStyles } from "@/app/components/quest/variant/default";

export const questVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultQuestStyles)
};

export type QuestVariants = keyof typeof questVariants;
