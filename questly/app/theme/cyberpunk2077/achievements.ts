import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

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
shadow-[0_0_25px_rgba(0,0,0,0.8)]
${
	completed
		? `
      bg-linear-to-b
      from-[#0c1018]
      via-[#090b12]
      to-[#05070c]
    `
		: `
      bg-linear-to-b
      from-[#1d1015]
      via-[#12090d]
      to-[#0b0508]
    `
}
${rajdhani.className}
${
	completed
		? `
      border-[#00e0ff]/50
      opacity-75
      hover:border-[#00e0ff]
      shadow-[0_0_30px_rgba(0,224,255,0.18)]
      before:absolute
      before:inset-0
      before:bg-[linear-gradient(120deg,transparent,rgba(0,224,255,0.04),transparent)]
      lg:flex
      lg:items-center
      lg:gap-4
    `
		: `
      border-[#ff204e]/40
      hover:border-[#00e0ff]
      hover:scale-[1.015]
      shadow-[0_0_30px_rgba(255,32,78,0.12)]
      lg:flex
      lg:items-center
      lg:gap-4
    `
}

backdrop-blur-md
shadow-[0_0_24px_rgba(0,0,0,0.75)]
hover:translate-x-1
hover:-translate-y-0.5
hover:scale-[1.01]

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

border
border-[#ff204e]/45

bg-[#090b12]/90

text-[#f5f7ff]
text-lg
font-medium
leading-none

shadow-[inset_0_0_8px_rgba(255,32,78,0.08),0_0_12px_rgba(255,32,78,0.12)]

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
border-[#00e0ff]/30

bg-linear-to-r
from-[#05070c]
via-[#111827]
to-[#05070c]

shadow-[0_0_18px_rgba(0,224,255,0.08)]

lg:col-[2/4]
lg:row-1

lg:gap-3
lg:px-4
lg:py-3

lg:border-3

${rajdhani.className}
`;

const achievementModalIcon = `w-10
lg:w-13.75

shrink-0

object-contain
object-bottom-right`;

const achievementModalTitle = `tracking-wide

text-[#f5f7ff]

uppercase

tracking-widest

truncate`;

const achievementModalDlc = `
h-3
lg:h-4

w-auto

shrink-0`;

const achievementModalDescription = `col-1
row-3
min-h-[20rem]
overflow-y-scroll
[scrollbar-width:thin]
[scrollbar-color:#ff204e_#05070c]

flex
flex-col
gap-3
flex-1
break-all

p-3
lg:p-3

text-sm
leading-relaxed

border-b
border-[#ff204e]/20

text-white

lg:col-2
lg:row-start-3
lg:row-end-5

lg:border-r
lg:border-y

${rajdhani.className}

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
border-[#00e0ff]/15

bg-black/30

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

text-xs
lg:text-sm

tracking-wide

border

cursor-pointer

transition-all
duration-200

uppercase

tracking-widest

shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]

${
	completed
		? `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#04070c]

text-[#00e0ff]

hover:border-[#ffe600]

shadow-[0_0_18px_rgba(0,224,255,0.18)]
`
		: `
border-[#ff204e]

bg-linear-to-b
from-[#220812]
to-[#07070c]

text-[#f5f7ff]

hover:border-[#00e0ff]

shadow-[0_0_18px_rgba(255,32,78,0.14)]
`
}
`;

const achievementModalCompleteIcon = (completed: boolean) => `
fill-current

${
	completed
		? `
opacity-100
text-[#00e0ff]

drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]
`
		: `
opacity-0
`
}

transition
`;

// --ACH---------TITLE--------------------

const achievementTitle = (completed: boolean) => `
col-start-2
row-start-2

lg:col-auto
lg:row-auto

text-lg

uppercase
tracking-wide

${
	completed
		? `text-[#00e0ff]
line-through
opacity-70`
		: `text-[#f5f7ff]`
}
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
text-[#7f8ea3]
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

text-[#ffe600]

uppercase
tracking-[0.25em]

border
border-[#ff204e]/40

backdrop-blur-sm
`;

// --ACH-------------IMAGE-------------------

const achievementImage = (completed: boolean) => `
lg:h-12.5
h-10

lg:w-12.5
w-10

object-contain

${
	!completed
		? `opacity-90
saturate-125
contrast-110`
		: `opacity-75
grayscale-[0.15]`
}
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
from-[#10131d]
to-[#05070c]

backdrop-blur-sm

shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]

${
	completed
		? `border-[#00e0ff]/50
shadow-[0_0_18px_rgba(0,224,255,0.18)]`
		: `border-[#ff204e]/35
shadow-[0_0_14px_rgba(255,32,78,0.12)]`
}
`;

const achievementImageOverlay = `
bg-[radial-gradient(circle,rgba(0,224,255,0.08),transparent_70%)]
`;

// --ACH-------------CORNERS-------------------

const achievementImageCornerBorders = `
absolute
w-3
h-3
z-30
`;

const achievementImageCornerStyles = (completed: boolean) =>
	`${
		completed
			? `
border-[#00e0ff]
shadow-[0_0_8px_rgba(0,224,255,0.35)]
`
			: `
border-[#ff204e]/60
shadow-[0_0_6px_rgba(255,230,0,0.18)]
`
	}`;

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
items-center
justify-center

cursor-pointer

border

transition-all
duration-200

uppercase
tracking-widest

shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]

shrink-0

lg:col-auto
lg:row-auto
lg:row-span-1
lg:self-auto

${
	completed
		? `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#04070c]

hover:border-[#00e0ff]

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
}
`;

const achievementButtonIcon = (completed: boolean) => `
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
scale-90
`
}`;

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

text-[#ff204e]

uppercase

tracking-widest
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
