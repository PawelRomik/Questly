import { cyberpunk2077Styles } from "@/app/theme/cyberpunk2077/style";
import { questlyStyles } from "@/app/theme/questly/style";
import { witcher3Styles } from "@/app/theme/witcher3/style";

export const themes = {
	cyberpunk2077: cyberpunk2077Styles,
	witcher3: witcher3Styles,
	questly: questlyStyles
} as const;
