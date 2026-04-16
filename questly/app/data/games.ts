import witcher from "../../public/assets/witcher.png";
import cyberpunk from "../../public/assets/cyberpunk.png";
import questly from "../../public/assets/questly.png";

export const GAME_THEME = {
	witcher3: {
		bg: "bg-[linear-gradient(180deg,rgba(153,27,27,1)_1%,rgba(79,14,14,1)_100%)]",
		firstColor: "bg-red-600",
		secondColor: "bg-white",
		border: "border-white",
		borderAlt: "border-red-600",
		logo: witcher,
		text: "text-white",
		name: "Witcher 3",
		slug: "witcher3"
	},
	cyberpunk2077: {
		bg: "bg-[linear-gradient(180deg,rgba(3,7,30,1)_0%,rgba(2,10,55,1)_100%)]",
		firstColor: "bg-blue-900",
		secondColor: "bg-yellow-400",
		border: "border-yellow-400",
		borderAlt: "border-blue-900",
		logo: cyberpunk,
		text: "text-yellow-400",
		name: "Cyberpunk 2077",
		slug: "cyberpunk2077"
	},
	default: {
		bg: "bg-[linear-gradient(180deg,#18181b_0%,#09090b_100%)]",
		border: "border-white",
		firstColor: "bg-black",
		secondColor: "bg-white",
		borderAlt: "border-black",
		logo: questly,
		text: "text-white",
		name: "Questly",
		slug: "questly"
	}
} as const;
