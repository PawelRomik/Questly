const searchSettingsLayoutClass = `
  flex flex-col gap-2 text-sm
`;

// ----------------------------------------

const searchStatsLayoutClass = `
 flex items-center justify-between gap-2 px-3 py-2 
`;

const searchStatItemLayoutClass = `
  flex items-center justify-between gap-2

  px-3 py-2
`;

const searchStatItemLeftLayoutClass = `
  flex items-center gap-2
`;

const searchStatItemRightLayoutClass = `
  flex items-center gap-3
`;

const searchStatDotLayoutClass = `
  w-2 h-2

  rounded-full
`;

const searchStatLabelLayoutClass = `
  uppercase tracking-wide
`;

const searchStatCounterLayoutClass = `
  px-3 py-1

  text-xs
`;

const searchStatButtonLayoutClass = `
  px-3 py-1

  text-xs uppercase tracking-wide

  cursor-pointer

  transition
`;

// ----------------------------------------

export const universalStyles = {
	base: () => searchSettingsLayoutClass,
	stat: {
		base: () => searchStatsLayoutClass,
		item: {
			base: () => searchStatItemLayoutClass,
			left: () => searchStatItemLeftLayoutClass,
			right: () => searchStatItemRightLayoutClass,
			dot: () => searchStatDotLayoutClass,
			label: () => searchStatLabelLayoutClass,
			counter: () => searchStatCounterLayoutClass,
			button: () => searchStatButtonLayoutClass
		}
	}
};
