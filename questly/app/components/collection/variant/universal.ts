const collectionAccentWrapperClass = `
  pointer-events-none absolute inset-y-0 left-0 w-12
`;

const collectionAccentBarClass = `
  absolute top-0 left-0 w-1 h-full opacity-80
`;

const collectionAccentGlowClass = `
  absolute top-0 left-0 w-4 h-full opacity-20 blur-md
`;

// ----------------------------------------

const collectionGroupWrapperClass = `
  w-full flex flex-wrap gap-3
`;

// ----------------------------------------

const collectionGroupButtonBaseClass = `
  relative px-4 py-2 text-sm uppercase tracking-wide
transition-all duration-200 cursor-pointer
  overflow-hidden disabled:opacity-30 disabled:cursor-default hover:scale-105 disabled:hover:scale-100
`;

// ----------------------------------------

const collectionLayoutClass = `
  relative flex flex-col gap-4 p-4
  overflow-hidden 



  transition-all duration-200
  hover:translate-x-1 hover:-translate-y-0.5
`;

const collectionGridLayoutClass = `
  flex flex-wrap items-center justify-center gap-3 z-10 px-15
`;

// ----------------------------------------

const collectionButtonLayoutClass = `
  w-full h-10 flex items-center justify-center
  cursor-pointer
  transition-all duration-200
  font-bold tracking-wide
`;

// ----------------------------------------

const collectionHeaderLayoutClass = `
  z-10 w-full flex flex-col gap-1
`;

const collectionHeaderRowLayoutClass = `
  flex justify-between items-center
`;

const collectionHeaderTitleLayoutClass = `
  text-lg font-bold tracking-wide
`;

const collectionHeaderCounterLayoutClass = `
  text-sm font-semibold
`;

// ----------------------------------------

const collectionItemLayoutClass = `
  flex flex-col items-center
  cursor-pointer
  transition-all duration-200
`;

const collectionItemImageLayoutClass = `
  w-28 h-28 object-contain
  transition
`;

// ----------------------------------------

const collectionListWrapperClass = `
  w-full px-3 flex flex-col items-center
`;

const collectionListGroupsWrapperClass = `
  flex w-full p-2
`;

const collectionListGridClass = `
 w-full flex items-start flex-wrap gap-8 gap-y-8 mt-4 justify-start
`;

// ----------------------------------------

export const universalStyles = {
	accent: {
		wrapper: () => collectionAccentWrapperClass,
		bar: () => collectionAccentBarClass,
		glow: () => collectionAccentGlowClass
	},
	list: {
		base: () => collectionListWrapperClass,
		group: () => collectionListGroupsWrapperClass,
		grid: () => collectionListGridClass
	},
	collection: {
		base: () => collectionLayoutClass,
		grid: () => collectionGridLayoutClass,
		button: () => collectionButtonLayoutClass,
		header: {
			base: () => collectionHeaderLayoutClass,
			row: () => collectionHeaderRowLayoutClass,
			title: () => collectionHeaderTitleLayoutClass,
			counter: () => collectionHeaderCounterLayoutClass
		},
		item: {
			base: () => collectionItemLayoutClass,
			image: () => collectionItemImageLayoutClass
		}
	},
	group: {
		wrapper: () => collectionGroupWrapperClass,
		button: () => collectionGroupButtonBaseClass
	}
};
