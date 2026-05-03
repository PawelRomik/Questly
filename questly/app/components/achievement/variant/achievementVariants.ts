import { universalStyles } from "@/app/components/achievement/variant/universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const achievementVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type AchievementVariant = keyof typeof achievementVariants;
