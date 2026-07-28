// --STS-------------STATISTICS---------------
//--STS--------------CONTAINER----------------

const statisticsContainer = `
flex
flex-col

gap-2

text-sm

border
border-white/10

bg-linear-to-b
from-[#141414]
to-[#090909]

backdrop-blur-md

shadow-lg
`;

const statisticsBase = `
flex
items-center
justify-between

gap-2

px-3
py-2

border
border-white/10

bg-linear-to-b
from-[#121212]
to-[#080808]

backdrop-blur-sm
`;

// --STS-----------ITEM----------------

const statisticsItemBase = `
flex
items-center
justify-between

gap-2

px-3
py-2

border
border-white/10

bg-linear-to-b
from-[#181818]
to-[#0c0c0c]

transition-all
duration-200

hover:border-white/20
hover:bg-[#1b1b1b]
`;

const statisticsItemLeft = `
flex
items-center

gap-2
`;

const statisticsItemRight = `
flex
items-center

gap-3
`;

const statisticsItemDot = `
w-2
h-2

rounded-full

bg-white/70
`;

const statisticsItemLabel = `
uppercase
tracking-wide

text-white/75
`;

const statisticsItemCounter = (completed: boolean) => `
px-3
py-1

text-xs

border

${
	completed
		? `
border-white

bg-white/80

text-black/80

font-bold
`
		: `
border-white/10

bg-black/40

text-white/85
`
}

backdrop-blur-sm
`;

const statisticsItemButton = `
px-3
py-1

text-xs

uppercase
tracking-wide

cursor-pointer

transition

border
border-white/10

bg-linear-to-b
from-[#202020]
to-[#111111]

text-white/80

duration-200

hover:border-white/20
hover:from-[#2a2a2a]
hover:to-[#171717]

active:scale-[0.98]
`;

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
			counter: (completed: boolean) => statisticsItemCounter(completed),
			button: () => statisticsItemButton
		}
	}
};
