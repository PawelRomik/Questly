const navbarBackgroundClass = `
  bg-black/90
  border-b
  border-white/10

  backdrop-blur-md

  shadow-lg
`;

// ----------------------------------------

const navDecorBaseClass = `
  bg-linear-to-b
  from-[#111111]
  to-[#050505]

  border-b
  border-white/5

  transition-colors
`;

// ----------------------------------------

const navLogoWrapperClass = `
  bg-linear-to-b
  from-[#151515]
  to-[#090909]

  
border-b-white

border-b-2


  relative
  overflow-hidden

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

const navLogoImageClass = `
  transition-transform
  duration-300
  w-full

  group-hover:scale-105
`;

// ----------------------------------------

const itemColors = [
	`
    from-[#111111]
    to-[#050505]

    hover:from-[#1a1a1a]
    hover:to-[#0d0d0d]

    border-white/10
  `,

	`
    from-[#101010]
    to-[#060606]

    hover:from-[#181818]
    hover:to-[#0c0c0c]

    border-white/10
  `,

	`
    from-[#121212]
    to-[#080808]

    hover:from-[#1b1b1b]
    hover:to-[#101010]

    border-white/10
  `,

	`
    from-[#0f0f0f]
    to-[#050505]

    hover:from-[#191919]
    hover:to-[#0d0d0d]

    border-white/10
  `
];

const navButtonClass = (id: number) => `
  bg-linear-to-b

  ${itemColors[id]}

border-b-white

border-b-2



  relative
  overflow-hidden

  transition-all
  duration-300


  hover:bg-[#181818]

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

// ----------------------------------------

export const defaultNavbarStyles = {
	base: () => ``,
	leftSideWrapper: () => ``,
	content: {
		base: () => navbarBackgroundClass,
		contentWrapper: () => ``
	},
	decor: {
		base: () => ``,
		layout: () => navDecorBaseClass
	},
	logo: {
		base: () => navLogoWrapperClass,
		image: () => navLogoImageClass
	},
	menu: {
		base: () => ``,
		item: () => ``,
		label: () => `
      text-white/80
      transition-colors

      hover:text-white
    `
	},
	button: {
		link: () => ``,
		base: (id: number) => navButtonClass(id)
	}
};
