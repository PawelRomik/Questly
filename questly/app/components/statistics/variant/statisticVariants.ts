import { cyberpunk2077Styles } from "@/app/components/statistics/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultStatisticsStyles } from "@/app/components/statistics/variant/default";

export const statisticVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultStatisticsStyles)
};

export type statisticVariant = keyof typeof statisticVariants;
