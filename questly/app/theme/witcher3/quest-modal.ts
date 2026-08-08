import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// --QML-----------QUEST MODAL----------
// --QML-----------BASE----------

const questModal = (showMap: boolean) => `
fixed

left-1/2
top-1/2

-z-translate-x-1/2
-translate-x-1/2
-translate-y-1/2

z-40

w-250
min-h-150

overflow-hidden

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

border-4
border-[rgb(40,37,28)]

shadow-[0_0_40px_rgba(0,0,0,0.9)]

text-gray-200

${showMap ? "flex" : "grid grid-cols-[220px_2fr_1fr] grid-rows-[auto_auto_1fr_100px_70px]"}
`;

const questModalTrigger = `
lg:w-full
`;

const questModalOverlay = `
fixed

inset-0

z-30

bg-black/80

backdrop-blur-sm
`;

const modalCloseButton = `
absolute

top-3
right-3

z-40

w-8
h-8

flex
items-center
justify-center

cursor-pointer

bg-black/60

border
border-[#444]

hover:bg-[#7a1414]

transition
`;

// --QML-----------CHARACTER----------

const modalCharacterWrapper = `
row-[1/4]
col-1

border-r-3
border-b-3

border-[rgb(40,37,28)]
`;

const modalCharacterContainer = `
flex
items-center
justify-center

h-full

border-r

border-zinc-700

bg-zinc-900
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

border-r-3
border-y-3

border-[rgb(40,37,28)]

text-gray-300

${ptSans.className}
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

border-[#3a3a3a]

bg-black/50
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

transition-all
duration-200

shadow-[inset_0_0_12px_rgba(255,0,0,0.08)]

${
	completed
		? `
border-[#1f6b2b]
bg-linear-to-b
from-[#0f2a14]
to-[#07150a]

text-[#b7f5c5]

hover:border-[#2fa34a]
`
		: `
border-[#6b1f1f]
bg-linear-to-b
from-[#3a0d0d]
to-[#1a0505]

text-[#f0d9a7]

hover:border-[#a33]
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

${completed ? "opacity-100 transition" : "opacity-0 transition"}
`;

// --QML--------NEXT QUEST BUTTON----------

const modalNextQuestLink = `
flex
items-center
justify-center

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

border
border-[#6b5a2b]

bg-linear-to-b
from-[#1a1a1a]
to-[#0b0b0b]

text-[#e6d3a3]

hover:border-[#c6a85a]
hover:text-white

transition-all
duration-200

shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]
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

text-[#a68b5b]
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

border-3
border-[rgb(75,63,13)]

bg-linear-to-r
from-[#0a0a0a]
via-[#1a1405]
to-[#0a0a0a]

${ptSans.className}
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

text-white
`;

const modalHeaderSubtitle = `
text-sm

text-[rgb(255,203,14)]
`;

const modalHeaderLevel = `
text-sm

text-gray-300
`;

// --QML-----------MAP----------

const modalMapWrapper = `
row-4
col-1

bg-black/20

border-[rgb(40,37,28)]
border-b-3
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

text-gray-500

opacity-60

hover:opacity-100

transition
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

border-[rgb(40,37,28)]
border-y-3

bg-black/20
`;

const modalRequirementsTitle = `
text-xs

uppercase

tracking-wider

mb-2

text-[#a68b5b]
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

text-[#a68b5b]

underline

hover:text-blue-300
`;

const requirementTag = `
flex
items-center
`;

const requirementPrimary = `
px-2
py-1

text-xs

bg-zinc-700

rounded-l
`;

const requirementSecondary = `
px-2
py-1

text-xs

bg-zinc-950

rounded-r
`;

// --QML-----------REWARDS----------

const modalRewards = (hideMap: boolean) => `
${hideMap ? "col-[1/3]" : "col-2"}
row-4

flex
flex-col

p-4

border-3
border-t-0

border-[rgb(40,37,28)]

bg-black/20
`;

const modalRewardsTitle = `
text-xs

uppercase

tracking-wider

text-[#a68b5b]
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
`;

const rewardIcon = `
w-5
h-5
`;

const rewardItems = `
flex

gap-3

flex-wrap

items-end

h-full
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
