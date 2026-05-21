import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

const navbarBackgroundClass = `
  shadow-[0_0_35px_rgba(0,0,0,0.9)]



  bg-linear-to-r
  from-[#0c1018]
  via-[#090b12]
  to-[#05070c]

  backdrop-blur-md
`;

// ----------------------------------------

const navDecorBaseClass = `
  shadow-[0_0_24px_rgba(0,0,0,0.8)]

  border-b
  border-[#00e0ff]/30

  bg-linear-to-b
  from-[#111827]
  to-[#07090f]

  transition-all duration-200

`;

// ----------------------------------------

const navLogoWrapperClass = `
  relative

  overflow-hidden

  inset-shadow-2xl

  border border-[#00e0ff]/20

  bg-linear-to-b
  from-[#111827]
  to-[#07090f]

  text-[#f5f7ff]

  uppercase
  tracking-[0.2em]

  transition-all duration-200

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

const navLogoImageClass = `
  transition-all duration-200



  drop-shadow-[0_0_12px_#00e0ff]
`;

// ----------------------------------------

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

const navButtonClass = (id: number) => `
  relative

  overflow-hidden

  border

  bg-linear-to-b

  ${itemColors[id]}

  uppercase
  tracking-[0.2em]

  text-[#f5f7ff]

  transition-all duration-200

  shadow-[0_0_14px_rgba(0,0,0,0.6)]

    ${rajdhani.className}

  hover:text-white

  after:absolute
  after:inset-0

  after:bg-linear-to-t
  after:to-transparent

  after:opacity-0

  hover:after:opacity-100

  after:transition
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
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

		item: () => `
      uppercase

      tracking-widest
    `,

		label: () => `
      text-[#f5f7ff]

      group-hover:text-[#00e0ff]

      transition-colors
    `
	},

	button: {
		link: () => ``,
		base: (id: number) => navButtonClass(id)
	}
};
