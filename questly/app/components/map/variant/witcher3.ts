const infoContainerClass = `
  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]

  shadow-[0_0_20px_rgba(0,0,0,0.7)]
`;

const infoTitleClass = `
  text-[#e6d3a3]

  tracking-wide

  drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
`;

const infoButtonClass = `
  cursor-pointer

  transition-all

  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#2a2214]
  via-[#20180f]
  to-[#15110b]

  text-[#d9c38b]

  shadow-[0_0_12px_rgba(0,0,0,0.65)]

  hover:brightness-110

  active:brightness-90
`;

export const witcher3Styles = {
	map: {},

	info: {
		container: () => infoContainerClass,
		title: () => infoTitleClass,
		button: () => infoButtonClass
	}
};
