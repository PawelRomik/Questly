/* eslint-disable @typescript-eslint/no-unused-vars */

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

// --QST---------------QUEST------------------

// --QST---------------ACCENT------------------

const questAccentWrapper = `
pointer-events-none

absolute

inset-y-0
left-0

w-12
`;

const questAccentBar = `
absolute

top-0
left-0

w-1
h-full

opacity-70
`;

const questAccentGlow = `
absolute

top-0
left-0

w-4
h-full

blur-md

opacity-10
`;

const questAccentColor = (completed: boolean, color: string) => (completed ? "#ffffff" : "#7a7a7a");

// --QST---------------BUTTON------------------

const questButton = (completed: boolean) => `
col-start-3
row-start-1
row-span-3

self-center
justify-self-center

w-8
h-8

flex
items-center
justify-center

shrink-0

border

cursor-pointer

transition-all
duration-200

backdrop-blur-sm

${
	completed
		? `
border-white/20

bg-linear-to-b
from-[#2a2a2a]
to-[#151515]

hover:border-white/40

lg:col-auto
lg:row-auto
lg:row-span-1
lg:self-auto
`
		: `
border-white/10

bg-linear-to-b
from-[#1a1a1a]
to-[#0b0b0b]

hover:border-white/25
hover:from-[#202020]
hover:to-[#111111]

lg:col-auto
lg:row-auto
lg:row-span-1
lg:self-auto
`
}
`;

const questButtonIcon = (completed: boolean) => `
w-4
h-4

fill-current

text-white

transition-all
duration-200

${completed ? "opacity-100 scale-100" : "opacity-0 scale-75"}
`;

// --QST---------------CONTENT------------------

const questContent = `
col-start-2
row-start-1
row-span-3

min-w-0

flex
flex-col

items-start

lg:col-auto
lg:row-auto
lg:row-span-1

lg:flex-1
`;

const questDescription = `
text-xs
lg:text-sm

text-left

text-white/55

text-wrap

pr-3

break-normal

min-w-0
`;

// --QST---------------TITLE------------------

const questTitleWrapper = `
flex

items-center
justify-start

gap-1

min-w-0
max-w-full
`;

const questTitle = `
text-sm
lg:text-lg

text-white

truncate
`;

const questDlc = `
h-2.5
lg:h-3

w-auto

shrink-0
`;

// --QST---------------DIVIDER------------------

const questDivider = `
hidden
lg:block

w-px
h-10

mx-2

shrink-0

bg-white/10
`;

// --QST---------------IMAGE------------------

const questImageWrapper = `
relative

flex
items-center
justify-center

col-start-1
row-start-1
row-span-3

lg:col-auto
lg:row-auto
lg:row-span-1

shrink-0
`;

const questImageContainer = `
relative

p-1.5
lg:p-2

rounded-lg
`;

const questImage = `
h-10
w-10

lg:h-14.5
lg:w-14.5

object-cover
`;

const questImageIcon = `
absolute

bottom-0

right-7
lg:right-11

object-contain

h-5
lg:h-7.5

w-auto
`;

// --QST---------------META------------------

const questMeta = `
flex

items-center
justify-start

gap-2
lg:gap-3

mt-1
lg:mt-0

z-10
`;

const questMetaLevel = `
flex
flex-col

items-center
`;

const questMetaLabel = `
text-[10px]
lg:text-xs

uppercase

text-white/40
`;

const questMetaValue = `
text-sm
lg:text-xl

font-bold

text-white/85
`;

// --QST---------------TAGS------------------

const questTags = `
col-start-1
col-span-3

row-start-4

w-full

flex
flex-wrap

items-center

gap-2

pt-2

lg:col-auto
lg:row-auto
lg:w-auto

lg:mt-2
lg:pt-0
`;

// --QST---------------REWARDS------------------

const questRewards = `
hidden

lg:flex

flex-col

items-end

gap-1

z-10

text-xs

text-white/45
`;

const questRewardsTitle = `
uppercase

tracking-wide

text-white/80
`;

const questRewardsList = `
flex

items-center
justify-center

gap-3
`;

const questRewardItem = `
flex

items-center

gap-1

font-medium

text-white/60
`;

const questRewardIcon = `
object-contain

h-4
w-4

opacity-70
`;

// --QST---------------CONTAINER------------------

const questWrapper = (completed: boolean) => `
relative

w-[95%]

mx-auto

grid

grid-cols-[auto_minmax(0,1fr)_auto]
grid-rows-[auto_auto_auto_auto]

items-start

gap-x-3
gap-y-1

p-3
lg:p-4

overflow-hidden

cursor-pointer

border

transition-all
duration-200

hover:-translate-y-0.5

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

hover:opacity-80
hover:border-white/25

bg-[#101010]

lg:flex
lg:items-center
lg:gap-4
`
		: `
border-white/10

hover:border-white/20
hover:scale-[1.01]

lg:flex
lg:items-center
lg:gap-4
`
}
`;

const questWrapperContent = `
min-w-0

flex-1

z-10
`;

// --QST---------------EXPORT------------------

export const questStyles = {
	accent: {
		base: () => questAccentWrapper,
		bar: () => questAccentBar,
		glow: () => questAccentGlow,
		color: (completed: boolean, color: string) => questAccentColor(completed, color)
	},

	button: {
		base: (completed: boolean) => questButton(completed),
		icon: (completed: boolean) => questButtonIcon(completed)
	},

	content: {
		base: () => questContent,

		description: () => questDescription,

		title: {
			wrapper: () => questTitleWrapper,
			base: () => questTitle
		},

		dlc: () => questDlc
	},

	divider: () => questDivider,

	image: {
		wrapper: () => questImageWrapper,
		container: () => questImageContainer,
		base: () => questImage,
		icon: () => questImageIcon
	},

	meta: {
		base: () => questMeta,
		level: () => questMetaLevel,
		label: () => questMetaLabel,
		value: () => questMetaValue
	},

	tags: () => questTags,

	rewards: {
		base: () => questRewards,
		title: () => questRewardsTitle,
		list: () => questRewardsList,
		item: () => questRewardItem,
		icon: () => questRewardIcon
	},

	wrapper: {
		base: (completed: boolean) => questWrapper(completed),
		content: () => questWrapperContent
	}
};
