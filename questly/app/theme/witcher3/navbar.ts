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

shadow-2xl

border-b-4
border-[#c97a00]
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

shadow-2xl

border-b-4
border-[#c97a00]

bg-linear-to-b
from-[#202020]
to-[#161616]

transition
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
from-[#202020]
to-[#161616]

after:content-['']
after:absolute

after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-4/7
after:h-5/6

after:bg-linear-to-t
after:from-yellow-500/80
after:via-yellow-400/40
after:to-transparent

after:blur-2xl

after:opacity-0

after:transition

hover:after:opacity-100
`;

const navLogoImage = `
h-full

w-20

object-contain

z-30

transition

group-hover:scale-110
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
`;

// --NAV-----------BUTTON--------------------

const navButtonLink = `
w-full
h-full
`;

const itemColors = [
	`
from-[#202020]
to-[#161616]

after:from-cyan-500/80
after:via-cyan-400/40
`,
	`
from-[#181818]
to-[#121212]

after:from-red-500/80
after:via-red-400/40
`,
	`
from-[#181818]
to-[#121212]

after:from-green-500/80
after:via-green-400/40
`,
	`
from-[#202020]
to-[#161616]

after:from-purple-500/80
after:via-purple-400/40
`
];

const navButton = (id: number) => `
relative

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

inset-shadow-2xl

lg:bg-linear-to-b

${itemColors[id]}

after:content-['']

after:absolute

after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-1/2
after:h-5/6

after:bg-linear-to-t
after:to-transparent

after:blur-2xl

after:opacity-0

after:transition

hover:after:opacity-100

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
`;

const navbarToggleButton = `
absolute


left-1/2
-bottom-5

-z-translate-x-1/2
-translate-x-1/2

z-50

flex
items-center
justify-center

px-3
py-1

rounded-b-lg

cursor-pointer

transition-all
duration-200

border
border-[#c97a00]
border-t-0

bg-linear-to-b
from-[#202020]
to-[#161616]

text-[#f2ede3]

shadow-2xl

hover:border-yellow-500

after:content-['']

after:absolute

after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-3/5
after:h-full

after:bg-linear-to-t
after:from-yellow-500/70
after:to-transparent

after:blur-xl

after:opacity-0

hover:after:opacity-100
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

bg-linear-to-b
from-[#202020]
to-[#161616]

border-b-4
border-[#c97a00]

shadow-2xl

backdrop-blur-md

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

transition
duration-300

hover:scale-105
`;

const mobileToggle = `
absolute

right-4

z-30

flex
items-center
justify-center

p-2

text-[#f2ede3]

cursor-pointer

transition-all
duration-200

hover:text-yellow-400

hover:scale-110
`;

const mobileMenu = `
overflow-hidden

bg-linear-to-b
from-[#202020]
to-[#161616]

border-b-4
border-[#c97a00]

shadow-2xl

backdrop-blur-md

relative

after:content-['']
after:absolute

after:bottom-0
after:left-1/2

after:-translate-x-1/2

after:w-3/5
after:h-full



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
