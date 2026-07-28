// --STS-------------STATISTICS---------------
//--STS--------------CONTAINER----------------

const statisticsContainer = `
flex
flex-col

gap-2

text-sm

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]
`;

const statisticsBase = `
flex

items-center
justify-between

gap-2

px-3
py-2

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]
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
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]
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

bg-[#a68b5b]
`;

const statisticsItemLabel = `
uppercase

tracking-wide

text-[#e6d3a3]
`;

const statisticsItemCounter = (completed: boolean) => `
px-3
py-1

text-xs

border

${
	completed
		? `
border-[#1f6b2b]

bg-linear-to-b
from-[#0f2a14]
to-[#07150a]

hover:border-[#2fa34a]
`
		: `
border-[rgb(40,37,28)]

bg-black/40
`
}

text-[#cfc6a4]
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
border-[#6b1f1f]

bg-linear-to-b
from-[#3a0d0d]
to-[#1a0505]

text-[#f0d9a7]

hover:border-[#a33]

hover:from-[#5a1414]
hover:to-[#2a0a0a]
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
