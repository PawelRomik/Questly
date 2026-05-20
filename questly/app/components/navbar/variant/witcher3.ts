const navbarBackgroundClass = `
  shadow-2xl

  border-b-4
  border-[#c97a00]
`;

// ----------------------------------------

const navDecorBaseClass = `
  shadow-2xl

  border-b-4
  border-[#c97a00]

  bg-linear-to-b
  from-[#202020]
  to-[#161616]

  transition
`;

// ----------------------------------------

const navLogoWrapperClass = `
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

const navLogoImageClass = `
  transition

  group-hover:scale-110
`;

// ----------------------------------------

const itemColors = [
	`
    after:from-cyan-500/80
    after:via-cyan-400/40

    from-[#202020]
    to-[#161616]
  `,

	`
    after:from-red-500/80
    after:via-red-400/40

    from-[#181818]
    to-[#121212]
  `,

	`
    after:from-green-500/80
    after:via-green-400/40

    from-[#181818]
    to-[#121212]
  `,

	`
    after:from-purple-500/80
    after:via-purple-400/40

    from-[#202020]
    to-[#161616]
  `
];

const navButtonClass = (id: number) => `
  bg-linear-to-b

  ${itemColors[id]}
`;

// ----------------------------------------

export const witcher3Styles = {
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
		label: () => ``
	},
	button: {
		link: () => ``,
		base: (id: number) => navButtonClass(id)
	}
};
