// --ITM------------ITEM--------------------
// --ITM-----------TOOLTIP BASE-----------------

const itemTooltip = `w-64 z-70`;

const itemTooltipArrow = ``;

// --ITM---------TOOLTIP DESCRIPTION-----------------

const itemTooltipDescription = `text-xs p-3 mb-2 text-center`;

// --ITM----------TOOLTIP REWARDS-----------------

const itemTooltipRewards = `flex items-center gap-1 justify-center`;

const itemTooltipRewardsIcon = `w-5 object-contain h-5`;

// --ITM---------TOOLTIP FOOTER-----------------

const itemTooltipFooter = `text-xs p-2 flex justify-between mt-2`;

// --ITM----------TOOLTIP HEADER-------------------

const itemTooltipHeaderName = `font-semibold mb-1 text-center`;

const itemTooltipHeaderRarity = `text-xs mb-1 text-center`;

const itemTooltipHeaderType = `text-xs mb-1 text-center`;

// --ITM-----------TOOLTIP IMAGE----------------

const itemTooltipImageWrapper = `mb-2 px-3 pt-3 flex items-center justify-center`;

const itemTooltipImage = `h-32 object-contain`;

// --ITM--------------TRIGGER-------------------

const itemTrigger = `flex items-center gap-2 text-xs cursor-pointer`;

const itemTriggerIcon = `w-5 h-5 object-contain`;

const itemTriggerAmount = `ml-1`;

// --ITM------------EXPORT----------------

export const itemStyles = {
	tooltip: {
		base: () => itemTooltip,
		arrow: () => itemTooltipArrow,
		rewards: {
			base: () => itemTooltipRewards,
			icon: () => itemTooltipRewardsIcon
		},
		description: () => itemTooltipDescription,
		footer: () => itemTooltipFooter,
		header: {
			name: () => itemTooltipHeaderName,
			rarity: () => itemTooltipHeaderRarity,
			type: () => itemTooltipHeaderType
		},
		image: {
			wrapper: () => itemTooltipImageWrapper,
			image: () => itemTooltipImage
		}
	},
	trigger: {
		base: () => itemTrigger,
		icon: () => itemTriggerIcon,
		amount: () => itemTriggerAmount
	}
};
