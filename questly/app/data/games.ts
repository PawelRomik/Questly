import witcher from "../../public/assets/witcher.png";
import cyberpunk from "../../public/assets/cyberpunk.png";

export const GAME_THEME = {
	witcher3: {
		bg: "bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)]",
		border: "border-white",
		logo: witcher,
		text: "text-white",
		name: "Witcher 3",
		slug: "witcher3"
	},
	cyberpunk2077: {
		bg: "bg-[linear-gradient(180deg,rgba(3,7,30,1)_0%,rgba(2,10,55,1)_100%)]",
		border: "border-yellow-400",
		logo: cyberpunk,
		text: "text-yellow-400",
		name: "Cyberpunk 2077",
		slug: "cyberpunk2077"
	}
} as const;
