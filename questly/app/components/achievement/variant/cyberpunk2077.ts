import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

const achievementBaseClass = `
  transition-all duration-200

  border

  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  ${rajdhani.className}

  backdrop-blur-md

  shadow-[0_0_24px_rgba(0,0,0,0.75)]

  hover:translate-x-1
  hover:-translate-y-0.5
  hover:scale-[1.01]
`;

const achievementVariantClass = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]/50

      shadow-[0_0_28px_rgba(0,224,255,0.18)]

      hover:border-[#ffe600]
    `
		: `
      border-[#ff204e]/35

      hover:border-[#00e0ff]

      shadow-[0_0_20px_rgba(255,32,78,0.12)]
    `;

const achievementClass = (completed: boolean) => `${achievementBaseClass} ${achievementVariantClass(completed)}`;

// ----------------------------------------

const achievementHiddenClass = `
  bg-black/75

  text-[#ffe600]

  uppercase
  tracking-[0.25em]

  border border-[#ff204e]/40

  backdrop-blur-sm
`;

// ----------------------------------------

const achievementTitleVariant = (completed: boolean) =>
	completed
		? `
      text-[#00e0ff]

      line-through

      opacity-70
    `
		: `
      text-[#f5f7ff]

      uppercase

      tracking-wide
    `;

const achievementDescriptionClass = `
  text-[#7f8ea3]
`;

// ----------------------------------------

const achievementImageVariant = (completed: boolean) =>
	!completed
		? `
      opacity-90

      saturate-125
      contrast-110
    `
		: `
      opacity-75

      grayscale-[0.15]
    `;

const achievementImageContainerBaseClass = `
  bg-linear-to-b
  from-[#10131d]
  to-[#05070c]

  backdrop-blur-sm

  shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]
`;

const achievementImageContainerVariant = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]/50

      shadow-[0_0_18px_rgba(0,224,255,0.18)]
    `
		: `
      border-[#ff204e]/35

      shadow-[0_0_14px_rgba(255,32,78,0.12)]
    `;

// ----------------------------------------

const achievementImageCornerStyleClass = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]

      shadow-[0_0_8px_rgba(0,224,255,0.35)]
    `
		: `
      border-[#ffe600]/60

      shadow-[0_0_6px_rgba(255,230,0,0.18)]
    `;

// ----------------------------------------

const achievementImageOverlayClass = `
  bg-[radial-gradient(circle,rgba(0,224,255,0.08),transparent_70%)]
`;

// ----------------------------------------

const achievementButtonBaseClass = `
  border

  transition-all duration-200

  uppercase
  tracking-widest

  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
`;

const achievementButtonVariant = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]

      bg-linear-to-b
      from-[#07141a]
      to-[#04070c]

      hover:border-[#ffe600]

      shadow-[0_0_16px_rgba(0,224,255,0.16)]
    `
		: `
      border-[#ff204e]

      bg-linear-to-b
      from-[#220812]
      to-[#07070c]

      hover:border-[#00e0ff]

      shadow-[0_0_16px_rgba(255,32,78,0.14)]
    `;

// ----------------------------------------

const achievementButtonIconBaseClass = `
  fill-current

  transition-all duration-200
`;

const achievementButtonIconVariant = (completed: boolean) =>
	completed
		? `
      text-[#00e0ff]

      opacity-100
      scale-100

      drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]
    `
		: `
      text-[#ff204e]

      opacity-80
      scale-90
    `;

// ----------------------------------------

export const cyberpunk2077Styles = {
	root: () => ``,

	achievement: (completed: boolean) => achievementClass(completed),

	title: {
		wrapper: () => ``,
		base: (completed: boolean) => achievementTitleVariant(completed),
		icon: () => ``
	},

	hidden: () => achievementHiddenClass,

	description: achievementDescriptionClass,

	image: {
		wrapper: () => "",

		container: (completed: boolean) => `${achievementImageContainerBaseClass} ${achievementImageContainerVariant(completed)}`,

		img: (completed: boolean) => achievementImageVariant(completed),

		corners: {
			style: (completed: boolean) => achievementImageCornerStyleClass(completed),
			borders: () => ""
		},

		overlay: achievementImageOverlayClass
	},
	tags: () => `text-[#ff204e]

    uppercase

    tracking-widest`,
	button: {
		root: (completed: boolean) => `${achievementButtonBaseClass} ${achievementButtonVariant(completed)}`,

		icon: (completed: boolean) => `${achievementButtonIconBaseClass} ${achievementButtonIconVariant(completed)}`
	}
};
