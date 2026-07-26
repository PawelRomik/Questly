//--CLT---------------COLLECTIONS-------------------
//--CLT---------------ACCENT-------------------

const collectionAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const collectionAccentBar = `absolute top-0 left-0 w-1 h-full opacity-80`;

const collectionAccentGlow = `absolute top-0 left-0 w-4 h-full opacity-20 blur-md`;

// --CLT-------------GROUP--------------------

const collectionGroupWrapper = `w-full flex flex-wrap gap-3`;

const collectionGroupButton = `relative px-4 py-2 text-sm uppercase tracking-wide transition-all
duration-200 cursor-pointer overflow-hidden disabled:opacity-30 disabled:cursor-default
hover:scale-105 disabled:hover:scale-100
`;

// --CLT--------------BASE LAYOUT------------------

const collectionContainer = `relative flex flex-col gap-4 p-4 overflow-hidden transition-all
duration-200 hover:translate-x-1 hover:-translate-y-0.5`;

const collectionGrid = `flex flex-wrap items-center justify-center gap-3 z-10 px-15`;

// --CLT--------------BUTTON------------------

const collectionButton = `w-full h-10 flex items-center justify-center cursor-pointer
transition-all duration-200 font-bold tracking-wide
`;

// --CLT-------------HEADER---------------------

const collectionHeader = `z-10 w-full flex flex-col gap-1`;

const collectionHeaderRow = `flex justify-between flex-col items-center gap-2`;

const collectionHeaderDLCWrapper = `w-full flex gap-3`;

const collectionHeaderDLCIcon = `h-4 w-auto`;

const collectionHeaderWrapper = `flex w-full justify-between`;

const collectionHeaderMissable = `h-4 w-auto`;

const collectionHeaderTitle = `text-lg font-bold tracking-wide`;

const collectionHeaderCounter = `text-sm font-semibold`;

// ---CLT--------------ITEM------------------

const collectionItem = `flex flex-col items-center cursor-pointer transition-all duration-200`;

const collectionItemImage = `w-28 h-28 object-contain transition`;

const collectionItemWrapper = `relative`;

const collectionMissableIcon = "h-8 w-auto absolute bottom-0 right-[35%] translate-x-[50%]";

// --CLT------------LIST-------------------

const collectionListWrapper = `w-full px-3 flex flex-col items-center`;

const collectionListGroupsWrapper = `flex w-full p-2`;

const collectionListGrid = `w-full flex items-start flex-wrap gap-8 gap-y-8 mt-4 justify-start`;

// --CLT--------------EXPORT-------------

export const collectionStyles = {
	accent: {
		wrapper: () => collectionAccentWrapper,
		bar: () => collectionAccentBar,
		glow: () => collectionAccentGlow
	},
	list: {
		base: () => collectionListWrapper,
		group: () => collectionListGroupsWrapper,
		grid: () => collectionListGrid
	},
	collection: {
		base: () => collectionContainer,
		grid: () => collectionGrid,
		button: () => collectionButton,
		header: {
			base: () => collectionHeader,
			row: () => collectionHeaderRow,
			title: () => collectionHeaderTitle,
			counter: () => collectionHeaderCounter,
			missable: () => collectionHeaderMissable,
			wrapper: () => collectionHeaderWrapper,
			dlc: {
				base: () => collectionHeaderDLCWrapper,
				icon: () => collectionHeaderDLCIcon
			}
		},
		item: {
			base: () => collectionItem,
			image: () => collectionItemImage,
			wrapper: () => collectionItemWrapper,
			missableIcon: () => collectionMissableIcon
		}
	},
	group: {
		wrapper: () => collectionGroupWrapper,
		button: () => collectionGroupButton
	}
};
