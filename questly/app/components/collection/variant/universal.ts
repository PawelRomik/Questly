export const collectionAccentWrapperClass = `
  pointer-events-none absolute inset-y-0 left-0 w-12
`;

export const collectionAccentBarClass = `
  absolute top-0 left-0 w-1 h-full opacity-80
`;

export const collectionAccentGlowClass = `
  absolute top-0 left-0 w-4 h-full opacity-20 blur-md
`;

// ----------------------------------------

export const collectionGroupWrapperClass = `
  w-full flex flex-wrap gap-3
`;

// ----------------------------------------

export const collectionGroupButtonBaseClass = `
  relative px-4 py-2 text-sm uppercase tracking-wide
transition-all duration-200 cursor-pointer
  overflow-hidden
`;

// ----------------------------------------

export const collectionLayoutClass = `
  relative w-[95%] mx-auto flex flex-col gap-4 p-4
  overflow-hidden
  transition-all duration-200
  hover:translate-x-1 hover:-translate-y-0.5
`;

export const collectionGridLayoutClass = `
  grid grid-cols-3 gap-3 place-items-center z-10
`;

// ----------------------------------------

export const collectionButtonLayoutClass = `
  w-full h-10 flex items-center justify-center
  cursor-pointer
  transition-all duration-200
  font-bold tracking-wide
`;

// ----------------------------------------

export const collectionHeaderLayoutClass = `
  z-10 w-full flex flex-col gap-1
`;

export const collectionHeaderRowLayoutClass = `
  flex justify-between items-center
`;

export const collectionHeaderTitleLayoutClass = `
  text-lg font-bold tracking-wide
`;

export const collectionHeaderCounterLayoutClass = `
  text-sm font-semibold
`;

// ----------------------------------------

export const collectionItemLayoutClass = `
  flex flex-col items-center
  cursor-pointer
  transition-all duration-200
`;

export const collectionItemImageLayoutClass = `
  w-28 h-28 object-contain
  transition
`;

// ----------------------------------------

export const collectionListWrapperClass = `
  w-full px-3 flex flex-col items-center
`;

export const collectionListGroupsWrapperClass = `
  flex w-full p-2
`;

export const collectionListGridClass = `
  w-full grid grid-cols-2 gap-6 mt-4
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
