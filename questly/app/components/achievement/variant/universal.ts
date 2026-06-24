const AchievementListContainerClass = "w-full px-3 py-4 flex flex-col gap-3 items-center";

// ----------------------------------------

const AchievementContentContainerClass = "flex flex-col items-start flex-1";

const achievementClass = `
  relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4
  overflow-hidden
`;

const achievementTitleLayoutClass = `
  text-lg uppercase tracking-wide
`;

const achievementTitleWrapperClass = `flex items-center justify-center gap-3
`;

const achievementTitleIconClass = `h-4 w-auto`;

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

const achievementTagsLayoutClass = `
  flex flex-wrap

  gap-2

  mt-2
`;

//-----------------------------------------

export const universalStyles = {
	root: () => AchievementListContainerClass,
	achievement: () => achievementClass,
	container: () => AchievementContentContainerClass,
	title: {
		wrapper: () => achievementTitleWrapperClass,
		base: () => achievementTitleLayoutClass,
		icon: () => achievementTitleIconClass
	},
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
	tags: () => achievementTagsLayoutClass,
	button: {
		root: () => achievementButtonLayoutClass,
		icon: () => achievementButtonIconLayoutClass
	}
};
