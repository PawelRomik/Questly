const switcherGridStyles = "grid grid-cols-2 sm:grid-cols-3 gap-6";

const switcherLinkStyles = "group flex flex-col  items-center justify-between  p-4 rounded-lg transition";

const switcherItemStyles = "relative w-16 h-16";

const switcherImageStyles = "object-contain w-20 h-20 group-hover:scale-110  transition";

const switcherFlagStyles = (flag: string) => `
fi fi-${flag} text-4xl transition group-hover:scale-120`;

const switcherLabelStyles = "text-sm text-white pt-2 group-hover:translate-y-2 group-hover:scale-110 transition group-hover:brightness-125 text-center";

const switcherFlagTriggerStyles = (flag: string) => `fi fi-${flag} rounded-sm text-2xl`;

// ----------------------------------------

const dialogTriggerStyles = `flex flex-1`;

const dialogOverlayStyles = `fixed inset-0 z-40 bg-black/70 backdrop-blur-sm`;

const dialogContentStyles = `fixed top-1/2 left-1/2 z-50
w-[90vw] max-w-lg p-6
-translate-x-1/2 -translate-y-1/2
rounded-xl 

`;

const dialogTitleStyles = `
mb-6
text-center text-xl font-semibold
text-white
`;

const dialogButtonStyles = `
absolute right-3 top-3
cursor-pointer                  
`;

// ----------------------------------------

export const universalStyles = {
	switcher: {
		grid: () => switcherGridStyles,
		link: () => switcherLinkStyles,
		item: () => switcherItemStyles,
		image: () => switcherImageStyles,
		label: () => switcherLabelStyles,
		flag: (flag: string) => switcherFlagStyles(flag),
		flagTrigger: (flag: string) => switcherFlagTriggerStyles(flag)
	},
	dialog: {
		trigger: () => dialogTriggerStyles,
		overlay: () => dialogOverlayStyles,
		content: () => dialogContentStyles,
		title: () => dialogTitleStyles,
		button: () => dialogButtonStyles
	}
};
