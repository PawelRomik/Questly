import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

//--NAV--------------NAVBAR------------------

//--NAV--------------LAYOUT------------------

const navbarExpandable = `sticky top-0 z-100`;

const navbarBase = (isOpen: boolean) => `
${isOpen ? "sticky translate-y-0" : "fixed -translate-y-full"}
top-0
right-0
left-0

z-10

w-full
h-24

flex

text-2xl
font-bold

transition-transform
duration-300
`;

const navbarSide = ``;

const navbarContent = `
flex-1
flex
items-center

shadow-[0_0_35px_rgba(0,0,0,0.9)]

bg-linear-to-r
from-[#0c1018]
via-[#090b12]
to-[#05070c]

backdrop-blur-md
`;

const navbarInner = `flex w-full h-full overflow-hidden`;

// --NAV--------------DECOR-------------------

const navDecorWrapper = `w-32 h-full overflow-hidden`;

const navDecor = `
w-full
h-full

scale-x-150

shadow-[0_0_24px_rgba(0,0,0,0.8)]

border-b
border-[#00e0ff]/30

bg-linear-to-b
from-[#111827]
to-[#07090f]

transition-all
duration-200
`;

// --NAV----------------LOGO-----------------

const navLogoWrapper = `
relative

w-full
flex
items-center
justify-center

p-2

overflow-hidden

cursor-pointer

group

inset-shadow-2xl

border
border-[#00e0ff]/20

bg-linear-to-b
from-[#111827]
to-[#07090f]

text-[#f5f7ff]

uppercase

tracking-[0.2em]

transition-all
duration-200

shadow-[0_0_14px_rgba(0,0,0,0.6)]

hover:border-[#00e0ff]

hover:text-white

after:content-['']

after:absolute
after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-1/2
after:h-5/6

after:bg-linear-to-t
after:from-[#00e0ff]/35
after:via-[#00e0ff]/10
after:to-transparent

after:blur-2xl

after:opacity-0

after:transition-all
after:duration-200

hover:after:opacity-100
`;

const navLogoImage = `
h-full
w-20
object-contain

z-30

transition-all
duration-200

drop-shadow-[0_0_12px_#00e0ff]
`;

// --NAV-------------MENU-------------------

const navMenu = `
flex-2
flex
flex-col
lg:flex-row
lg:items-center
justify-around

h-full

text-white
`;

const navMenuItem = `
w-8 h-8 lg:w-12.5
lg:h-12.5

z-30

uppercase

tracking-widest
`;

const navMenuLabel = `
z-30
text-white
text-lg
lg:text-md
lg:text-[#f5f7ff]

group-hover:text-[#00e0ff]

transition-colors
`;

// --NAV-----------BUTTON--------------------

const navButtonLink = `w-full h-full`;

const itemColors = [
	`
after:from-[#00e0ff]/80
after:via-[#00e0ff]/30

from-[#111827]
to-[#07090f]

border-[#00e0ff]/20

hover:border-[#00e0ff]
`,
	`
after:from-[#ff204e]/80
after:via-[#ff204e]/30

from-[#180912]
to-[#09070c]

border-[#ff204e]/20

hover:border-[#ff204e]
`,
	`
after:from-[#ff204e]/80
after:via-[#ff204e]/30

from-[#180912]
to-[#09070c]

border-[#ff204e]/20

hover:border-[#ff204e]
`,
	`
after:from-[#00e0ff]/80
after:via-[#00e0ff]/30

from-[#111827]
to-[#07090f]

border-[#00e0ff]/20

hover:border-[#00e0ff]
`
];

const navButton = (id: number) => `
relative

overflow-hidden

w-full
h-full

flex
flex-col
lg:items-center
lg:justify-center

max-md:w-full
max-md:flex-row
max-md:items-center
max-md:gap-4
max-md:px-5
max-md:py-4
max-md:border-b
max-md:border-white/10
max-md:hover:bg-white/5
max-md:transition

px-5

cursor-pointer

inset-shadow-2xl

border

lg:bg-linear-to-b

${itemColors[id]}

uppercase

tracking-[0.2em]

text-[#f5f7ff]

transition-all
duration-200

shadow-[0_0_14px_rgba(0,0,0,0.6)]

${rajdhani.className}

hover:text-white

after:content-['']

after:absolute
after:inset-0

after:bg-linear-to-t
after:to-transparent

after:opacity-0

hover:after:opacity-100

after:transition
`;

const navbarToggleButton = `
absolute

left-1/2
-bottom-5

-z-50

-translate-x-1/2

flex
items-center
justify-center

px-3
py-1

rounded-b-lg

cursor-pointer

overflow-hidden

border
border-[#00e0ff]/30
border-t-0

bg-linear-to-b
from-[#111827]
to-[#07090f]

text-[#f5f7ff]

shadow-[0_0_18px_rgba(0,0,0,0.7)]

transition-all
duration-200

hover:border-[#00e0ff]

hover:text-[#00e0ff]

hover:shadow-[0_0_20px_rgba(0,224,255,0.35)]

after:content-['']

after:absolute
after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-2/3
after:h-full

after:bg-linear-to-t
after:from-[#00e0ff]/40
after:to-transparent

after:blur-xl

after:opacity-0

hover:after:opacity-100

after:transition-all
`;

// --NAV--------------MOBILE-----------------

const mobileNavbar = `
sticky
top-0
z-30
`;

const mobileNav = `
relative

h-16

bg-linear-to-r
from-[#0c1018]
via-[#090b12]
to-[#05070c]

backdrop-blur-md

border-b-3
border-[#ff204e]/60

shadow-[0_0_24px_rgba(0,0,0,0.8)]

flex
items-center
justify-center

px-4
`;

const mobileLogo = `
h-full
w-auto

py-2

object-contain

z-30

transition-all
duration-200

drop-shadow-[0_0_12px_#00e0ff]
`;

const mobileToggle = `
absolute

right-4

z-30

flex
items-center
justify-center

p-2

text-[#f5f7ff]

cursor-pointer

transition-all
duration-200

hover:text-[#00e0ff]

hover:drop-shadow-[0_0_8px_#00e0ff]
`;

const mobileMenu = `
relative

overflow-hidden

bg-linear-to-b
from-[#0c1018]
via-[#090b12]
to-[#05070c]

backdrop-blur-md

border-b
border-[#ff204e]/60

shadow-[0_0_30px_rgba(0,0,0,0.9)]

after:content-['']

after:absolute
after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-2/3
after:h-full

after:bg-linear-to-t
after:from-[#00e0ff]/10
after:to-transparent

after:blur-2xl

after:pointer-events-none
`;

const mobileSwitcher = `w-full
flex items-center gap-4 px-5 py-4
text-lg border-b border-white/10 hover:bg-white/5
transition text-white`;

const mobileSwitcherImage = `w-8`;

// --NAV-------EXPORT---------------

export const navbarStyles = {
	base: (isOpen: boolean) => navbarBase(isOpen),
	expandable: () => navbarExpandable,
	toggle: () => navbarToggleButton,
	leftSideWrapper: () => navbarSide,
	content: {
		base: () => navbarContent,
		contentWrapper: () => navbarInner
	},
	decor: {
		base: () => navDecorWrapper,
		layout: () => navDecor
	},
	logo: {
		base: () => navLogoWrapper,
		image: () => navLogoImage
	},
	menu: {
		base: () => navMenu,
		item: () => navMenuItem,
		label: () => navMenuLabel
	},
	button: {
		link: () => navButtonLink,
		base: (id: number) => navButton(id)
	},
	mobile: {
		base: () => mobileNavbar,

		nav: () => mobileNav,

		logo: () => mobileLogo,

		toggle: () => mobileToggle,

		menu: () => mobileMenu,
		switcher: {
			base: () => mobileSwitcher,
			image: () => mobileSwitcherImage
		}
	}
};
