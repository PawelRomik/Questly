// --ACH--------ACHIEVEMENTS------------------
// --ACH-------BASE LAYOUT-----------------

const achievementListContainer = "w-full px-3 py-4 flex flex-col gap-3 items-center";

const achievementContentContainer = "flex flex-col items-start flex-1";

const achievementContainer = `relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4 overflow-hidden`;

// --ACH---------TITLE--------------------

const achievementTitle = `text-lg uppercase tracking-wide`;

const achievementTitleWrapper = `flex items-center justify-center gap-3`;

const achievementTitleIcon = `h-4 w-auto`;

// --ACH-------------DESCRIPTION-------------------

const achievementDescription = `text-sm`;

// --ACH-------------HIDDEN-------------------
const achievementHidden = `absolute inset-0 flex items-center justify-center text-sm  z-10`;

// --ACH-------------IMAGE-------------------

const achievementImage = `h-12.5 w-12.5 object-contain`;

const achievementImageWrapper = `relative flex items-center justify-center`;

const achievementImageContainer = `relative p-2 border`;

const achievementImageOverlay = ``;

// --ACH-------------CORNERS-------------------

const achievementImageCornerBorders = "absolute w-3 h-3 z-30";

const achievementImageCornerStyles = "";

// --ACH-------------BUTTON-------------------

const achievementButton = `w-8 h-8 flex items-center justify-center cursor-pointer`;

const achievementButtonIcon = `w-4 h-4`;

// --ACH-------------TAGS-------------------

const achievementTags = `flex flex-wrap gap-2 mt-2`;

// --ACH-------------EXPORT-------------------

export const achievementStyles = {
	root: () => achievementListContainer,
	achievement: () => achievementContainer,
	container: () => achievementContentContainer,
	title: {
		wrapper: () => achievementTitleWrapper,
		base: () => achievementTitle,
		icon: () => achievementTitleIcon
	},
	hidden: () => achievementHidden,
	description: () => achievementDescription,
	image: {
		wrapper: () => achievementImageWrapper,
		container: () => achievementImageContainer,
		img: () => achievementImage,
		corners: {
			style: () => achievementImageCornerStyles,
			borders: () => achievementImageCornerBorders
		},
		overlay: () => achievementImageOverlay
	},
	tags: () => achievementTags,
	button: {
		root: () => achievementButton,
		icon: () => achievementButtonIcon
	}
};
