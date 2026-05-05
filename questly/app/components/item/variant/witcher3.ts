export const itemTooltipBaseClass = `
  bg-zinc-950
  border-3 border-[rgb(50,37,28)]
  shadow-2xl
  rounded
   text-gray-200
`;

export const itemTooltipArrowClass = `
  fill-yellow-700
`;

// ----------------------------------------

export const itemTooltipDescriptionClass = `
  text-gray-300
`;

// ----------------------------------------

export const itemTooltipFooterClass = `
  text-gray-500
`;

// ----------------------------------------

export const itemTooltipHeaderTypeClass = `
  text-gray-400
`;

// ----------------------------------------

export const itemTooltipImageWrapperClass = `
  border-b-2 border-[rgb(40,37,28)]
  bg-black
`;

export const itemTooltipImageStyleClass = `
  rounded
`;

// ----------------------------------------

export const itemTriggerAmountClass = `
  text-gray-400
`;

// ----------------------------------------

export const witcher3Styles = {
	tooltip: {
		base: () => itemTooltipBaseClass,
		arrow: () => itemTooltipArrowClass,
		description: () => itemTooltipDescriptionClass,
		footer: () => itemTooltipFooterClass,
		header: {
			name: () => ``,
			rarity: () => ``,
			type: () => itemTooltipHeaderTypeClass
		},
		image: {
			wrapper: () => itemTooltipImageWrapperClass,
			image: () => itemTooltipImageStyleClass
		}
	},
	trigger: {
		base: () => ``,
		icon: () => ``,
		amount: () => itemTriggerAmountClass
	}
};
