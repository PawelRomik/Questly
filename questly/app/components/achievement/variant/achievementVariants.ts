import { universalStyles } from "@/app/components/achievement/variant/universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { cyberpunk2077Styles } from "@/app/components/achievement/variant/cyberpunk2077";
import { defaultAchievementStyles } from "@/app/components/achievement/variant/default";

export const achievementVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultAchievementStyles)
};

export type AchievementVariant = keyof typeof achievementVariants;
