// --ACH--------ACHIEVEMENTS------------------

// --ACH-------BASE LAYOUT-----------------

const achievementListContainer = "w-full px-3 py-4 flex flex-col gap-3 items-center";

const achievementContentContainer = "flex flex-col items-start flex-1";

const achievementContainer = (completed: boolean) => `
relative w-[95%] mx-auto cursor-pointer flex items-center gap-4 p-4 overflow-hidden

transition-all duration-200
border

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[0_0_20px_rgba(0,0,0,0.7)]

hover:translate-x-1
hover:-translate-y-0.5
hover:scale-[1.01]

${completed ? "border-[#1f6b2b] shadow-[0_0_25px_rgba(0,255,100,0.15)]" : "border-[rgb(40,37,28)]"}
`;

// --ACH---------TITLE--------------------

const achievementTitle = (completed: boolean) => `
text-lg
uppercase
tracking-wide

${completed ? "line-through text-[#6f8f75]" : "text-[#e6d3a3]"}
`;

const achievementTitleWrapper = `flex items-center justify-center gap-3`;

const achievementTitleIcon = `h-4 w-auto`;

// --ACH-------------DESCRIPTION-------------------

const achievementDescription = `
text-sm
text-[#a68b5b]
`;

// --ACH-------------HIDDEN-------------------

const achievementHidden = `
absolute inset-0 flex items-center justify-center text-sm z-10

bg-black/70

text-[#a68b5b]

uppercase
tracking-wide
`;

// --ACH-------------IMAGE-------------------

const achievementImage = (completed: boolean) => `
h-12.5
w-12.5
object-contain

${!completed ? "opacity-90" : ""}
`;

const achievementImageWrapper = `relative flex items-center justify-center`;

const achievementImageContainer = (completed: boolean) => `
relative
p-2
border

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]

${completed ? "border-[#1f6b2b] shadow-[0_0_15px_rgba(0,255,100,0.15)]" : "border-[rgb(40,37,28)]"}
`;

const achievementImageOverlay = `
bg-[radial-gradient(circle,rgba(0,255,100,0.08),transparent_70%)]
`;

// --ACH-------------CORNERS-------------------

const achievementImageCornerBorders = "absolute w-3 h-3 z-30";

const achievementImageCornerStyles = (completed: boolean) => `
${completed ? "border-[#1f6b2b] shadow-[0_0_6px_rgba(0,255,100,0.2)]" : "border-[#6f6445]"}
`;

// --ACH-------------BUTTON-------------------

const achievementButton = (completed: boolean) => `
w-8
h-8
flex
items-center
justify-center
cursor-pointer

border

transition-all
duration-200

shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]

${
	completed
		? `
border-[#1f6b2b]

bg-gradient-to-b
from-[#0f2a14]
to-[#07150a]

hover:border-[#2fa34a]
`
		: `
border-[#6b1f1f]

bg-gradient-to-b
from-[#3a0d0d]
to-[#1a0505]

hover:border-[#a33]
`
}
`;

const achievementButtonIcon = (completed: boolean) => `
w-4
h-4

fill-current
text-white

transition-all
duration-200

${completed ? "opacity-100 scale-100" : "opacity-0 scale-75"}
`;

// --ACH-------------TAGS-------------------

const achievementTags = `
flex
flex-wrap
gap-2
mt-2
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
