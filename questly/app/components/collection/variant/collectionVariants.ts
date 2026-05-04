import { universalStyles } from "@/app/components/collection/variant/universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const collectionVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type CollectionVariants = keyof typeof collectionVariants;
