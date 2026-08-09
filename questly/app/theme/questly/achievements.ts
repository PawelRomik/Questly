// --ACH--------ACHIEVEMENTS------------------

// --ACH-------BASE LAYOUT-----------------

const achievementListContainer = "w-full px-3 py-4 flex flex-col gap-3 items-center";

const achievementContentContainer = `
contents

lg:flex
lg:flex-col
lg:items-start
lg:flex-1
`;

const achievementContainer = (completed: boolean) => `
relative
w-[95%]
mx-auto
cursor-pointer

grid

grid-cols-[auto_minmax(0,1fr)_auto]
grid-rows-[auto_auto_auto_auto]

items-start

gap-x-4
gap-y-2

p-4
overflow-hidden

transition-all
duration-200

border

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

shadow-[0_0_20px_rgba(0,0,0,0.45)]

hover:-translate-y-0.5
hover:scale-[1.01]

${completed ? "border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.06)] opacity-70" : "border-white/10 hover:border-white/20"}

lg:flex
lg:items-center
lg:gap-4
`;

// --ACH---------TITLE--------------------

const achievementTitle = (completed: boolean) => `
col-start-2
row-start-2

lg:col-auto
lg:row-auto

${completed ? "line-through text-white/35" : "text-white/85"}

text-lg
uppercase
tracking-wide
`;

const achievementTitleWrapper = `
contents

lg:flex
lg:items-center
lg:justify-center
lg:gap-3
`;

const achievementTitleIcon = `
justify-self-center
self-center

lg:col-auto
lg:row-auto

hidden
lg:block

lg:h-4
h-2

w-auto
`;

// --ACH-------------DESCRIPTION-------------------

const achievementDescription = `
col-start-2
row-start-3

lg:col-auto
lg:row-auto

text-sm
text-white/50
`;

// --ACH-------------HIDDEN-------------------

const achievementHidden = `
absolute
inset-0

flex
items-center
justify-center

text-sm
z-10

bg-black/90

text-white/45

uppercase
tracking-wide
`;

// --ACH-------------IMAGE-------------------

const achievementImage = (completed: boolean) => `
lg:h-12.5
h-10

lg:w-12.5
w-10

object-contain

${completed ? "opacity-90" : "opacity-60"}
`;

const achievementImageWrapper = `
relative

flex
items-center
justify-center

col-start-1
row-start-2

row-span-2

lg:col-auto
lg:row-auto
lg:row-span-1

shrink-0
`;

const achievementImageContainer = (completed: boolean) => `
relative

p-2

border

bg-linear-to-b
from-[#161616]
to-[#0a0a0a]

shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]

border

${completed ? "border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.05)]" : "border-white/10"}
`;

const achievementImageOverlay = `
bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)]
`;

// --ACH-------------CORNERS-------------------

const achievementImageCornerBorders = `
absolute
w-3
h-3
z-30
`;

const achievementImageCornerStyles = (completed: boolean) => `
${completed ? "border-white/25 shadow-[0_0_6px_rgba(255,255,255,0.05)]" : "border-white/15"}
`;

// --ACH-------------BUTTON-------------------

const achievementButton = (completed: boolean) => `
col-start-3
row-start-2
row-span-2

self-center
justify-self-center

w-8
h-8

flex
bg-linear-to-b
items-center
justify-center

cursor-pointer

border

transition-all
duration-200

shrink-0

lg:col-auto
lg:row-auto
lg:row-span-1
lg:self-auto

${completed ? "border-white/20 from-[#2a2a2a] to-[#141414] hover:border-white/35" : "border-white/10 from-[#181818] to-[#0b0b0b] hover:border-white/20"}
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
col-start-1
col-span-3

row-start-4

w-full

flex
flex-wrap

gap-2

mt-1

lg:col-auto
lg:row-auto
lg:w-auto
lg:mt-2
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
