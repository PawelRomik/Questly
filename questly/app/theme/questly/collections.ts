import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

//--CLT---------------COLLECTIONS-------------------

//--CLT---------------ACCENT-------------------

const collectionAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const collectionAccentBar = (completed: boolean) => `
absolute top-0 left-0 w-1 h-full opacity-80
${completed ? "bg-white" : "bg-white/40"}
`;

const collectionAccentGlow = (completed: boolean) => `
absolute top-0 left-0 w-4 h-full opacity-20 blur-md
${completed ? "bg-white" : "bg-white/40"}
`;

// --CLT-------------GROUP--------------------

const collectionGroupWrapper = `
w-full
flex
flex-wrap
gap-3

${inter.className}
`;

const collectionGroupButton = (active: boolean) => `
relative

px-4
py-2

text-sm

uppercase

tracking-wide

cursor-pointer

overflow-hidden

disabled:opacity-30
disabled:cursor-default

hover:scale-105
disabled:hover:scale-100

border

shadow-[0_0_10px_rgba(0,0,0,0.45)]

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

transition-all
duration-200

hover:brightness-110
disabled:hover:brightness-100

${
	active
		? `
border-white/25

text-white

scale-95

bg-[#202020]

shadow-[0_0_15px_rgba(255,255,255,0.06)]
`
		: `
border-white/10

text-white/65

hover:border-white/20
hover:text-white
`
}
`;

// --CLT--------------BASE LAYOUT------------------

const collectionContainer = (completed: boolean) => `
relative

flex
flex-col

gap-4

p-4

overflow-hidden

transition-all
duration-200

hover:translate-x-1
hover:-translate-y-0.5

border

shadow-[0_0_20px_rgba(0,0,0,0.45)]

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

${inter.className}

${
	completed
		? `
border-white/15

opacity-60

scale-95

hover:scale-100
hover:opacity-80
`
		: `
border-white/10

hover:border-white/20
hover:scale-[1.01]
`
}
`;

const collectionGrid = `
flex
flex-wrap
items-center
justify-center

gap-3

z-10

px-15
`;

// --CLT--------------BUTTON------------------

const collectionButton = (completed: boolean) => `
w-full
h-10

flex
items-center
justify-center

cursor-pointer

font-bold

tracking-wide

border

transition-all
duration-200

${
	completed
		? `
border-white/10

bg-linear-to-b
from-[#161616]
to-[#0a0a0a]

text-white/55

hover:border-white/20
`
		: `
border-white/20

bg-linear-to-b
from-[#2a2a2a]
to-[#121212]

text-white

hover:border-white/35
`
}
`;

// --CLT-------------HEADER---------------------

const collectionHeader = `
z-10

w-full

flex
flex-col

gap-1
`;

const collectionHeaderRow = `
flex
justify-between

flex-col

items-center

gap-2
`;

const collectionHeaderDLCWrapper = `
w-full
flex
gap-3
`;

const collectionHeaderDLCIcon = `
h-4
w-auto
`;

const collectionHeaderWrapper = `
flex
w-full
justify-between
`;

const collectionHeaderMissable = `
h-4
w-auto
`;

const collectionHeaderTitle = `
text-lg
font-bold
tracking-wide

text-white/85
`;

const collectionHeaderCounter = `
text-sm
font-semibold

text-white/40
`;

// ---CLT--------------ITEM------------------

const collectionItem = (completed: boolean) => `
flex
flex-col
items-center

cursor-pointer

transition-all
duration-200

${
	completed
		? `
opacity-35

scale-90
`
		: `
hover:scale-110
`
}
`;

const collectionItemImage = `
w-28
h-28

object-contain

transition-transform
duration-200

hover:scale-115
`;

const collectionItemWrapper = `
relative
`;

const collectionMissableIcon = `
h-8
w-auto

absolute
bottom-0
right-[35%]

translate-x-[50%]
`;

// --CLT------------LIST-------------------

const collectionListWrapper = `
w-full
px-3

flex
flex-col

items-center
`;

const collectionListGroupsWrapper = `
flex
w-full

p-2

bg-linear-to-b
from-[#151515]
to-[#090909]

shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]
`;

const collectionListGrid = `
w-full

flex
items-start
flex-wrap

gap-8
gap-y-8

mt-4

justify-start
`;

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
