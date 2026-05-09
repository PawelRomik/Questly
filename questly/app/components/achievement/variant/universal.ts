const AchievementListContainerClass = "w-full px-3 py-4 flex flex-col items-center";

// ----------------------------------------

const AchievementContentContainerClass = "flex flex-col items-start flex-1";

const achievementClass = `
  relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4
  overflow-hidden
`;

const achievementTitleLayoutClass = `
  text-lg uppercase tracking-wide
`;

const achievementDescriptionLayoutClass = `
  text-sm
`;

// ----------------------------------------
const achievementHiddenClass = `
absolute inset-0 flex items-center justify-center text-sm  z-10`;

// ----------------------------------------

const achievementImageLayoutClass = `
  h-12.5 w-12.5 object-contain
`;

const achievementImageWrapperLayoutClass = `
  relative flex items-center justify-center
`;

const achievementImageContainerLayoutClass = `
  relative p-2 border
`;

// ----------------------------------------

const achievementImageCornerBorders = "absolute w-3 h-3 z-30";
//-----------------------------------------

const achievementButtonLayoutClass = `
  w-8 h-8 flex items-center justify-center
  cursor-pointer
`;

const achievementButtonIconLayoutClass = `
  w-4 h-4
`;
//-----------------------------------------

export const universalStyles = {
	root: () => AchievementListContainerClass,
	achievement: () => achievementClass,
	container: () => AchievementContentContainerClass,
	title: () => achievementTitleLayoutClass,
	hidden: () => achievementHiddenClass,
	description: () => achievementDescriptionLayoutClass,
	image: {
		wrapper: () => achievementImageWrapperLayoutClass,
		container: () => achievementImageContainerLayoutClass,
		img: () => achievementImageLayoutClass,
		corners: {
			style: () => "",
			borders: () => achievementImageCornerBorders
		},
		overlay: () => ""
	},
	button: {
		root: () => achievementButtonLayoutClass,
		icon: () => achievementButtonIconLayoutClass
	}
};
