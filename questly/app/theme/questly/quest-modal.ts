import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
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

z-80

w-[calc(100vw-1rem)]
max-w-[calc(100vw-1rem)]
max-h-[calc(100dvh-1rem)]

lg:w-250
lg:max-w-none
lg:max-h-none

overflow-y-auto

lg:min-h-150

bg-linear-to-b
from-[#161616]
to-[#080808]

border
border-white/10

shadow-[0_0_40px_rgba(0,0,0,0.7)]

text-white/85

backdrop-blur-xl

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
}`;

const questModalTrigger = `
w-full
lg:w-full
`;

const questModalOverlay = `
fixed
inset-0

z-30

bg-black/75

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
border-white/10

hover:bg-white/10
hover:border-white/20

transition-all
duration-200
`;

// --QML-----------CHARACTER----------

const modalCharacterWrapper = (showMap: boolean) => `
col-1
row-1

h-45

md:h-70

border-r
border-b
border-white/10

${showMap ? "lg:row-[1/5]" : "lg:row-[1/4]"}

lg:col-1

lg:h-auto
`;

const modalCharacterContainer = `
flex
items-center
justify-center

h-full

border-r
border-white/5

bg-[#0d0d0d]
`;

const modalCharacterImage = `
w-full
h-full

object-cover

object-[25%_25%]

lg:object-cover
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

border-r
border-y
border-white/10

text-white/65

lg:col-2
lg:row-start-3
lg:row-end-5

${inter.className}
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

px-3
py-3

border-t
border-white/10

bg-black/20

md:grid-cols-[1fr_auto_auto]
md:grid-rows-1

lg:col-[1/4]
lg:row-5

lg:gap-4
lg:px-4
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

text-sm
tracking-wide

cursor-pointer

transition-all
duration-200

border

backdrop-blur-sm

${
	completed
		? `
border-white/20

bg-linear-to-b
from-[#2a2a2a]
to-[#151515]

text-white

hover:border-white/35
`
		: `
border-white/10

bg-linear-to-b
from-[#1a1a1a]
to-[#0c0c0c]

text-white/80

hover:border-white/20
hover:text-white
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

${completed ? "opacity-100 text-white transition" : "opacity-0 transition"}
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

text-sm
tracking-wide

cursor-pointer

border
border-white/10

bg-linear-to-b
from-[#1a1a1a]
to-[#0b0b0b]

text-white/70

hover:border-white/20
hover:text-white

transition-all
duration-200
`;

const modalNextQuestButtonImage = `
w-4

lg:w-5

shrink-0
`;

const modalNextQuestTitle = `
max-w-20
lg:max-w-20

truncate

break-all

overflow-hidden

italic

text-white/40
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

text-xl

uppercase

border-b
border-white/10

bg-linear-to-r
from-[#0b0b0b]
via-[#151515]
to-[#0b0b0b]

lg:col-[2/4]
lg:row-1

lg:gap-3
lg:px-4
lg:py-3

${inter.className}
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

text-white

truncate
`;

const modalHeaderSubtitle = `
text-xs

lg:text-sm

text-white/50

shrink-0
`;

const modalHeaderLevel = `
text-xs

lg:text-sm

text-white/40

shrink-0
`;

// --QML-----------MAP----------

const modalMapWrapper = `
col-1
row-5

h-55

bg-black/20

border-b
border-white/10

lg:row-4
lg:col-1

lg:h-auto
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

text-white/35

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
col-1
row-4

p-3

border-y
border-white/10

bg-black/15

lg:col-3
lg:row-[3/5]

lg:p-4
`;

const modalRequirementsTitle = `
text-xs

uppercase

tracking-wider

mb-2

text-white/70
`;

const modalRequirementsList = `
flex
flex-wrap

gap-2

mt-3

lg:mt-4
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
py-1

text-xs

text-white/55

underline

hover:text-white
`;

const requirementTag = `
flex
items-center
`;

const requirementPrimary = `
px-2
py-1

text-xs

bg-[#2a2a2a]

text-white/70

rounded-l
`;

const requirementSecondary = `
px-2
py-1

text-xs

bg-[#101010]

text-white/45

rounded-r
`;

// --QML-----------REWARDS----------

const modalRewards = () => `
col-1
row-1

justify-self-start

flex
items-center
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

text-white/70
`;

const modalRewardsContent = `
flex
items-center
`;

const modalRewardsList = `
flex
items-center

justify-start

px-3

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
`;

const rewardIcon = `
w-5
h-5

shrink-0
`;

const rewardItems = `
flex

gap-3

flex-wrap

items-center
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
