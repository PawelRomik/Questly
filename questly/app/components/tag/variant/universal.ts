const completedTagWrapperLayoutClass = `
  flex gap-2  flex-wrap
`;

const completedTagLayoutClass = `
  text-[10px] uppercase tracking-wide
  px-2 py-1
`;

// ----------------------------------------

const tagLayoutClass = `
  text-[10px]

  uppercase tracking-wide

  px-2 py-1

  border

  transition
`;

// ----------------------------------------

export const universalStyles = {
	completed: {
		wrapper: () => completedTagWrapperLayoutClass,
		tag: () => completedTagLayoutClass
	},
	tag: () => tagLayoutClass
};
