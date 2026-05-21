const itemTooltipBaseClass = `
  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  border border-[#ff204e]/35

  backdrop-blur-xl

  shadow-[0_0_35px_rgba(0,0,0,0.85)]

  rounded

  text-[#f5f7ff]
`;

const itemTooltipArrowClass = `
  fill-[#00e0ff]

  drop-shadow-[0_0_6px_rgba(0,224,255,0.7)]
`;

// ----------------------------------------

const itemTooltipDescriptionClass = `
  text-[#7f8ea3]
`;

// ----------------------------------------

const itemTooltipFooterClass = `
  text-[#6f7b8f]

  uppercase

  tracking-wide
`;

// ----------------------------------------

const itemTooltipHeaderTypeClass = `
  text-[#00e0ff]

  uppercase

  tracking-widest
`;

// ----------------------------------------

const itemTooltipImageWrapperClass = `
  border-b border-[#ff204e]/25

  bg-[#05070c]

  shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]
`;

const itemTooltipImageStyleClass = `
  rounded

  contrast-110
  saturate-125
`;

// ----------------------------------------

const itemTriggerAmountClass = `
  text-[#ffe600]

  font-semibold

  drop-shadow-[0_0_6px_rgba(255,230,0,0.5)]
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
	tooltip: {
		base: () => itemTooltipBaseClass,

		arrow: () => itemTooltipArrowClass,

		description: () => itemTooltipDescriptionClass,

		footer: () => itemTooltipFooterClass,

		header: {
			name: () => `
        text-[#f5f7ff]

        uppercase

        tracking-wide
      `,

			rarity: () => `
        text-[#ff204e]

        uppercase

        tracking-widest
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

		icon: () => `
      text-[#00e0ff]

      drop-shadow-[0_0_8px_rgba(0,224,255,0.7)]
    `,

		amount: () => itemTriggerAmountClass
	}
};
