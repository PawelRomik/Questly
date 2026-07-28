import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

//--CLT---------------COLLECTIONS-------------------
//--CLT---------------ACCENT-------------------

const collectionAccentWrapper = `
pointer-events-none
absolute
inset-y-0
left-0

w-12
`;

const collectionAccentBar = (completed: boolean) => `
absolute
top-0
left-0

w-1
h-full

opacity-80

${completed ? "bg-[#2fa34a]" : "bg-[#c6a85a]"}
`;

const collectionAccentGlow = (completed: boolean) => `
absolute
top-0
left-0

w-4
h-full

opacity-20
blur-md

${completed ? "bg-[#2fa34a]" : "bg-[#c6a85a]"}
`;

// --CLT-------------GROUP--------------------

const collectionGroupWrapper = `
w-full

flex
flex-wrap

gap-3

${ptSans.className}
`;

const collectionGroupButton = (active: boolean) => `
relative

px-4
py-2

text-sm

uppercase
tracking-wide

transition-all
duration-200

cursor-pointer

overflow-hidden

disabled:opacity-30
disabled:cursor-default

hover:scale-105
disabled:hover:scale-100

border

shadow-[0_0_10px_rgba(0,0,0,0.7)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

hover:brightness-125
disabled:hover:brightness-100

${
	active
		? `
border-[#1f6b2b]

text-[#9be3a7]

scale-95

inset-shadow-[0_0_15px_rgba(0,255,100,0.2)]
`
		: `
border-[rgb(40,37,28)]

text-[#e6d3a3]

disabled:hover:border-[rgb(40,37,28)]

hover:border-[#c6a85a]
`
}`;

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

shadow-[0_0_20px_rgba(0,0,0,0.7)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

${ptSans.className}

${
	completed
		? `
border-[#1f6b2b]

opacity-70

scale-95

hover:scale-100
`
		: `
border-[rgb(40,37,28)]

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

transition-all
duration-200

font-bold
tracking-wide

border

shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]

${
	completed
		? `
border-[#6b1f1f]

bg-linear-to-b
from-[#3a0d0d]
to-[#1a0505]

text-[#e6a3a3]

hover:border-[#a33]
`
		: `
border-[#1f6b2b]

bg-linear-to-b
from-[#0f2a14]
to-[#07150a]

text-[#9be3a7]

hover:border-[#2fa34a]
`
}`;

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

text-[#e6d3a3]
`;

const collectionHeaderCounter = `
text-sm

font-semibold

text-zinc-400
`;

// ---CLT--------------ITEM------------------

const collectionItem = (completed: boolean) => `
flex
flex-col

items-center

cursor-pointer

transition-all
duration-200

${completed ? "opacity-40 scale-90" : "hover:scale-110"}
`;

const collectionItemImage = `
w-28
h-28

object-contain

transition

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
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]
shadow-3xl
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
		button: (completed: boolean) => collectionGroupButton(completed)
	}
};
