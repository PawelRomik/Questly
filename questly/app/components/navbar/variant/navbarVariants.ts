import { cyberpunk2077Styles } from "@/app/components/navbar/variant/cyberpunk2077";
import { universalStyles } from "./universal";
import { witcher3Styles } from "./witcher3";
import mergeStyles from "@/app/lib/utils/mergeStyles";
import { defaultNavbarStyles } from "@/app/components/navbar/variant/default";

export const navbarVariants = {
	witcher3: mergeStyles(universalStyles, witcher3Styles),
	cyberpunk2077: mergeStyles(universalStyles, cyberpunk2077Styles),
	default: mergeStyles(universalStyles, defaultNavbarStyles)
};

export type NavbarVariant = keyof typeof navbarVariants;
