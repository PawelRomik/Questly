const achievementBaseClass = `
  transition-all
  duration-200

  border

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  shadow-[0_0_20px_rgba(0,0,0,0.45)]

  hover:-translate-y-0.5
  hover:scale-[1.01]
`;

const achievementVariantClass = (completed: boolean) =>
	completed
		? `
      border-white/20

      shadow-[0_0_20px_rgba(255,255,255,0.06)]

      opacity-70
    `
		: `
      border-white/10

      hover:border-white/20
    `;

const achievementClass = (completed: boolean) => `
  ${achievementBaseClass}
  ${achievementVariantClass(completed)}
`;

// ----------------------------------------

const achievementHiddenClass = `
  bg-black/70

  text-white/45

  uppercase
  tracking-wide
`;

// ----------------------------------------

const achievementTitleVariant = (completed: boolean) =>
	completed
		? `
      line-through

      text-white/35
    `
		: `
      text-white/85
    `;

const achievementDescriptionClass = `
  text-white/50
`;

// ----------------------------------------

const achievementImageVariant = (completed: boolean) => (!completed ? "opacity-90" : "opacity-60");

// ----------------------------------------

const achievementImageContainerBaseClass = `
  bg-linear-to-b
  from-[#161616]
  to-[#0a0a0a]

  shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]

  border
`;

const achievementImageContainerVariant = (completed: boolean) =>
	completed
		? `
      border-white/20

      shadow-[0_0_12px_rgba(255,255,255,0.05)]
    `
		: `
      border-white/10
    `;

// ----------------------------------------

const achievementImageCornerStyleClass = (completed: boolean) =>
	completed
		? `
      border-white/25

      shadow-[0_0_6px_rgba(255,255,255,0.05)]
    `
		: `
      border-white/15
    `;

// ----------------------------------------

const achievementImageOverlayClass = `
  bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)]
`;

// ----------------------------------------

const achievementButtonBaseClass = `
  border

  transition-all
  duration-200
`;

// ----------------------------------------

const achievementButtonVariant = (completed: boolean) =>
	completed
		? `
      border-white/20

      bg-linear-to-b
      from-[#2a2a2a]
      to-[#141414]

      hover:border-white/35
    `
		: `
      border-white/10

      bg-linear-to-b
      from-[#181818]
      to-[#0b0b0b]

      hover:border-white/20
    `;

// ----------------------------------------

const achievementButtonIconBaseClass = `
  fill-current

  text-white

  transition-all
  duration-200
`;

const achievementButtonIconVariant = (completed: boolean) =>
	completed
		? `
      opacity-100
      scale-100
    `
		: `
      opacity-0
      scale-75
    `;

// ----------------------------------------

export const defaultAchievementStyles = {
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

		container: (completed: boolean) => `
      ${achievementImageContainerBaseClass}
      ${achievementImageContainerVariant(completed)}
    `,

		img: (completed: boolean) => achievementImageVariant(completed),

		corners: {
			style: (completed: boolean) => achievementImageCornerStyleClass(completed),
			borders: () => ""
		},

		overlay: achievementImageOverlayClass
	},

	button: {
		root: (completed: boolean) => `
      ${achievementButtonBaseClass}
      ${achievementButtonVariant(completed)}
    `,

		icon: (completed: boolean) => `
      ${achievementButtonIconBaseClass}
      ${achievementButtonIconVariant(completed)}
    `
	}
};
