import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --QML-----------QUEST MODAL----------
// --QML-----------BASE----------

const questModal = (showMap: boolean) => `
fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
z-40 w-250 min-h-150 overflow-hidden
${showMap ? "flex" : "grid grid-cols-[220px_2fr_1fr] grid-rows-[auto_auto_1fr_100px_70px]"}

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

border border-[#ff204e]/35

backdrop-blur-xl

shadow-[0_0_40px_rgba(0,0,0,0.9)]

text-[#f5f7ff]

${rajdhani.className}
`;

const questModalTrigger = `lg:w-full`;

const questModalOverlay = `
fixed inset-0 z-30

bg-black/85

backdrop-blur-md
`;

const modalCloseButton = `
absolute top-3 right-3 z-40
w-8 h-8
flex items-center justify-center
cursor-pointer

bg-black/40

border border-[#ff204e]/35

text-[#f5f7ff]

hover:bg-[#180912]

hover:border-[#00e0ff]

hover:text-[#00e0ff]

transition-all duration-200
`;

// --QML-----------CHARACTER----------

const modalCharacterWrapper = `
row-[1/4]
col-1

border-r
border-b
border-[#00e0ff]/25
`;

const modalCharacterContainer = `
flex items-center justify-center h-full

border-r border-[#ff204e]/20

bg-[#07090f]
`;

const modalCharacterImage = `
w-full
h-full
object-cover
`;

// --QML-----------DESCRIPTION----------

const modalDescription = `
col-2
row-3

flex
flex-col
gap-3

p-3

text-sm
leading-relaxed

border-r
border-y
border-[#ff204e]/20

text-[#7f8ea3]

${rajdhani.className}
`;

// --QML-----------FOOTER----------

const modalFooter = `
col-[1/4]
row-5

flex
items-center
justify-end

gap-4

px-4

border-t
border-[#00e0ff]/15

bg-black/30
`;

// --QML-----------COMPLETE BUTTON----------

const modalCompleteButton = (completed: boolean) => `
px-5
py-2

flex
items-center
gap-2

text-sm
tracking-wide

border

cursor-pointer

transition-all duration-200

uppercase

tracking-widest

shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]

${
	completed
		? `
border-[#00e0ff]

bg-linear-to-b
from-[#07141a]
to-[#04070c]

text-[#00e0ff]

hover:border-[#ffe600]

shadow-[0_0_18px_rgba(0,224,255,0.18)]
`
		: `
border-[#ff204e]

bg-linear-to-b
from-[#220812]
to-[#07070c]

text-[#f5f7ff]

hover:border-[#00e0ff]

shadow-[0_0_18px_rgba(255,32,78,0.14)]
`
}
`;

const modalCompleteButtonIconWrapper = `
w-5
h-5

p-0.5

flex
items-center
justify-center

border
border-current
`;

const modalCompleteButtonIcon = (completed: boolean) => `
fill-current

${
	completed
		? `
opacity-100

text-[#00e0ff]

drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]
`
		: `
opacity-0
`
}

transition
`;

// --QML--------NEXT QUEST BUTTON----------

const modalNextQuestLink = `
flex items-center justify-center

text-xs
`;

const modalNextQuestButton = `
px-5
py-2

flex
items-center
justify-center

gap-2

text-sm
tracking-wide

cursor-pointer

border border-[#ffe600]/25

bg-linear-to-b
from-[#16130a]
to-[#09070c]

text-[#ffe600]

uppercase

tracking-widest

hover:border-[#00e0ff]

hover:text-[#00e0ff]

transition-all duration-200

shadow-[inset_0_0_10px_rgba(255,230,0,0.05)]
`;

const modalNextQuestButtonImage = `
w-5
`;

const modalNextQuestTitle = `
max-w-20
break-all
overflow-hidden
truncate

italic

text-[#ff204e]
`;

// --QML-----------HEADER----------

const modalHeader = `
col-[2/4]
row-1

flex
items-center
gap-3

px-4
py-3

text-xl
uppercase

border border-[#00e0ff]/30

bg-linear-to-r
from-[#05070c]
via-[#111827]
to-[#05070c]

shadow-[0_0_18px_rgba(0,224,255,0.08)]

${rajdhani.className}
`;

const modalHeaderWrapper = `
flex
items-center
justify-start
gap-3
`;

const modalHeaderDLCImage = `
h-4
w-auto
`;

const modalHeaderImage = `
w-13.75
object-contain
object-bottom-right
`;

const modalHeaderTitle = `
tracking-wide

text-[#f5f7ff]

uppercase

tracking-widest
`;

const modalHeaderSubtitle = `
text-sm

text-[#00e0ff]

drop-shadow-[0_0_8px_rgba(0,224,255,0.7)]
`;

const modalHeaderLevel = `
text-sm

text-[#ffe600]
`;

// --QML-----------MAP----------

const modalMapWrapper = `
row-4
col-1

bg-black/20

border-[#ff204e]/20

border-b
`;

const modalMapContainer = `
h-full
w-full
overflow-hidden
`;

const modalMapContent = `
h-full
p-1

cursor-pointer

text-sm

text-[#7f8ea3]

opacity-60

hover:opacity-100

transition-all
duration-200
`;

const modalMapImage = `
h-full
w-full
object-cover
`;

const modalMapModalContainer = `
relative
h-[600px]
w-[1000px]
`;

// --QML-----------REQUIREMENTS----------

const modalRequirements = `
col-3
row-[3/5]

p-4

border-y
border-[#00e0ff]/15

bg-black/20
`;

const modalRequirementsTitle = `
text-xs

uppercase

tracking-wider

mb-2

text-[#ffe600]

tracking-widest
`;

const modalRequirementsList = `
flex
flex-wrap
gap-2
mt-4
`;

const requirementQuest = `
flex
items-center
`;

const requirementQuestIcon = `
w-4.5
`;

const requirementQuestLabel = `
pr-2
py-1

text-xs
`;

const requirementQuestLink = `
py-1
text-xs

text-[#00e0ff]

underline

hover:text-[#ffe600]
`;

const requirementTag = `
flex
items-center
`;

const requirementPrimary = `
px-2
py-1

text-xs

bg-[#111827]

text-[#00e0ff]

rounded-l
`;

const requirementSecondary = `
px-2
py-1

text-xs

bg-[#05070c]

text-[#f5f7ff]

rounded-r
`;

// --QML-----------REWARDS----------

const modalRewards = (hideMap: boolean) => `
${hideMap ? "col-[1/3]" : "col-2"}
row-4

flex
flex-col

p-4

border
border-t-0
border-[#ff204e]/20

bg-black/20
`;

const modalRewardsTitle = `
text-xs

uppercase

tracking-wider

text-[#ffe600]

tracking-widest
`;

const modalRewardsContent = `
h-full
flex
flex-1
flex-col
justify-center
`;

const modalRewardsList = `
flex
gap-6
`;

const rewardCurrency = `
flex
items-center
gap-2

h-full
`;

const rewardCurrencyValue = `
py-1

text-xs

text-[#ffe600]
`;

const rewardIcon = `
w-5
h-5

text-[#00e0ff]

max-w-6
w-auto

object-contain
`;

const rewardItems = `
flex
gap-3
flex-wrap
items-end

h-full

text-[#f5f7ff]
`;

// --QML-----------LIST----------

const questList = `
w-full
px-3

gap-8

flex
flex-col

items-center
`;

// --QML-----------EXPORT----------

export const questModalStyles = {
	base: (showMap: boolean) => questModal(showMap),
	trigger: () => questModalTrigger,
	overlay: () => questModalOverlay,
	closeButton: () => modalCloseButton,
	character: {
		wrapper: () => modalCharacterWrapper,
		container: () => modalCharacterContainer,
		image: () => modalCharacterImage
	},
	description: () => modalDescription,
	footer: () => modalFooter,
	completeButton: {
		base: (completed: boolean) => modalCompleteButton(completed),
		wrapper: () => modalCompleteButtonIconWrapper,
		icon: (completed: boolean) => modalCompleteButtonIcon(completed)
	},
	nextButton: {
		base: () => modalNextQuestButton,
		icon: () => modalNextQuestButtonImage,
		wrapper: () => modalNextQuestLink,
		title: () => modalNextQuestTitle
	},
	header: {
		base: () => modalHeader,
		title: {
			wrapper: () => modalHeaderWrapper,
			base: () => modalHeaderTitle,
			image: () => modalHeaderDLCImage
		},
		subtitle: () => modalHeaderSubtitle,
		image: () => modalHeaderImage,
		level: () => modalHeaderLevel
	},
	map: {
		wrapper: () => modalMapWrapper,
		container: () => modalMapContainer,
		content: () => modalMapContent,
		image: () => modalMapImage,
		modal: () => modalMapModalContainer
	},
	requirements: {
		base: () => modalRequirements,
		title: () => modalRequirementsTitle,
		list: () => modalRequirementsList,
		quest: {
			base: () => requirementQuest,
			icon: () => requirementQuestIcon,
			label: () => requirementQuestLabel,
			link: () => requirementQuestLink
		},
		tag: () => requirementTag,
		primary: () => requirementPrimary,
		secondary: () => requirementSecondary
	},
	rewards: {
		base: (hideMap: boolean) => modalRewards(hideMap),
		title: () => modalRewardsTitle,
		content: () => modalRewardsContent,
		list: () => modalRewardsList,
		currency: {
			base: () => rewardCurrency,
			value: () => rewardCurrencyValue,
			icon: () => rewardIcon
		},
		items: () => rewardItems
	},
	list: () => questList
};
