const switcherGridStyles = "";

const switcherLinkStyles = (active: boolean) => `${active && "border-y-2 bg-black/20 border-[#c97a00] "}`;

const switcherItemStyles = "";

const switcherImageStyles = "";

const switcherLabelStyles = "";

const switcherFlagStyles = "";

const switcherFlagTriggerStyles = "";

// ----------------------------------------

const dialogTriggerStyles = ``;

const dialogOverlayStyles = ``;

const dialogContentStyles = `
  shadow-2xl

  border-2
  border-[#c97a00]

  bg-linear-to-b
  from-[#202020]
  to-[#161616]
`;

const dialogTitleStyles = `
  text-[#f1e2b8]

  uppercase

  tracking-widest
`;

const dialogButtonStyles = `
  text-[#c97a00]

  transition

  hover:text-yellow-400
`;

// ----------------------------------------

const switcherSearchContainer = ` border-2 rounded-lg
  border-[#c97a00]

  bg-black/20`;

const switcherSearchInput = ` w-full


  bg-transparent


  text-[#f1e2b8]

  placeholder:text-[#9c8d63]


  transition-colors

  focus:placeholder:text-[#c8b98c]`;

// ----------------------------------------

export const witcher3Styles = {
	switcher: {
		grid: () => switcherGridStyles,
		link: (active: boolean) => switcherLinkStyles(active),
		item: () => switcherItemStyles,
		image: () => switcherImageStyles,
		label: () => switcherLabelStyles,
		flag: () => switcherFlagStyles,
		flagTrigger: () => switcherFlagTriggerStyles,
		searchbar: {
			container: () => switcherSearchContainer,
			input: () => switcherSearchInput
		}
	},
	dialog: {
		trigger: () => dialogTriggerStyles,
		overlay: () => dialogOverlayStyles,
		content: () => dialogContentStyles,
		title: () => dialogTitleStyles,
		button: () => dialogButtonStyles
	}
};
