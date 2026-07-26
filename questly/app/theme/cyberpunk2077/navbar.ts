//--NAV--------------NAVBAR------------------
//--NAV--------------LAYOUT------------------
const navbarExpandable = `sticky top-0 z-100`;

const navbarBase = (isOpen: boolean) => `${isOpen ? "sticky translate-y-0" : "fixed -translate-y-full"}
top-0 right-0 left-0 z-10 w-full h-24 transition-transform duration-300 text-2xl font-bold flex`;

const navbarSide = ``;

const navbarContent = `flex-1 flex items-center`;

const navbarInner = `flex w-full h-full overflow-hidden`;

// --NAV--------------DECOR-------------------

const navDecorWrapper = `w-32 h-full overflow-hidden`;

const navDecor = `w-full h-full scale-x-150`;

// --NAV----------------LOGO-----------------

const navLogoWrapper = `relative w-full flex items-center justify-center p-2 overflow-hidden cursor-pointer group`;

const navLogoImage = `h-full w-20 object-contain z-30`;

// --NAV-------------MENU-------------------

const navMenu = `flex-2 flex items-center justify-around h-full text-white`;

const navMenuItem = `w-12.5 h-12.5 z-30`;

const navMenuLabel = `z-30`;

// --NAV-----------BUTTON--------------------

const navButtonLink = `w-full h-full`;

const navButton = `relative overflow-hidden w-full h-full flex flex-col items-center justify-center
px-5 uppercase cursor-pointer transition inset-shadow-2xl
after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2
after:h-5/6 after:bg-linear-to-t after:to-transparent after:blur-2xl after:opacity-0 after:transition
hover:after:opacity-100
`;

const navbarToggleButton = `absolute left-1/2 -bottom-5 -translate-x-1/2 z-50
flex items-center justify-center px-3 py-1 rounded-b-lg border-t-0 cursor-pointer 
transition-all duration-200
`;

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
		base: () => navButton
	}
};
