import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --QST---------------QUEST------------------

// --QST---------------ACCENT------------------

const questAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const questAccentBar = `
absolute top-0 left-0 w-1 h-full

opacity-90

shadow-[0_0_12px_currentColor]
`;

const questAccentGlow = `
absolute top-0 left-0 w-4 h-full

opacity-30

blur-xl
`;

const questAccentColor = (completed: boolean, color: string) => (completed ? "#00e0ff" : color);

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

backdrop-blur-sm

uppercase

tracking-widest

shadow-[0_0_15px_rgba(0,0,0,0.6)]

${
	completed
		? `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#04070c]

hover:border-[#ffe600]

shadow-[0_0_18px_rgba(0,224,255,0.25)]
`
		: `
border-[#ff204e]

bg-linear-to-b
from-[#1a0710]
to-[#07070c]

hover:border-[#00e0ff]

shadow-[0_0_18px_rgba(255,32,78,0.2)]
`
}
`;

const questButtonIcon = (completed: boolean) => `
w-4
h-4

fill-current

transition-all
duration-200

${
	completed
		? `
text-[#00e0ff]

opacity-100
scale-100

drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]
`
		: `
text-[#ff204e]

opacity-0
scale-95
`
}
`;

// --QST---------------CONTENT------------------

const questContent = `flex flex-col items-start flex-1`;

const questDescription = `
text-sm
text-left

text-[#7f8ea3]
`;

// --QST---------------TITLE------------------

const questTitleWrapper = `flex items-center justify-center gap-1`;

const questTitle = `
text-lg

text-[#f5f7ff]

uppercase

tracking-wide
`;

// --QST---------------DIVIDER------------------

const questDivider = `
w-px
h-10
mx-2

bg-linear-to-r
from-transparent
via-[#ff204e]/50
to-transparent
`;

// --QST---------------IMAGE------------------

const questImageWrapper = `
relative
flex
items-center
justify-center

border
border-[#00e0ff]/20

bg-[#05070c]

overflow-hidden
`;

const questDlc = `h-3 w-auto`;

const questImageContainer = `
relative
p-2
rounded-lg
`;

const questImage = `
h-14.5
w-14.5

object-cover

contrast-110
saturate-125
`;

const questImageIcon = `
absolute
bottom-0
right-11

object-contain

h-7.5
w-auto

text-[#ff204e]

drop-shadow-[0_0_8px_rgba(255,32,78,0.7)]
`;

// --QST---------------META------------------

const questMeta = `flex items-center justify-center gap-3 z-10`;

const questMetaLevel = `
flex
flex-col
items-center

text-[#ffe600]

font-bold
`;

const questMetaLabel = `
text-xs

text-[#6f7b8f]

uppercase

tracking-widest
`;

const questMetaValue = `
text-xl
font-bold

text-[#00e0ff]

font-semibold
`;

// --QST---------------TAGS------------------

const questTags = `
flex
flex-wrap
gap-2
mt-2

text-[#ff204e]

uppercase

tracking-widest
`;

// --QST---------------REWARDS------------------

const questRewards = `
flex
flex-col
items-end
gap-1
z-10

text-xs

text-[#7f8ea3]
`;

const questRewardsTitle = `
uppercase

tracking-wide

text-[#ffe600]

tracking-widest
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

text-[#00e0ff]
`;

const questRewardIcon = `
object-contain

h-4

text-[#ffe600]

max-w-7
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
hover:-translate-y-1

backdrop-blur-md

shadow-[0_0_25px_rgba(0,0,0,0.8)]

bg-linear-to-b
from-[#0c1018]
via-[#090b12]
to-[#05070c]

${rajdhani.className}

${
	completed
		? `
border-[#00e0ff]/50

opacity-75

hover:border-[#ffe600]

shadow-[0_0_30px_rgba(0,224,255,0.18)]

before:absolute
before:inset-0
before:bg-[linear-gradient(120deg,transparent,rgba(0,224,255,0.04),transparent)]
`
		: `
border-[#ff204e]/40

hover:border-[#00e0ff]

hover:scale-[1.015]

shadow-[0_0_30px_rgba(255,32,78,0.12)]
`
}
`;

const questWrapperContent = `
flex-1
z-10

relative

overflow-hidden
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
