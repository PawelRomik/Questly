const completedTagClass = `
  border border-[#1f6b2b]
  bg-linear-to-b from-[#0f2a14] to-[#07150a]
  text-[#b7f5c5]
  shadow-[inset_0_0_6px_rgba(0,255,100,0.1)]
`;

// ----------------------------------------

export const witcher3Styles = {
	completed: {
		wrapper: () => ``,
		tag: () => completedTagClass
	}
};
