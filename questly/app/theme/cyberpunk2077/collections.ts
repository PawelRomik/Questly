import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

//--CLT---------------COLLECTIONS-------------------

//--CLT---------------ACCENT-------------------

const collectionAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const collectionAccentBar = (completed: boolean) => `
absolute top-0 left-0 w-1 h-full opacity-80
${completed ? "bg-[#00e0ff]" : "bg-[#ff204e]"}
`;

const collectionAccentGlow = (completed: boolean) => `
absolute top-0 left-0 w-4 h-full opacity-20 blur-md
${completed ? "bg-[#00e0ff]" : "bg-[#ff204e]"}
`;

// --CLT-------------GROUP--------------------

const collectionGroupWrapper = `
w-full flex flex-wrap gap-3
${rajdhani.className}
`;

const collectionGroupButton = (active: boolean) => `
relative px-4 py-2 text-sm uppercase tracking-wide cursor-pointer overflow-hidden
disabled:opacity-30 disabled:cursor-default
hover:scale-105 disabled:hover:scale-100
flex-[31%]
md:flex-[20%]
lg:flex-initial

border

backdrop-blur-sm

shadow-[0_0_16px_rgba(0,0,0,0.7)]

bg-linear-to-b
from-[#10131d]
to-[#06080d]

uppercase
tracking-widest

transition-all duration-200

hover:brightness-125
disabled:hover:brightness-100

${
	active
		? `
border-[#00e0ff]

text-[#00e0ff]

scale-95

shadow-[0_0_18px_rgba(0,224,255,0.25)]

inset-shadow-[0_0_14px_rgba(0,224,255,0.12)]
`
		: `
border-[#ff204e]/40

text-[#ffe600]

hover:border-[#00e0ff]
disabled:hover:border-[#ff204e]/40

shadow-[0_0_14px_rgba(255,32,78,0.12)]
`
}
`;

// --CLT--------------BASE LAYOUT------------------

const collectionContainer = (completed: boolean) => `
relative flex flex-col gap-4 p-4 overflow-hidden

transition-all duration-200

hover:translate-x-1
hover:-translate-y-0.5

border

backdrop-blur-md

shadow-[0_0_28px_rgba(0,0,0,0.75)]

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

${rajdhani.className}

${
	completed
		? `
border-[#00e0ff]/40

opacity-70

scale-95

hover:scale-100

shadow-[0_0_24px_rgba(0,224,255,0.15)]
`
		: `
border-[#ff204e]/30

hover:scale-[1.01]

hover:border-[#00e0ff]

shadow-[0_0_24px_rgba(255,32,78,0.1)]
`
}
`;

const collectionGrid = `flex flex-wrap items-center justify-center gap-3 z-10 lg:px-15`;

// --CLT--------------BUTTON------------------

const collectionButton = (completed: boolean) => `
w-full h-10 flex items-center justify-center cursor-pointer

transition-all duration-200

font-bold

tracking-wide

border

uppercase
tracking-widest

shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]

${
	completed
		? `
border-[#ff204e]

bg-linear-to-b
from-[#220812]
to-[#07070c]

text-[#ff6b8d]

hover:border-[#ffe600]

shadow-[0_0_16px_rgba(255,32,78,0.18)]
`
		: `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#05070c]

text-[#00e0ff]

hover:border-[#ffe600]

shadow-[0_0_16px_rgba(0,224,255,0.18)]
`
}
`;

// --CLT-------------HEADER---------------------

const collectionHeader = `z-10 w-full flex flex-col gap-1`;

const collectionHeaderRow = `flex justify-between flex-col items-center gap-2`;

const collectionHeaderDLCWrapper = `w-full flex gap-3`;

const collectionHeaderDLCIcon = `h-4 w-auto`;

const collectionHeaderWrapper = `flex w-full justify-between`;

const collectionHeaderMissable = `h-4 w-auto`;

const collectionHeaderTitle = `
lg:text-lg pr-5 lg:pr-0
font-bold

text-[#ffe600]

uppercase

tracking-widest
`;

const collectionHeaderCounter = `
text-sm
font-semibold

text-[#7f8ea3]
`;

// ---CLT--------------ITEM------------------

const collectionItem = (completed: boolean) => `
flex flex-col items-center cursor-pointer

transition-all duration-200

${
	completed
		? `
opacity-40

scale-90

grayscale

hover:opacity-60
`
		: `
hover:scale-110

hover:drop-shadow-[0_0_14px_rgba(0,224,255,0.35)]
`
}
`;

const collectionItemImage = `
w-28 h-28 object-contain

transition-all duration-200

hover:scale-115

contrast-110
saturate-125
`;

const collectionItemWrapper = `relative`;

const collectionMissableIcon = "h-8 w-auto absolute bottom-0 right-[35%] translate-x-[50%]";

// --CLT------------LIST-------------------

const collectionListWrapper = `w-full lg:px-3 flex flex-col items-center`;

const collectionListGroupsWrapper = `
flex w-full p-2

bg-linear-to-b
from-[#10131d]
to-[#06080d]

border border-[#ff204e]/20

shadow-[inset_0_0_8px_rgba(255,32,78,0.08)]
shadow-[0_0_24px_rgba(0,0,0,0.6)]

backdrop-blur-sm
`;

const collectionListGrid = `w-full flex flex-wrap lg:gap-8
gap-3 gap-y-8 mt-4 justify-center md:justify-start px-3 md:px-0`;

// --CLT--------------EXPORT-------------

export const collectionStyles = {
	accent: {
		wrapper: () => collectionAccentWrapper,
		bar: (completed: boolean) => collectionAccentBar(completed),
		glow: (completed: boolean) => collectionAccentGlow(completed)
	},
	list: {
		base: () => collectionListWrapper,
		group: () => collectionListGroupsWrapper,
		grid: () => collectionListGrid
	},
	collection: {
		base: (completed: boolean) => collectionContainer(completed),
		grid: () => collectionGrid,
		button: (completed: boolean) => collectionButton(completed),
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
			base: (completed: boolean) => collectionItem(completed),
			image: () => collectionItemImage,
			wrapper: () => collectionItemWrapper,
			missableIcon: () => collectionMissableIcon
		}
	},
	group: {
		wrapper: () => collectionGroupWrapper,
		button: (active: boolean) => collectionGroupButton(active)
	}
};
