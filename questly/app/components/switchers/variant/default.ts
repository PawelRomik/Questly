const switcherGridStyles = "";

const switcherLinkStyles = (active: boolean) => `${active && "border-y-2 border-white "}`;

const switcherItemStyles = "";

const switcherImageStyles = "";

const switcherLabelStyles = "";

const switcherFlagStyles = "";

const switcherFlagTriggerStyles = "";

// ----------------------------------------

const dialogTriggerStyles = ``;

const dialogOverlayStyles = ``;

const dialogContentStyles = `
  bg-[#101010]
    to-[#060606]
bg-linear-to-b
  border
  border-white/80

  shadow-2xl

  backdrop-blur-md
`;

const dialogTitleStyles = `
  text-white

  tracking-wide
`;

const dialogButtonStyles = `
  text-neutral-400

  transition-colors
  duration-300

  hover:text-white
`;

// ----------------------------------------

export const defaultStyles = {
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
