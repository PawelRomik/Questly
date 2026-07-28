import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --ACH--------ACHIEVEMENTS------------------

// --ACH-------BASE LAYOUT-----------------

const achievementListContainer = "w-full px-3 py-4 flex flex-col gap-3 items-center";

const achievementContentContainer = "flex flex-col items-start flex-1";

const achievementContainer = (completed: boolean) => `
relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4 overflow-hidden

transition-all duration-200

border

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

${rajdhani.className}

backdrop-blur-md

shadow-[0_0_24px_rgba(0,0,0,0.75)]

hover:translate-x-1
hover:-translate-y-0.5
hover:scale-[1.01]

${
	completed
		? `
border-[#00e0ff]/50
shadow-[0_0_28px_rgba(0,224,255,0.18)]
hover:border-[#ffe600]
`
		: `
border-[#ff204e]/35
hover:border-[#00e0ff]
shadow-[0_0_20px_rgba(255,32,78,0.12)]
`
}`;

// --ACH---------TITLE--------------------

const achievementTitle = (completed: boolean) => `
text-lg
uppercase
tracking-wide

${
	completed
		? `
text-[#00e0ff]
line-through
opacity-70
`
		: `
text-[#f5f7ff]
`
}`;

const achievementTitleWrapper = `flex items-center justify-center gap-3`;

const achievementTitleIcon = `h-4 w-auto`;

// --ACH-------------DESCRIPTION-------------------

const achievementDescription = `
text-sm
text-[#7f8ea3]
`;

// --ACH-------------HIDDEN-------------------

const achievementHidden = `
absolute inset-0 flex items-center justify-center text-sm z-10

bg-black/75

text-[#ffe600]

uppercase
tracking-[0.25em]

border border-[#ff204e]/40

backdrop-blur-sm
`;

// --ACH-------------IMAGE-------------------

const achievementImage = (completed: boolean) => `
h-12.5
w-12.5
object-contain

${
	!completed
		? `
opacity-90
saturate-125
contrast-110
`
		: `
opacity-75
grayscale-[0.15]
`
}`;

const achievementImageWrapper = `relative flex items-center justify-center`;

const achievementImageContainer = (completed: boolean) => `
relative
p-2
border

bg-linear-to-b
from-[#10131d]
to-[#05070c]

backdrop-blur-sm

shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]

${
	completed
		? `
border-[#00e0ff]/50
shadow-[0_0_18px_rgba(0,224,255,0.18)]
`
		: `
border-[#ff204e]/35
shadow-[0_0_14px_rgba(255,32,78,0.12)]
`
}`;

const achievementImageOverlay = `
bg-[radial-gradient(circle,rgba(0,224,255,0.08),transparent_70%)]
`;

// --ACH-------------CORNERS-------------------

const achievementImageCornerBorders = "absolute w-3 h-3 z-30";

const achievementImageCornerStyles = (completed: boolean) => `
${
	completed
		? `
border-[#00e0ff]
shadow-[0_0_8px_rgba(0,224,255,0.35)]
`
		: `
border-[#ffe600]/60
shadow-[0_0_6px_rgba(255,230,0,0.18)]
`
}`;

// --ACH-------------BUTTON-------------------

const achievementButton = (completed: boolean) => `
w-8
h-8
flex
items-center
justify-center
cursor-pointer

border

transition-all duration-200

uppercase
tracking-widest

shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]

${
	completed
		? `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#04070c]

hover:border-[#ffe600]

shadow-[0_0_16px_rgba(0,224,255,0.16)]
`
		: `
border-[#ff204e]

bg-linear-to-b
from-[#220812]
to-[#07070c]

hover:border-[#00e0ff]

shadow-[0_0_16px_rgba(255,32,78,0.14)]
`
}`;

const achievementButtonIcon = (completed: boolean) => `
w-4
h-4

fill-current

transition-all duration-200

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

opacity-80
scale-90
`
}`;

// --ACH-------------TAGS-------------------

const achievementTags = `
flex
flex-wrap
gap-2
mt-2

text-[#ff204e]

uppercase

tracking-widest
`;

// --ACH-------------EXPORT-------------------

export const achievementStyles = {
	root: () => achievementListContainer,
	achievement: (completed: boolean) => achievementContainer(completed),
	container: () => achievementContentContainer,
	title: {
		wrapper: () => achievementTitleWrapper,
		base: (completed: boolean) => achievementTitle(completed),
		icon: () => achievementTitleIcon
	},
	hidden: () => achievementHidden,
	description: () => achievementDescription,
	image: {
		wrapper: () => achievementImageWrapper,
		container: (completed: boolean) => achievementImageContainer(completed),
		img: (completed: boolean) => achievementImage(completed),
		corners: {
			style: (completed: boolean) => achievementImageCornerStyles(completed),
			borders: () => achievementImageCornerBorders
		},
		overlay: () => achievementImageOverlay
	},
	tags: () => achievementTags,
	button: {
		root: (completed: boolean) => achievementButton(completed),
		icon: (completed: boolean) => achievementButtonIcon(completed)
	}
};
