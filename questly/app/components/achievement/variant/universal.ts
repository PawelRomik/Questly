export const AchievementListContainerClass = "w-full px-3 py-4 flex flex-col items-center";

// ----------------------------------------

export const AchievementContentContainerClass = "flex flex-col items-start flex-1";

export const achievementClass = `
  relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4
  overflow-hidden
`;

export const achievementTitleLayoutClass = `
  text-lg uppercase tracking-wide
`;

export const achievementDescriptionLayoutClass = `
  text-sm
`;

// ----------------------------------------
export const achievementHiddenClass = `
absolute inset-0 flex items-center justify-center text-sm  z-10`;

// ----------------------------------------

export const achievementImageLayoutClass = `
  h-12.5 w-12.5 object-contain
`;

export const achievementImageWrapperLayoutClass = `
  relative flex items-center justify-center
`;

export const achievementImageContainerLayoutClass = `
  relative p-2 border
`;

export const achievementImageCornersLayoutClass = `
  absolute inset-0 pointer-events-none
`;

export const achievementImageCornerLayoutClass = `
  absolute w-3 h-3
`;

// ----------------------------------------

const achievementImageCornerBorders = "absolute w-3 h-3 z-30";
//-----------------------------------------

export const achievementButtonLayoutClass = `
  w-8 h-8 flex items-center justify-center
  cursor-pointer
`;

export const achievementButtonIconLayoutClass = `
  w-4 h-4
`;

export const universalStyles = {
	root: () => AchievementListContainerClass,
	achievement: () => achievementClass,

	// ----------------------------------------

	title: () => achievementTitleLayoutClass,

	hidden: () => achievementHiddenClass,

	description: achievementDescriptionLayoutClass,

	// ----------------------------------------

	image: {
		wrapper: () => achievementImageWrapperLayoutClass,
		container: () => achievementImageContainerLayoutClass,

		img: () => achievementImageLayoutClass,

		corners: {
			style: () => "",
			borders: () => achievementImageCornerBorders
		},

		overlay: ""
	},

	// ----------------------------------------

	button: {
		root: () => achievementButtonLayoutClass,

		icon: () => achievementButtonIconLayoutClass
	}
};
