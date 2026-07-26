// --STS-------------STATISTICS---------------
//--STS--------------CONTAINER----------------

const statisticsContainer = `flex flex-col gap-2 text-sm`;

const statisticsBase = `flex items-center justify-between gap-2 px-3 py-2 `;

// --STS-----------ITEM----------------

const statisticsItemBase = `flex items-center justify-between gap-2 px-3 py-2`;

const statisticsItemLeft = `flex items-center gap-2`;

const statisticsItemRight = `flex items-center gap-3`;

const statisticsItemDot = `w-2 h-2 rounded-full`;

const statisticsItemLabel = `uppercase tracking-wide`;

const statisticsItemCounter = `px-3 py-1 text-xs`;

const statisticsItemButton = `px-3 py-1 text-xs uppercase tracking-wide cursor-pointer transition`;

// --STS---------EXPORT-------------

export const statisticsStyles = {
	base: () => statisticsContainer,
	stat: {
		base: () => statisticsBase,
		item: {
			base: () => statisticsItemBase,
			left: () => statisticsItemLeft,
			right: () => statisticsItemRight,
			dot: () => statisticsItemDot,
			label: () => statisticsItemLabel,
			counter: () => statisticsItemCounter,
			button: () => statisticsItemButton
		}
	}
};
