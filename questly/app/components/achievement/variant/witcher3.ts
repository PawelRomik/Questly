const achievementBaseClass = `
  transition-all duration-200
  border
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  shadow-[0_0_20px_rgba(0,0,0,0.7)]
  hover:translate-x-1 hover:-translate-y-0.5 hover:scale-[1.01]
`;

const achievementVariantClass = (completed: boolean) => (completed ? "border-[#1f6b2b] shadow-[0_0_25px_rgba(0,255,100,0.15)]" : "border-[rgb(40,37,28)]");

const achievementClass = (completed: boolean) => `${achievementBaseClass} ${achievementVariantClass(completed)}`;

// ----------------------------------------

const achievementHiddenClass = ` bg-black/70 text-[#a68b5b] uppercase tracking-wide `;

// ----------------------------------------

const achievementTitleVariant = (completed: boolean) => (completed ? "line-through text-[#6f8f75]" : "text-[#e6d3a3]");

const achievementDescriptionClass = `
  text-[#a68b5b]
`;

// ----------------------------------------

const achievementImageVariant = (completed: boolean) => (!completed ? "opacity-90" : "");

const achievementImageContainerBaseClass = `
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
`;

const achievementImageContainerVariant = (completed: boolean) => (completed ? "border-[#1f6b2b] shadow-[0_0_15px_rgba(0,255,100,0.15)]" : "border-[rgb(40,37,28)]");

// ----------------------------------------

const achievementImageCornerStyleClass = (completed: boolean) => (completed ? "border-[#1f6b2b] shadow-[0_0_6px_rgba(0,255,100,0.2)]" : "border-[#6f6445]");

// ----------------------------------------

const achievementImageOverlayClass = `
  bg-[radial-gradient(circle,rgba(0,255,100,0.08),transparent_70%)]
`;

// ----------------------------------------

const achievementButtonBaseClass = `
  border transition-all duration-200
  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
`;

const achievementButtonVariant = (completed: boolean) =>
	completed
		? "border-[#1f6b2b] bg-gradient-to-b from-[#0f2a14] to-[#07150a] hover:border-[#2fa34a]"
		: "border-[#6b1f1f] bg-gradient-to-b from-[#3a0d0d] to-[#1a0505] hover:border-[#a33]";

// ----------------------------------------

const achievementButtonIconBaseClass = `
  fill-current text-white transition-all duration-200
`;

const achievementButtonIconVariant = (completed: boolean) => (completed ? "opacity-100 scale-100" : "opacity-0 scale-75");

// ----------------------------------------

export const witcher3Styles = {
	root: () => ``,
	achievement: (completed: boolean) => achievementClass(completed),

	title: (completed: boolean) => achievementTitleVariant(completed),

	hidden: () => achievementHiddenClass,

	description: achievementDescriptionClass,

	image: {
		wrapper: () => "",
		container: (completed: boolean) => `${achievementImageContainerBaseClass} ${achievementImageContainerVariant(completed)}`,

		img: (completed: boolean) => achievementImageVariant(completed),

		corners: {
			style: (completed: boolean) => achievementImageCornerStyleClass(completed),
			borders: () => ""
		},

		overlay: achievementImageOverlayClass
	},

	button: {
		root: (completed: boolean) => `${achievementButtonBaseClass} ${achievementButtonVariant(completed)}`,

		icon: (completed: boolean) => `${achievementButtonIconBaseClass} ${achievementButtonIconVariant(completed)}`
	}
};
