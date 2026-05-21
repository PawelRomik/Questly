const completedTagClass = `
  border border-[#00e0ff]/40

  bg-linear-to-b
  from-[#07141a]
  to-[#04070c]

  text-[#00e0ff]

  uppercase
  tracking-widest

  shadow-[inset_0_0_8px_rgba(0,224,255,0.12)]
  shadow-[0_0_12px_rgba(0,224,255,0.18)]
`;

// ----------------------------------------

export const tagClass = (active: boolean) =>
	active
		? `
      border-[#ffe600]/50

      bg-linear-to-b
      from-[#2a2408]
      to-[#120f05]

      text-white

      uppercase
      tracking-widest

      shadow-[0_0_10px_rgba(255,230,0,0.28)]
    `
		: `
      border-[#ff204e]/25

      bg-linear-to-b
      from-[#1a0b12]
      to-[#09070c]

      text-[#f5f7ff]

      shadow-[inset_0_0_8px_rgba(255,32,78,0.08)]

      hover:border-[#00e0ff]

      hover:text-[#00e0ff]

      transition-all duration-200
    `;

export const cyberpunk2077Styles = {
	completed: {
		wrapper: () => ``,
		tag: () => completedTagClass
	},

	tag: (isActive: boolean) => tagClass(isActive)
};
