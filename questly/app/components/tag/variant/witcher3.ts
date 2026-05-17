const completedTagClass = `
  border border-[#1f6b2b]
  bg-linear-to-b from-[#0f2a14] to-[#07150a]
  text-[#b7f5c5]
  shadow-[inset_0_0_6px_rgba(0,255,100,0.1)]
`;

// ----------------------------------------

export const tagClass = (active: boolean) =>
	active
		? `
      border-[#e6c36a]

      bg-linear-to-b
      from-[#4a3f1f]
      to-[#2a2412]

      text-white

      shadow-[0_0_8px_rgba(255,215,0,0.3)]
    `
		: `
      border-[rgb(40,37,28)]

      bg-linear-to-b
      from-[#2a261c]
      to-[#1a1711]

      text-[#e6d3a3]

      shadow-[inset_0_0_6px_rgba(255,215,0,0.08)]

      hover:border-[#c6a85a]
      hover:text-white
    `;

export const witcher3Styles = {
	completed: {
		wrapper: () => ``,
		tag: () => completedTagClass
	},
	tag: (isActive: boolean) => tagClass(isActive)
};
