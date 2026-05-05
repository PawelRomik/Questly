export const itemTooltipLayoutClass = `
  w-64 z-70
`;

// ----------------------------------------

export const itemTooltipDescriptionLayoutClass = `
  text-xs p-3 mb-2 text-center
`;

// ----------------------------------------

export const itemTooltipFooterLayoutClass = `
  text-xs p-2 flex justify-between mt-2
`;

// ----------------------------------------

export const itemTooltipHeaderNameLayoutClass = `
  font-semibold mb-1 text-center
`;

export const itemTooltipHeaderRarityLayoutClass = `
  text-xs mb-1 text-center
`;

export const itemTooltipHeaderTypeLayoutClass = `
  text-xs mb-1 text-center
`;

// ----------------------------------------

export const itemTooltipImageWrapperLayoutClass = `
  mb-2 px-3 pt-3
  flex items-center justify-center
`;

export const itemTooltipImageClass = `
  h-32 object-contain
`;

// ----------------------------------------

export const itemTriggerLayoutClass = `
  flex items-center gap-2 text-xs cursor-pointer
`;

export const itemTriggerIconLayoutClass = `
  w-3 object-contain
`;

export const itemTriggerAmountLayoutClass = `
  ml-1
`;

// ----------------------------------------

export const universalStyles = {
	tooltip: {
		base: () => itemTooltipLayoutClass,
		arrow: () => ``,
		description: () => itemTooltipDescriptionLayoutClass,
		footer: () => itemTooltipFooterLayoutClass,
		header: {
			name: () => itemTooltipHeaderNameLayoutClass,
			rarity: () => itemTooltipHeaderRarityLayoutClass,
			type: () => itemTooltipHeaderTypeLayoutClass
		},
		image: {
			wrapper: () => itemTooltipImageWrapperLayoutClass,
			image: () => itemTooltipImageClass
		}
	},
	trigger: {
		base: () => itemTriggerLayoutClass,
		icon: () => itemTriggerIconLayoutClass,
		amount: () => itemTriggerAmountLayoutClass
	}
};
