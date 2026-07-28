// --ITM------------ITEM--------------------

// --ITM-----------TOOLTIP BASE-----------------

const itemTooltip = `
w-64

z-70

bg-[#0d0d0d]

border
border-white/10

shadow-2xl

rounded-xl

text-white/85

backdrop-blur-xl
`;

const itemTooltipArrow = `
fill-[#1f1f1f]
`;

// --ITM---------TOOLTIP DESCRIPTION-----------------

const itemTooltipDescription = `
text-xs

p-3

mb-2

text-center

text-white/60
`;

// --ITM----------TOOLTIP REWARDS-----------------

const itemTooltipRewards = `
flex
items-center
justify-center

gap-1
`;

const itemTooltipRewardsIcon = `
w-5
h-5

object-contain
`;

// --ITM---------TOOLTIP FOOTER-----------------

const itemTooltipFooter = `
text-xs

p-2

mt-2

flex
justify-between

text-white/35
`;

// --ITM----------TOOLTIP HEADER-------------------

const itemTooltipHeaderName = `
font-semibold

mb-1

text-center

text-white
`;

const itemTooltipHeaderRarity = `
text-xs

mb-1

text-center

text-white/55
`;

const itemTooltipHeaderType = `
text-xs

mb-1

text-center

text-white/40
`;

// --ITM-----------TOOLTIP IMAGE----------------

const itemTooltipImageWrapper = `
mb-2

px-3
pt-3

flex
items-center
justify-center

border-b
border-white/10

bg-black/40
`;

const itemTooltipImage = `
h-32

object-contain

rounded-lg
`;

// --ITM--------------TRIGGER-------------------

const itemTrigger = `
flex
items-center

gap-2

text-xs

cursor-pointer
`;

const itemTriggerIcon = `
w-5
h-5

object-contain
`;

const itemTriggerAmount = `
ml-1

text-white/45
`;

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
