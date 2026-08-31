// --ACH--------ACHIEVEMENTS------------------

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

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

${
	completed
		? `
border-white/15

opacity-60

hover:opacity-80
hover:border-white/25

bg-linear-to-b
from-[#404040]
to-[#202020]


`
		: `
border-white/10

hover:border-white/20
hover:scale-[1.01]

`
}
lg:flex
lg:items-center
lg:gap-4
`;

//--ACH----------MODAL------------------

const achievementModal = `
fixed
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
z-80

w-[calc(100vw-1rem)]
max-w-[calc(100vw-1rem)]
max-h-[calc(100dvh-1rem)]
h-[calc(100dvh-1rem)]
lg:max-w-none
lg:max-h-none
overflow-y-auto
lg:min-h-150

bg-linear-to-b
from-[#161616]
to-[#080808]

border
border-white/10

shadow-[0_0_40px_rgba(0,0,0,0.7)]

text-white/85

backdrop-blur-xl

flex
flex-col

lg:w-350
lg:h-220
lg:max-w-none
lg:max-h-none
lg:overflow-hidden


`;

const achievementHeaderBase = `col-1
row-2

flex
items-center
gap-2

px-3
py-3
pr-12

text-lg
lg:text-xl
uppercase

border-b
border-white/10

bg-linear-to-r
from-[#0b0b0b]
via-[#151515]
to-[#0b0b0b]


lg:col-[2/4]
lg:row-1
lg:gap-3
lg:px-4
lg:py-3
lg:border-3

`;

const achievementModalIcon = `w-10
lg:w-13.75

shrink-0
object-contain
object-bottom-right`;

const achievementModalTitle = `tracking-wide
text-white

truncate`;

const achievementModalDlc = `
h-3
lg:h-4

w-auto

shrink-0`;

const achievementModalDescription = `col-1
row-3
overflow-y-scroll
[scrollbar-width:thin]
[scrollbar-color:#555_#0d0d0d]
min-h-[20rem]
	flex-1
flex
flex-col
gap-3
break-all

p-3
lg:p-3

text-sm

leading-relaxed

border-r
border-y
border-white/10

text-white/65
${inter.className}

lg:col-2
lg:row-start-3
lg:row-end-5
lg:border-r-3
lg:border-y-3`;

const achievementModalFooter = `col-1
row-6

grid
grid-cols-[1fr_auto]
grid-rows-[auto_auto]
items-center
gap-2

py-2
md:py-0

border-t
border-white/10

bg-black/20

md:grid-cols-[1fr_auto_auto]
md:grid-rows-1

lg:col-[1/4]
lg:row-5
lg:gap-4
lg:pr-2
lg:py-0`;

const achievementModalCompleteWrapper = `w-5
h-5
p-0.5
shrink-0

flex
items-center
justify-center

border
border-current`;

const achievementModalButton = (completed: boolean) => `
justify-self-center

row-2
col-[1/3]

h-15
w-full

md:row-1
md:col-start-3

md:w-full
md:justify-self-end

px-3
lg:px-5

py-2

flex
items-center
justify-center

gap-2

text-sm
tracking-wide

cursor-pointer

transition-all
duration-200

border

backdrop-blur-sm

${
	completed
		? `
border-white/20

bg-linear-to-b
from-[#2a2a2a]
to-[#151515]

text-white

hover:border-white/35
`
		: `
border-white/10

bg-linear-to-b
from-[#1a1a1a]
to-[#0c0c0c]

text-white/80

hover:border-white/20
hover:text-white
`
}
`;

const achievementModalCompleteIcon = (completed: boolean) => `
fill-current

${completed ? "opacity-100 text-white transition" : "opacity-0 transition"}
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
	modal: {
		base: () => achievementModal,
		header: {
			base: () => achievementHeaderBase,
			dlc: () => achievementModalDlc,
			icon: () => achievementModalIcon,
			title: () => achievementModalTitle
		},
		description: () => achievementModalDescription,
		footer: () => achievementModalFooter,
		completed: {
			button: (completed: boolean) => achievementModalButton(completed),
			wrapper: () => achievementModalCompleteWrapper,
			icon: (completed: boolean) => achievementModalCompleteIcon(completed)
		}
	},

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
