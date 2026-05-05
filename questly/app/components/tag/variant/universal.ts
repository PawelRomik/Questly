export const completedTagWrapperLayoutClass = `
  flex gap-2 mt-2 flex-wrap
`;

export const completedTagLayoutClass = `
  text-[10px] uppercase tracking-wide
  px-2 py-1
`;

// ----------------------------------------

export const universalStyles = {
	completed: {
		wrapper: () => completedTagWrapperLayoutClass,
		tag: () => completedTagLayoutClass
	}
};
