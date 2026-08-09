//--NAV--------------NAVBAR------------------

//--NAV--------------LAYOUT------------------

const navbarExpandable = `
sticky
top-0
z-100
`;

const navbarBase = (isOpen: boolean) => `
${isOpen ? "sticky translate-y-0" : "fixed -translate-y-full"}

top-0
right-0
left-0

z-30

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

bg-black/90

border-b
border-white/10

backdrop-blur-md

shadow-lg
`;

const navbarInner = `
flex

w-full
h-full

overflow-hidden
`;

// --NAV--------------DECOR-------------------

const navDecorWrapper = `
w-32
h-full

overflow-hidden
`;

const navDecor = `
w-full
h-full

scale-x-150

bg-linear-to-b
from-[#111111]
to-[#050505]

border-b
border-white/5

transition-colors
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

bg-linear-to-b
from-[#151515]
to-[#090909]

border-b-2
border-b-white

transition-all
duration-300

after:content-['']
after:absolute
after:inset-0

after:bg-linear-to-r
after:from-transparent
after:via-white/5
after:to-transparent

after:translate-x-[-120%]

after:transition-transform
after:duration-700

hover:after:translate-x-[120%]
`;

const navLogoImage = `
h-full
w-40

object-contain

z-30

transition-transform
duration-300

group-hover:scale-105
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
`;

const navMenuLabel = `
z-30

text-white
text-lg
lg:text-md
lg:text-[#f5f7ff]

transition-colors

hover:text-white
`;

// --NAV-----------BUTTON--------------------

const navButtonLink = `
w-full
h-full
`;

const itemColors = [
	`
lg:bg-linear-to-b
from-[#151515]
to-[#090909]

hover:from-[#1a1a1a]
hover:to-[#0d0d0d]

border-white/10
`,
	`
lg:bg-linear-to-b
from-[#101010]
to-[#060606]

hover:from-[#181818]
hover:to-[#0c0c0c]

border-white/10
`,
	`
lg:bg-linear-to-b
from-[#101010]
to-[#060606]

hover:from-[#1b1b1b]
hover:to-[#101010]

border-white/10
`,
	`
lg:bg-linear-to-b
from-[#151515]
to-[#090909]

hover:from-[#191919]
hover:to-[#0d0d0d]

border-white/10
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


px-5

uppercase

cursor-pointer

transition
duration-300

inset-shadow-2xl

${itemColors[id]}

border-b-2
border-b-white

hover:bg-[#181818]

after:content-['']
after:absolute
after:inset-0

lg:after:bg-linear-to-r
lg:after:from-transparent
lg:after:via-white/5
lg:after:to-transparent

after:translate-x-[-120%]

after:transition-transform
after:duration-700
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

hover:after:translate-x-[120%]
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

border
border-white/50
border-t-0

cursor-pointer

bg-linear-to-b
from-[#151515]
to-[#090909]

text-white/80

shadow-lg

transition-all
duration-200

hover:text-white

hover:from-[#1a1a1a]
hover:to-[#0d0d0d]

after:content-['']
after:absolute
after:inset-0

after:bg-linear-to-r
after:from-transparent
after:via-white/5
after:to-transparent

after:translate-x-[-120%]

after:transition-transform
after:duration-700

hover:after:translate-x-[120%]
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

bg-black/90

backdrop-blur-md

border-b-3
border-white

flex
items-center
justify-center

px-4
`;

const mobileLogo = `
h-full
w-auto

py-2
`;

const mobileToggle = `
absolute

right-4

text-white

cursor-pointer
`;

const mobileMenu = `
overflow-hidden

bg-linear-to-b
from-[#181818]
via-[#111111]
to-[#0b0b0b]

border-b
border-white/10
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
