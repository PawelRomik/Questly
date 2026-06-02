const questModalLayoutClass = `
  fixed left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2

  z-40
  w-250 min-h-150

  overflow-hidden

  grid
  grid-cols-[220px_2fr_1fr]
  grid-rows-[auto_auto_1fr_100px_70px]
`;

// ----------------------------------------

const questModalTriggerLayoutClass = `
  w-full
`;

const questModalOverlayLayoutClass = `
  fixed inset-0 z-30
`;

// ----------------------------------------

const modalCloseButtonLayoutClass = `
  absolute top-3 right-3

  w-8 h-8

  flex items-center justify-center

  cursor-pointer
`;

// ----------------------------------------

const modalCharacterWrapperLayoutClass = `
  row-[1/4] col-1
`;

const modalCharacterContainerLayoutClass = `
  flex items-center justify-center
  h-full
`;

const modalCharacterImageLayoutClass = `
  w-full h-full object-cover
`;

// ----------------------------------------

const modalDescriptionLayoutClass = `
  col-2 row-3

  flex flex-col gap-3

  p-3

  text-sm leading-relaxed
`;

// ----------------------------------------

const modalFooterLayoutClass = `
  col-[1/4] row-5

  flex items-center justify-end gap-4

  px-4
`;

// ----------------------------------------

const modalCompleteButtonLayoutClass = `
  px-5 py-2

  flex items-center gap-2

  text-sm tracking-wide

  border

  cursor-pointer
`;

const modalCompleteButtonIconWrapperLayoutClass = `
  w-5 h-5 p-0.5

  flex items-center justify-center

  border border-current
`;

const modalCompleteButtonIconLayoutClass = `
  fill-current
`;

// ----------------------------------------

const modalNextQuestLinkLayoutClass = `
  flex items-center justify-center
`;

const modalNextQuestButtonLayoutClass = `
  px-5 py-2

  flex items-center justify-center gap-2

  text-sm tracking-wide

  cursor-pointer
`;

const modalNextQuestButtonImageLayoutClass = `
  w-5
`;

// ----------------------------------------

const modalHeaderLayoutClass = `
  col-[2/4]
  row-1

  flex items-center gap-3

  px-4 py-3

  text-xl uppercase
`;

const modalHeaderWrapperClass = `
flex items-center justify-center gap-3`;

const modalHeaderDLCImageClass = `h-4 w-auto`;

const modalHeaderImageLayoutClass = `
  w-13.75
  object-contain
  object-bottom-right
`;

const modalHeaderTitleLayoutClass = `
  tracking-wide
`;

const modalHeaderSubtitleLayoutClass = `
  text-sm
`;

const modalHeaderLevelLayoutClass = `
text-sm`;

// ----------------------------------------

const modalMapWrapperLayoutClass = `
  row-4 col-1
`;

const modalMapContainerLayoutClass = `
  h-full w-full
  overflow-hidden
`;

const modalMapContentLayoutClass = `
  h-full
  p-1

  cursor-pointer
`;

const modalMapImageLayoutClass = `
  h-full w-full
  object-cover
`;

// ----------------------------------------

const modalRequirementsLayoutClass = `
  col-3 row-[3/5]

  p-4
`;

const modalRequirementsTitleLayoutClass = `
  text-xs uppercase tracking-wider

  mb-2
`;

const modalRequirementsListLayoutClass = `
  flex flex-wrap gap-2

  mt-4
`;

const requirementQuestLayoutClass = `
  flex items-center
`;

const requirementQuestIconLayoutClass = `
  w-4.5
`;

const requirementQuestLabelLayoutClass = `
  pr-2 py-1
  text-xs
`;

const requirementQuestLinkLayoutClass = `
  py-1
  text-xs
`;

const requirementTagLayoutClass = `
  flex items-center
`;

// ----------------------------------------

const modalRewardsLayoutClass = `
  col-2 row-4

  flex flex-col
  

  p-4
`;

const modalRewardsTitleLayoutClass = `
  text-xs uppercase tracking-wider
`;

const modalRewardsContentLayoutClass = `
  h-full

  flex flex-1 flex-col justify-center
`;

const modalRewardsListLayoutClass = `
  flex gap-6 
  
`;

const rewardCurrencyLayoutClass = `
  flex items-center gap-2
  items-center
 h-full

`;

const rewardCurrencyValueLayoutClass = `
  py-1
  text-xs
  
`;

const rewardIconClass = `
w-5 h-5`;

const rewardItemsLayoutClass = `
  flex gap-3 flex-wrap
  items-end


  h-full
`;

// ----------------------------------------

const questListClass = `w-full px-3 gap-8 flex flex-col items-center`;

// ----------------------------------------

export const universalStyles = {
	base: () => questModalLayoutClass,
	trigger: () => questModalTriggerLayoutClass,
	overlay: () => questModalOverlayLayoutClass,
	closeButton: () => modalCloseButtonLayoutClass,
	character: {
		wrapper: () => modalCharacterWrapperLayoutClass,
		container: () => modalCharacterContainerLayoutClass,
		image: () => modalCharacterImageLayoutClass
	},
	description: () => modalDescriptionLayoutClass,
	footer: () => modalFooterLayoutClass,
	completeButton: {
		base: () => modalCompleteButtonLayoutClass,
		wrapper: () => modalCompleteButtonIconWrapperLayoutClass,
		icon: () => modalCompleteButtonIconLayoutClass
	},
	nextButton: {
		base: () => modalNextQuestButtonLayoutClass,
		icon: () => modalNextQuestButtonImageLayoutClass,
		wrapper: () => modalNextQuestLinkLayoutClass,
		title: () => ``
	},
	header: {
		base: () => modalHeaderLayoutClass,
		title: {
			wrapper: () => modalHeaderWrapperClass,
			base: () => modalHeaderTitleLayoutClass,
			image: () => modalHeaderDLCImageClass
		},
		subtitle: () => modalHeaderSubtitleLayoutClass,
		image: () => modalHeaderImageLayoutClass,
		level: () => modalHeaderLevelLayoutClass
	},
	map: {
		wrapper: () => modalMapWrapperLayoutClass,
		container: () => modalMapContainerLayoutClass,
		content: () => modalMapContentLayoutClass,
		image: () => modalMapImageLayoutClass
	},
	requirements: {
		base: () => modalRequirementsLayoutClass,
		title: () => modalRequirementsTitleLayoutClass,
		list: () => modalRequirementsListLayoutClass,
		quest: {
			base: () => requirementQuestLayoutClass,
			icon: () => requirementQuestIconLayoutClass,
			label: () => requirementQuestLabelLayoutClass,
			link: () => requirementQuestLinkLayoutClass
		},
		tag: () => requirementTagLayoutClass,
		primary: () => ``,
		secondary: () => ``
	},
	rewards: {
		base: () => modalRewardsLayoutClass,
		title: () => modalRewardsTitleLayoutClass,
		content: () => modalRewardsContentLayoutClass,
		list: () => modalRewardsListLayoutClass,
		currency: {
			base: () => rewardCurrencyLayoutClass,
			value: () => rewardCurrencyValueLayoutClass,
			icon: () => rewardIconClass
		},
		items: () => rewardItemsLayoutClass
	},
	list: () => questListClass
};
