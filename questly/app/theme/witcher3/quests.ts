import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
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

opacity-80
`;

const questAccentGlow = `
absolute

top-0
left-0

w-4
h-full

blur-md

opacity-20
`;

const questAccentColor = (completed: boolean, color: string) => (completed ? "#2fa34a" : color);

// --QST---------------BUTTON------------------

const questButton = (completed: boolean) => `
w-8
h-8

flex
items-center
justify-center

border

cursor-pointer

transition-all
duration-200

shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]

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
border-[#6b1f1f]

bg-linear-to-b
from-[#3a0d0d]
to-[#1a0505]

hover:border-[#a33]
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
flex
flex-col

items-start

flex-1
`;

// --QST---------------DESCRIPTION------------------

const questDescription = `
text-sm

text-left

text-zinc-400
`;

// --QST---------------TITLE------------------

const questTitleWrapper = `
flex
items-center
justify-center

gap-1
`;

const questTitle = `
text-lg

text-white
`;

// --QST---------------DIVIDER------------------

const questDivider = `
w-px
h-10

mx-2

bg-[rgb(40,37,28)]
`;

// --QST---------------IMAGE------------------

const questImageWrapper = `
relative

flex
items-center
justify-center
`;

const questDlc = `
h-3
w-auto
`;

const questImageContainer = `
relative

p-2

rounded-lg
`;

const questImage = `
h-14.5
w-14.5

object-cover
`;

const questImageIcon = `
absolute

bottom-0
right-11

h-7.5
w-auto

object-contain
`;

// --QST---------------META------------------

const questMeta = `
flex

items-center
justify-center

gap-3

z-10
`;

const questMetaLevel = `
flex
flex-col

items-center
`;

const questMetaLabel = `
text-xs

uppercase

text-zinc-400
`;

const questMetaValue = `
text-xl

font-bold

text-white
`;

// --QST---------------TAGS------------------

const questTags = `
flex
flex-wrap

gap-2

mt-2
`;

// --QST---------------REWARDS------------------

const questRewards = `
flex
flex-col

items-end

gap-1

z-10

text-xs

text-zinc-400
`;

const questRewardsTitle = `
uppercase

tracking-wide

text-[#e6d3a3]
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

font-semibold

text-zinc-400
`;

const questRewardIcon = `
object-contain

h-4
w-4
`;

// --QST---------------CONTAINER------------------

const questWrapper = (completed: boolean) => `
relative

w-[95%]

mx-auto

flex

items-center

gap-4

p-4

overflow-hidden

cursor-pointer

border

transition-all
duration-200

hover:translate-x-1
hover:-translate-y-0.5

shadow-[0_0_20px_rgba(0,0,0,0.7)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

${ptSans.className}

${
	completed
		? `
border-[#1f6b2b]

opacity-65

scale-95

hover:scale-100

inset-shadow-[0_0_25px_rgba(0,255,100,0.15)]
`
		: `
border-[rgb(40,37,28)]

hover:scale-[1.01]
`
}
`;

const questWrapperContent = `
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
