import { universalStyles } from "@/app/components/collection/variant/universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { cyberpunk2077Styles } from "@/app/components/collection/variant/cyberpunk2077";
import { defaultCollectionStyles } from "@/app/components/collection/variant/default";

export const collectionVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultCollectionStyles)
};

export type CollectionVariants = keyof typeof collectionVariants;
