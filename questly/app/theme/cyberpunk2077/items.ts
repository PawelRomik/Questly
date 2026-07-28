// --ITM------------ITEM--------------------

// --ITM-----------TOOLTIP BASE-----------------

const itemTooltip = `
w-64 z-70

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

const itemTooltipArrow = `
fill-[#00e0ff]

drop-shadow-[0_0_6px_rgba(0,224,255,0.7)]
`;

// --ITM---------TOOLTIP DESCRIPTION-----------------

const itemTooltipDescription = `
text-xs
p-3
mb-2
text-center

text-[#7f8ea3]
`;

// --ITM----------TOOLTIP REWARDS-----------------

const itemTooltipRewards = `flex items-center gap-1 justify-center`;

const itemTooltipRewardsIcon = `w-5 object-contain h-5`;

// --ITM---------TOOLTIP FOOTER-----------------

const itemTooltipFooter = `
text-xs
p-2
flex
justify-between
mt-2

text-[#6f7b8f]

uppercase

tracking-wide
`;

// --ITM----------TOOLTIP HEADER-------------------

const itemTooltipHeaderName = `
font-semibold
mb-1
text-center

text-[#f5f7ff]

uppercase

tracking-wide
`;

const itemTooltipHeaderRarity = `
text-xs
mb-1
text-center

text-[#ff204e]

uppercase

tracking-widest
`;

const itemTooltipHeaderType = `
text-xs
mb-1
text-center

text-[#00e0ff]

uppercase

tracking-widest
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
border-[#ff204e]/25

bg-[#05070c]

shadow-[inset_0_0_12px_rgba(0,0,0,0.8)]
`;

const itemTooltipImage = `
h-32
object-contain

rounded

contrast-110
saturate-125
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

text-[#00e0ff]

drop-shadow-[0_0_8px_rgba(0,224,255,0.7)]
`;

const itemTriggerAmount = `
ml-1

text-[#ffe600]

font-semibold

drop-shadow-[0_0_6px_rgba(255,230,0,0.5)]
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
