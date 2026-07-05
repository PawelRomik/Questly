const navbarLayoutClass = `
  sticky

  top-0 left-0

  z-10

  w-full

  h-24

  text-2xl font-bold

  flex
`;

const navbarSideLayoutClass = `

`;

const navbarContentLayoutClass = `
  flex-1

  flex items-center
`;

const navbarInnerLayoutClass = `
  flex

  w-full
  h-full

  overflow-hidden
`;

// ----------------------------------------

const navDecorWrapperLayoutClass = `
  w-32

  h-full

  overflow-hidden
`;

const navDecorLayoutClass = `
  w-full
  h-full

  scale-x-150
`;

const navDecorVariant = (isLeft: boolean) =>
	isLeft
		? `

    `
		: `
      
    `;

const navDecorClass = (isLeft: boolean) => `${navDecorLayoutClass} ${navDecorVariant(isLeft)}`;

// ----------------------------------------

const navLogoWrapperLayoutClass = `
  relative

  w-full

  flex items-center justify-center

  p-2

  overflow-hidden

  cursor-pointer

  group
`;

const navLogoImageLayoutClass = `
  h-full
  w-20

  object-contain

  z-30
`;

// ----------------------------------------

const navMenuLayoutClass = `
  flex-2

  flex items-center justify-around

  h-full

  text-white
`;

const navMenuItemLayoutClass = `
  w-12.5
  h-12.5

  z-30
`;

const navMenuLabelLayoutClass = `
  z-30
`;

// ----------------------------------------

const navButtonLinkLayoutClass = `
  w-full

  h-full
`;

const navButtonLayoutClass = `
  relative

  overflow-hidden

  w-full
  h-full

  flex flex-col

  items-center justify-center

  px-5

  uppercase

  cursor-pointer

  transition

  inset-shadow-2xl

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
`;

// ----------------------------------------

export const universalStyles = {
	base: () => navbarLayoutClass,
	leftSideWrapper: () => navbarSideLayoutClass,
	content: {
		base: () => navbarContentLayoutClass,
		contentWrapper: () => navbarInnerLayoutClass
	},
	decor: {
		base: () => navDecorWrapperLayoutClass,
		layout: (isLeft: boolean) => navDecorClass(isLeft)
	},
	logo: {
		base: () => navLogoWrapperLayoutClass,
		image: () => navLogoImageLayoutClass
	},
	menu: {
		base: () => navMenuLayoutClass,
		item: () => navMenuItemLayoutClass,
		label: () => navMenuLabelLayoutClass
	},
	button: {
		link: () => navButtonLinkLayoutClass,
		base: () => navButtonLayoutClass
	}
};
