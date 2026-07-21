const infoContainerClass = `
  border border-[#ff204e]/30

  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  backdrop-blur-md

  shadow-[0_0_22px_rgba(0,0,0,0.75)]
`;

const infoTitleClass = `
  text-[#f5f7ff]

  uppercase

  tracking-widest
`;

const infoButtonClass = `
  cursor-pointer

  transition-all duration-200

  border border-[#00e0ff]/40

  bg-linear-to-r
  from-[#0b1a24]
  via-[#0d2430]
  to-[#123447]

  text-[#00e0ff]

  shadow-[0_0_12px_rgba(0,224,255,0.25)]

  hover:border-[#00fff0]

  hover:brightness-110

  hover:shadow-[0_0_18px_rgba(0,224,255,0.35)]

  active:brightness-90
`;

export const cyberpunk2077Styles = {
	map: {},

	info: {
		container: () => infoContainerClass,
		title: () => infoTitleClass,
		button: () => infoButtonClass
	}
};
