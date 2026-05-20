const itemTooltipLayoutClass = `
  w-64 z-70
`;

// ----------------------------------------

const itemTooltipDescriptionLayoutClass = `
  text-xs p-3 mb-2 text-center
`;

// ----------------------------------------

const itemTooltipFooterLayoutClass = `
  text-xs p-2 flex justify-between mt-2
`;

// ----------------------------------------

const itemTooltipHeaderNameLayoutClass = `
  font-semibold mb-1 text-center
`;

const itemTooltipHeaderRarityLayoutClass = `
  text-xs mb-1 text-center
`;

const itemTooltipHeaderTypeLayoutClass = `
  text-xs mb-1 text-center
`;

// ----------------------------------------

const itemTooltipImageWrapperLayoutClass = `
  mb-2 px-3 pt-3
  flex items-center justify-center
`;

const itemTooltipImageClass = `
  h-32 object-contain
`;

// ----------------------------------------

const itemTriggerLayoutClass = `
  flex items-center gap-2 text-xs cursor-pointer
`;

const itemTriggerIconLayoutClass = `
  w-5 h-5 object-contain
`;

const itemTriggerAmountLayoutClass = `
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
