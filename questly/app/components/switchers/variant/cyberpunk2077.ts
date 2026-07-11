import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const switcherGridStyles = "";

const switcherLinkStyles = (active: boolean) => `${active && "border-y-2 border-[#ff204e]/50 bg-black/20 "}`;

const switcherItemStyles = "";

const switcherImageStyles = "";

const switcherLabelStyles = "";

const switcherFlagStyles = "";

const switcherFlagTriggerStyles = "";

// ----------------------------------------

const dialogTriggerStyles = ``;

const dialogOverlayStyles = ``;

const dialogContentStyles = `
  shadow-[0_0_35px_rgba(0,0,0,0.9)]

  border-2
  border-[#ff204e]/50

  bg-linear-to-b
  from-[#111827]
  to-[#07090f]

  backdrop-blur-md
`;

const dialogTitleStyles = `
  text-[#f5f7ff]

  uppercase

  tracking-[0.25em]

  ${rajdhani.className}
`;

const dialogButtonStyles = `
  text-[#00e0ff]/60

  transition-all
  duration-200

  hover:text-[#00e0ff]

  hover:drop-shadow-[0_0_10px_#00e0ff]
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
	switcher: {
		grid: () => switcherGridStyles,
		link: (active: boolean) => switcherLinkStyles(active),
		item: () => switcherItemStyles,
		image: () => switcherImageStyles,
		label: () => switcherLabelStyles,
		flag: () => switcherFlagStyles,
		flagTrigger: () => switcherFlagTriggerStyles
	},
	dialog: {
		trigger: () => dialogTriggerStyles,
		overlay: () => dialogOverlayStyles,
		content: () => dialogContentStyles,
		title: () => dialogTitleStyles,
		button: () => dialogButtonStyles
	}
};
