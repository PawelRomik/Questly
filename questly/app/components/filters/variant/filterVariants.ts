import { cyberpunk2077Styles } from "@/app/components/filters/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultFiltersStyles } from "@/app/components/filters/variant/default";

export const filterVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultFiltersStyles)
};

export type FilterVariant = keyof typeof filterVariants;
