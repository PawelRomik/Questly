const searchSettingsClass = `
  border border-white/10

  bg-linear-to-b
  from-[#141414]
  to-[#090909]

  backdrop-blur-md

  shadow-lg
`;

// ----------------------------------------

const searchStatClass = `
  border border-white/10

  bg-linear-to-b
  from-[#121212]
  to-[#080808]

  backdrop-blur-sm
`;

const searchStatItemClass = `
  border border-white/10

  bg-linear-to-b
  from-[#181818]
  to-[#0c0c0c]

  transition-all
  duration-200

  hover:border-white/20
  hover:bg-[#1b1b1b]
`;

const searchStatDotClass = `
  bg-white/70
`;

const searchStatLabelClass = `
  text-white/75
`;

const searchStatCounterClass = `
  border border-white/10

  bg-black/40

  text-white/85

  backdrop-blur-sm
`;

const searchStatButtonClass = `
  border border-white/10

  bg-linear-to-b
  from-[#202020]
  to-[#111111]

  text-white/80

  transition-all
  duration-200

  hover:border-white/20
  hover:from-[#2a2a2a]
  hover:to-[#171717]

  active:scale-[0.98]
`;

// ----------------------------------------

export const defaultStatisticsStyles = {
	base: () => searchSettingsClass,
	stat: {
		base: () => searchStatClass,
		item: {
			base: () => searchStatItemClass,
			left: () => ``,
			right: () => ``,
			dot: () => searchStatDotClass,
			label: () => searchStatLabelClass,
			counter: () => searchStatCounterClass,
			button: () => searchStatButtonClass
		}
	}
};
