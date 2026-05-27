import witcher from "../../public/assets/witcher.png";
import cyberpunk from "../../public/assets/cyberpunk.png";

export const GAME_THEME = {
	witcher3: {
		logo: witcher,

		name: "Witcher 3",
		slug: "witcher3"
	},
	cyberpunk2077: {
		logo: cyberpunk,

		name: "Cyberpunk 2077",
		slug: "cyberpunk2077"
	}
} as const;
