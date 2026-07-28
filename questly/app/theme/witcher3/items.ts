// --ITM------------ITEM--------------------
// --ITM-----------TOOLTIP BASE-----------------

const itemTooltip = `
w-64

z-70

bg-zinc-950

border-3
border-[rgb(50,37,28)]

shadow-2xl

rounded

text-gray-200
`;

const itemTooltipArrow = `
fill-yellow-700
`;

// --ITM---------TOOLTIP DESCRIPTION-----------------

const itemTooltipDescription = `
text-xs

p-3

mb-2

text-center

text-gray-300
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

text-gray-500
`;

// --ITM----------TOOLTIP HEADER-------------------

const itemTooltipHeaderName = `
font-semibold

mb-1

text-center
`;

const itemTooltipHeaderRarity = `
text-xs

mb-1

text-center
`;

const itemTooltipHeaderType = `
text-xs

mb-1

text-center

text-gray-400
`;

// --ITM-----------TOOLTIP IMAGE----------------

const itemTooltipImageWrapper = `
mb-2

px-3
pt-3

flex
items-center
justify-center

border-b-2
border-[rgb(40,37,28)]

bg-black
`;

const itemTooltipImage = `
h-32

object-contain

rounded
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

text-gray-400
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
