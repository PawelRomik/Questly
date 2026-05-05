import { universalStyles } from "@/app/components/item/variant/universal";
import { witcher3Styles } from "@/app/components/item/variant/witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";

export const itemVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles)
};

export type itemVariants = keyof typeof itemVariants;
