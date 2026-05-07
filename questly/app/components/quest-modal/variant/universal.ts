export const questModalLayoutClass = `
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

export const questModalTriggerLayoutClass = `
  w-full
`;

export const questModalOverlayLayoutClass = `
  fixed inset-0 z-30
`;

// ----------------------------------------

export const modalCloseButtonLayoutClass = `
  absolute top-3 right-3

  w-8 h-8

  flex items-center justify-center

  cursor-pointer
`;

// ----------------------------------------

export const modalCharacterWrapperLayoutClass = `
  row-[1/4] col-1
`;

export const modalCharacterContainerLayoutClass = `
  flex items-center justify-center
  h-full
`;

export const modalCharacterImageLayoutClass = `
  w-full h-full object-cover
`;

// ----------------------------------------

export const modalDescriptionLayoutClass = `
  col-2 row-3

  flex flex-col gap-3

  p-3

  text-sm leading-relaxed
`;

// ----------------------------------------

export const modalFooterLayoutClass = `
  col-[1/4] row-5

  flex items-center justify-end gap-4

  px-4
`;

// ----------------------------------------

export const modalCompleteButtonLayoutClass = `
  px-5 py-2

  flex items-center gap-2

  text-sm tracking-wide

  border

  cursor-pointer
`;

export const modalCompleteButtonIconWrapperLayoutClass = `
  w-5 h-5 p-0.5

  flex items-center justify-center

  border border-current
`;

export const modalCompleteButtonIconLayoutClass = `
  fill-current
`;

// ----------------------------------------

export const modalNextQuestLinkLayoutClass = `
  flex items-center justify-center
`;

export const modalNextQuestButtonLayoutClass = `
  px-5 py-2

  flex items-center justify-center gap-2

  text-sm tracking-wide

  cursor-pointer
`;

export const modalNextQuestButtonImageLayoutClass = `
  w-5
`;

// ----------------------------------------

export const modalHeaderLayoutClass = `
  col-[2/4]
  row-1

  flex items-center gap-3

  px-4 py-3

  text-xl uppercase
`;

export const modalHeaderImageLayoutClass = `
  w-13.75
  object-contain
  object-bottom-right
`;

export const modalHeaderTitleLayoutClass = `
  tracking-wide
`;

export const modalHeaderSubtitleLayoutClass = `
  text-sm
`;

const modalHeaderLevelLayoutClass = `
text-sm`;

// ----------------------------------------

export const modalMapWrapperLayoutClass = `
  row-4 col-1
`;

export const modalMapContainerLayoutClass = `
  h-full w-full
  overflow-hidden
`;

export const modalMapContentLayoutClass = `
  h-full
  p-1

  cursor-pointer
`;

export const modalMapImageLayoutClass = `
  h-full w-full
  object-cover
`;

// ----------------------------------------

export const modalRequirementsLayoutClass = `
  col-3 row-[3/5]

  p-4
`;

export const modalRequirementsTitleLayoutClass = `
  text-xs uppercase tracking-wider

  mb-2
`;

export const modalRequirementsListLayoutClass = `
  flex flex-wrap gap-2

  mt-4
`;

export const requirementQuestLayoutClass = `
  flex items-center
`;

export const requirementQuestIconLayoutClass = `
  w-4.5
`;

export const requirementQuestLabelLayoutClass = `
  pr-2 py-1
  text-xs
`;

export const requirementQuestLinkLayoutClass = `
  py-1
  text-xs
`;

export const requirementTagLayoutClass = `
  flex items-center
`;

// ----------------------------------------

export const modalRewardsLayoutClass = `
  col-2 row-4

  flex flex-col
  

  p-4
`;

export const modalRewardsTitleLayoutClass = `
  text-xs uppercase tracking-wider
`;

export const modalRewardsContentLayoutClass = `
  h-full

  flex flex-1 flex-col justify-center
`;

export const modalRewardsListLayoutClass = `
  flex gap-6 
  
`;

export const rewardCurrencyLayoutClass = `
  flex items-center gap-2
  items-end
 h-full
`;

export const rewardCurrencyValueLayoutClass = `
  py-1
  text-xs
  
`;

export const rewardItemsLayoutClass = `
  flex gap-3 flex-wrap
  items-end

  h-full
`;

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
		title: () => modalHeaderTitleLayoutClass,
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
			value: () => rewardCurrencyValueLayoutClass
		},
		items: () => rewardItemsLayoutClass
	}
};
