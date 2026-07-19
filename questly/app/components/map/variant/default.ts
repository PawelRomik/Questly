const infoContainerClass = `
  border border-white/10

  bg-linear-to-b
  from-[#141414]
  to-[#090909]

  backdrop-blur-md

  shadow-[0_0_18px_rgba(0,0,0,0.45)]
`;

const infoTitleClass = `
  text-white

  font-semibold

  tracking-wide
`;

const infoButtonClass = `
  cursor-pointer

  transition-all
  duration-200

  border border-white/10

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0d0d0d]

  text-white/90

  shadow-[inset_0_0_8px_rgba(255,255,255,0.03)]

  hover:border-white/20

  hover:bg-[#1b1b1b]

  hover:text-white

  active:brightness-90
`;

export const defaultStyles = {
	map: {},

	info: {
		container: () => infoContainerClass,
		title: () => infoTitleClass,
		button: () => infoButtonClass
	}
};
