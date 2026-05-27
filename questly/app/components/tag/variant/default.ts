const completedTagClass = `
  border border-white/15

  bg-linear-to-b
  from-[#262626]
  to-[#121212]

  text-white/85

  shadow-[inset_0_0_6px_rgba(255,255,255,0.04)]
`;

// ----------------------------------------

export const tagClass = (active: boolean) =>
	active
		? `
      border-white/25

      bg-linear-to-b
      from-[#2d2d2d]
      to-[#161616]

      text-white

      shadow-[0_0_10px_rgba(255,255,255,0.08)]
    `
		: `
      border-white/10

      bg-linear-to-b
      from-[#1b1b1b]
      to-[#0d0d0d]

      text-white/60

      shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]

      transition-all
      duration-200

      hover:border-white/20
      hover:text-white
      hover:bg-[#202020]
    `;

export const defaultTagStyles = {
	completed: {
		wrapper: () => ``,
		tag: () => completedTagClass
	},
	tag: (isActive: boolean) => tagClass(isActive)
};
