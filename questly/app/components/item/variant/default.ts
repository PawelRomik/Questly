const itemTooltipBaseClass = `
  bg-[#0d0d0d]

  border
  border-white/10

  shadow-2xl

  rounded-xl

  text-white/85

  backdrop-blur-xl
`;

const itemTooltipArrowClass = `
  fill-[#1f1f1f]
`;

// ----------------------------------------

const itemTooltipDescriptionClass = `
  text-white/60
`;

// ----------------------------------------

const itemTooltipFooterClass = `
  text-white/35
`;

// ----------------------------------------

const itemTooltipHeaderTypeClass = `
  text-white/40
`;

// ----------------------------------------

const itemTooltipImageWrapperClass = `
  border-b
  border-white/10

  bg-black/40
`;

const itemTooltipImageStyleClass = `
  rounded-lg
`;

// ----------------------------------------

const itemTriggerAmountClass = `
  text-white/45
`;

// ----------------------------------------

export const defaultItemStyles = {
	tooltip: {
		base: () => itemTooltipBaseClass,
		arrow: () => itemTooltipArrowClass,
		description: () => itemTooltipDescriptionClass,
		footer: () => itemTooltipFooterClass,
		header: {
			name: () => `
        text-white
      `,
			rarity: () => `
        text-white/55
      `,
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
