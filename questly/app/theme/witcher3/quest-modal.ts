// --QML-----------QUEST MODAL----------
// --QML-----------BASE----------

const questModal = (showMap: boolean) => `Fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
z-40 w-250 min-h-150 overflow-hidden
${showMap ? "flex" : "grid grid-cols-[220px_2fr_1fr] grid-rows-[auto_auto_1fr_100px_70px]"}`;

const questModalTrigger = `w-full`;

const questModalOverlay = `fixed inset-0 z-30`;

const modalCloseButton = `absolute top-3 right-3 z-40 w-8 h-8 flex items-center justify-center cursor-pointer`;

// --QML-----------CHARACTER----------

const modalCharacterWrapper = `row-[1/4] col-1`;

const modalCharacterContainer = `flex items-center justify-center h-full`;

const modalCharacterImage = `w-full h-full object-cover`;

// --QML-----------DESCRIPTION----------

const modalDescription = `col-2 row-3 flex flex-col gap-3 p-3
text-sm leading-relaxed`;

// --QML-----------FOOTER----------

const modalFooter = `col-[1/4] row-5 flex items-center justify-end gap-4 px-4`;

// --QML-----------COMPLETE BUTTON----------

const modalCompleteButton = `px-5 py-2 flex items-center gap-2 text-sm tracking-wide border cursor-pointer`;

const modalCompleteButtonIconWrapper = `w-5 h-5 p-0.5 flex items-center justify-center
border border-current`;

const modalCompleteButtonIcon = `fill-current`;

// --QML--------NEXT QUEST BUTTON----------

const modalNextQuestLink = `flex items-center justify-center`;

const modalNextQuestButton = `px-5 py-2 flex items-center justify-center gap-2
text-sm tracking-wide cursor-pointer`;

const modalNextQuestButtonImage = `w-5`;

const modalNextQuestTitle = `max-w-20 break-all overflow-hidden truncate`;

// --QML-----------HEADER----------

const modalHeader = `col-[2/4] row-1 flex items-center gap-3 px-4 py-3
text-xl uppercase`;

const modalHeaderWrapper = `flex items-center justify-start gap-3`;

const modalHeaderDLCImage = `h-4 w-auto`;

const modalHeaderImage = `w-13.75 object-contain object-bottom-right`;

const modalHeaderTitle = `tracking-wide`;

const modalHeaderSubtitle = `text-sm`;

const modalHeaderLevel = `text-sm`;

// --QML-----------MAP----------

const modalMapWrapper = `row-4 col-1`;

const modalMapContainer = `h-full w-full overflow-hidden`;

const modalMapContent = `h-full p-1 cursor-pointer`;

const modalMapImage = `h-full w-full object-cover`;

const modalMapModalContainer = `relative h-[600px] w-[1000px]`;

// --QML-----------REQUIREMENTS----------

const modalRequirements = `col-3 row-[3/5] p-4`;

const modalRequirementsTitle = `text-xs uppercase tracking-wider mb-2`;

const modalRequirementsList = `flex flex-wrap gap-2 mt-4`;

const requirementQuest = `flex items-center`;

const requirementQuestIcon = `w-4.5`;

const requirementQuestLabel = `pr-2 py-1 text-xs`;

const requirementQuestLink = `py-1 text-xs`;

const requirementTag = `flex items-center`;

const requirementPrimary = ``;

const requirementSecondary = ``;

// --QML-----------REWARDS----------

const modalRewards = (hideMap: boolean) => `${hideMap ? "col-[1/3]" : "col-2"} row-4
flex flex-col p-4`;

const modalRewardsTitle = `text-xs uppercase tracking-wider`;

const modalRewardsContent = `h-full flex flex-1 flex-col justify-center`;

const modalRewardsList = `flex gap-6`;

const rewardCurrency = `flex items-center gap-2 items-center h-full`;

const rewardCurrencyValue = `py-1 text-xs`;

const rewardIcon = `w-5 h-5`;

const rewardItems = `flex gap-3 flex-wrap items-end h-full`;

// --QML-----------LIST----------

const questList = `w-full px-3 gap-8 flex flex-col items-center`;

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
		base: () => modalCompleteButton,
		wrapper: () => modalCompleteButtonIconWrapper,
		icon: () => modalCompleteButtonIcon
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
