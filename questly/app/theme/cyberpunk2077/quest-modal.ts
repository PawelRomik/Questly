import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --QML-----------QUEST MODAL----------
// --QML-----------BASE----------

const questModal = (showMap: boolean) => `
fixed
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2

z-40

w-[calc(100vw-1rem)]
max-w-[calc(100vw-1rem)]
max-h-[calc(100dvh-1rem)]

lg:w-250
lg:max-w-none
lg:max-h-none

overflow-y-auto

lg:min-h-150

${
	showMap
		? "flex"
		: `
grid
grid-cols-1
grid-rows-[auto_auto_auto_auto_auto_auto]

lg:w-250
lg:max-w-none
lg:max-h-none
lg:overflow-hidden

lg:grid-cols-[220px_2fr_1fr]
lg:grid-rows-[auto_auto_1fr_100px_70px]
`
}

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

border
lg:border-4
border-[#ff204e]/35

backdrop-blur-xl

shadow-[0_0_40px_rgba(0,0,0,0.9)]

text-[#f5f7ff]

${rajdhani.className}
`;

const questModalTrigger = `
w-full
lg:w-full
`;

const questModalOverlay = `
fixed
inset-0
z-30

bg-black/85

backdrop-blur-md
`;

const modalCloseButton = `
absolute
top-2
right-2
lg:top-3
lg:right-3

z-40

w-8
h-8

flex
items-center
justify-center

cursor-pointer

bg-black/40

border
border-[#ff204e]/35

text-[#f5f7ff]

hover:bg-[#180912]
hover:border-[#00e0ff]
hover:text-[#00e0ff]

transition-all
duration-200
`;

// --QML-----------CHARACTER----------

const modalCharacterWrapper = (showMap: boolean) => `
col-1
row-1

h-45
md:h-70

border-b
border-[#00e0ff]/25

${showMap ? "lg:row-[1/5]" : "lg:row-[1/4]"}

lg:col-1
lg:h-auto

lg:border-r
lg:border-b

${showMap ? "lg:border-b-3" : "lg:border-b-3"}
`;

const modalCharacterContainer = `
flex
items-center
justify-center

h-full

border-r
border-[#ff204e]/20

bg-[#07090f]
`;

const modalCharacterImage = `
w-full
h-full

object-cover
object-[25%_25%]
`;

// --QML-----------DESCRIPTION----------

const modalDescription = `
col-1
row-3

min-h-[20rem]

flex
flex-col
gap-3

p-3
lg:p-3

text-sm
leading-relaxed

border-b
border-[#ff204e]/20

text-[#7f8ea3]

lg:col-2
lg:row-start-3
lg:row-end-5

lg:border-r
lg:border-y

${rajdhani.className}
`;

// --QML-----------FOOTER----------

const modalFooter = `
col-1
row-6

grid
grid-cols-[1fr_auto]
grid-rows-[auto_auto]

items-center
gap-2

py-2
md:py-0

border-t
border-[#00e0ff]/15

bg-black/30

md:grid-cols-[1fr_auto_auto]
md:grid-rows-1

lg:col-[1/4]
lg:row-5

lg:gap-4
lg:pr-2
lg:py-0
`;

// --QML-----------COMPLETE BUTTON----------

const modalCompleteButton = (completed: boolean) => `
justify-self-center

row-2
col-[1/3]

h-15
w-full

md:row-1
md:col-start-3

md:w-full
md:justify-self-end

px-3
lg:px-5

py-2

flex
items-center
justify-center
gap-2

text-xs
lg:text-sm

tracking-wide

border

cursor-pointer

transition-all
duration-200

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
shrink-0

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
flex
items-center
justify-end

text-xs

w-full

col-2
row-1

md:col-2
md:row-1

md:w-auto
md:justify-self-end
`;

const modalNextQuestButton = `
px-3

w-full
md:w-auto

lg:w-55
lg:px-5

py-2

flex
items-center
justify-center

gap-2

text-xs
lg:text-sm

tracking-wide

cursor-pointer

border
border-[#ffe600]/25

bg-linear-to-b
from-[#16130a]
to-[#09070c]

text-[#ffe600]

uppercase

tracking-widest

hover:border-[#00e0ff]
hover:text-[#00e0ff]

transition-all
duration-200

shadow-[inset_0_0_10px_rgba(255,230,0,0.05)]
`;

const modalNextQuestButtonImage = `
w-4
lg:w-5

shrink-0
`;

const modalNextQuestTitle = `
max-w-20
lg:max-w-20

break-all
overflow-hidden
truncate

italic

text-[#ff204e]
`;

// --QML-----------HEADER----------

const modalHeader = `
col-1
row-2

flex
items-center

gap-2

px-3
py-3
pr-12

text-lg
lg:text-xl

uppercase

border-b
border-[#00e0ff]/30

bg-linear-to-r
from-[#05070c]
via-[#111827]
to-[#05070c]

shadow-[0_0_18px_rgba(0,224,255,0.08)]

lg:col-[2/4]
lg:row-1

lg:gap-3
lg:px-4
lg:py-3

lg:border-3

${rajdhani.className}
`;

const modalHeaderWrapper = `
flex
items-center
justify-start

gap-2
lg:gap-3

min-w-0
`;

const modalHeaderDLCImage = `
h-3
lg:h-4

w-auto

shrink-0
`;

const modalHeaderImage = `
w-10
lg:w-13.75

shrink-0

object-contain
object-bottom-right
`;

const modalHeaderTitle = `
tracking-wide

text-[#f5f7ff]

uppercase

tracking-widest

truncate
`;

const modalHeaderSubtitle = `
text-xs
lg:text-sm

flex gap-3

text-[#00e0ff]

drop-shadow-[0_0_8px_rgba(0,224,255,0.7)]

shrink-0
`;

const modalHeaderLevel = `
text-xs
lg:text-sm

text-[#ffe600]

shrink-0
`;

// --QML-----------MAP----------

const modalMapWrapper = `
col-1
row-5

h-55

bg-black/20

border-b
border-[#ff204e]/20

lg:row-4
lg:col-1

lg:h-auto

lg:border-b-3
lg:border-r-3
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
col-1
row-4
flex flex-col
gap-5
justify-start

p-3
lg:p-4

border-b
border-[#00e0ff]/15

bg-black/20

lg:col-3
lg:row-[3/5]

lg:border-y-3
`;

const modalRequirementsTitle = `
text-xs

uppercase

tracking-wider
underline

mb-2

text-[#ffe600]

tracking-widest
`;

const modalRequirementsList = `
flex
	flex-col
	gap-2
	justify-end
`;

const requirementQuest = `
flex
flex-col

items-start

min-w-0
`;

const requirementQuestIcon = `
w-4.5

shrink-0
`;

const requirementQuestLabel = `
pr-2
py-1

text-xs

truncate
`;

const requirementQuestLink = `


flex

text-xs

text-[#00e0ff]

underline

hover:text-[#ffe600]
`;

const requirementTag = `
text-sm
items-center
`;

const requirementMarker = `
bg-[#ffe600]
size-1 rounded-full shrink-0
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

const modalRewards = () => `
col-1
row-1

justify-self-start

flex
mx-auto
md:mx-5
lg:mx-0
justify-center

min-w-0

md:col-1
md:row-1

md:justify-self-start

lg:flex
lg:flex-col
lg:p-4
`;

const modalRewardsTitle = `
hidden

lg:block

text-xs

py-1

uppercase

tracking-wider

text-[#ffe600]

tracking-widest
`;

const modalRewardsContent = `
flex
items-center
`;

const modalRewardsList = `
flex
items-center

justify-start

flex-wrap

gap-3
lg:gap-6
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

shrink-0

text-[#00e0ff]

max-w-6
w-auto

object-contain
`;

const rewardItems = `
flex
gap-2
flex-wrap

items-center

text-[#f5f7ff]
`;

// --QML-----------LIST----------

const questList = `
w-full

px-3

gap-4
lg:gap-8

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
		wrapper: (showMap: boolean) => modalCharacterWrapper(showMap),
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
		marker: () => requirementMarker,
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
		base: () => modalRewards(),
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
