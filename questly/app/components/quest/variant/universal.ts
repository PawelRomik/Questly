const questAccentWrapperLayoutClass = `
  pointer-events-none

  absolute inset-y-0 left-0

  w-12
`;

const questAccentBarLayoutClass = `
  absolute top-0 left-0

  w-1 h-full
`;

const questAccentGlowLayoutClass = `
  absolute top-0 left-0

  w-4 h-full

  blur-md
`;

// ----------------------------------------

const questButtonLayoutClass = `
  w-8 h-8

  flex items-center justify-center
`;

const questButtonIconLayoutClass = `
  w-4 h-4
`;

// ----------------------------------------

const questContentLayoutClass = `
  flex flex-col

  items-start

  flex-1
`;

// ----------------------------------------

const questDescriptionLayoutClass = `
  text-sm

  text-left
`;

// ----------------------------------------

const questTitleWrapperLayoutClass = `
  flex items-center justify-center

  gap-1
`;

const questTitleLayoutClass = `
  text-lg
`;

// ----------------------------------------

const questDividerLayoutClass = `
  w-px

  h-10

  mx-2
`;

// ----------------------------------------

const questImageWrapperLayoutClass = `
  relative

  flex items-center justify-center
`;

const questDlcClass = `h-3 w-auto`;

const questImageContainerLayoutClass = `
  relative

  p-2

  rounded-lg
`;

const questImageLayoutClass = `
  h-14.5 w-14.5

  object-cover
`;

const questImageIconLayoutClass = `
  absolute

  bottom-0
  right-11

  object-contain

  h-7.5
  w-auto
`;

// ----------------------------------------

const questMetaLayoutClass = `
  flex items-center justify-center

  gap-3

  z-10
`;

const questMetaLevelLayoutClass = `
  flex flex-col items-center
`;

const questMetaLabelLayoutClass = `
  text-xs

  uppercase
`;

const questMetaValueLayoutClass = `
  text-xl

  font-bold
`;

// ----------------------------------------

const questTagsLayoutClass = `
  flex flex-wrap

  gap-2

  mt-2
`;

// ----------------------------------------

const questRewardsLayoutClass = `
  flex flex-col

  items-end

  gap-1

  z-10
`;

const questRewardsTitleLayoutClass = `
  uppercase tracking-wide
`;

const questRewardsListLayoutClass = `
  flex items-center justify-center

  gap-3
`;

const questRewardItemLayoutClass = `
  flex items-center

  gap-1
`;

const questRewardIconLayoutClass = `
 object-contain h-4 
`;

// ----------------------------------------

const questWrapperLayoutClass = `
  relative

  w-[95%]

  mx-auto

  flex items-center

  gap-4

  p-4

  overflow-hidden
`;

const questWrapperContentLayoutClass = `
  flex-1

  z-10
`;

// ----------------------------------------

export const universalStyles = {
	accent: {
		base: () => questAccentWrapperLayoutClass,
		bar: () => questAccentBarLayoutClass,
		glow: () => questAccentGlowLayoutClass,
		color: () => ``
	},
	button: {
		base: () => questButtonLayoutClass,
		icon: () => questButtonIconLayoutClass
	},
	content: {
		base: () => questContentLayoutClass,
		description: () => questDescriptionLayoutClass,
		title: {
			wrapper: () => questTitleWrapperLayoutClass,
			base: () => questTitleLayoutClass
		},
		dlc: () => questDlcClass
	},
	divider: () => questDividerLayoutClass,
	image: {
		wrapper: () => questImageWrapperLayoutClass,
		container: () => questImageContainerLayoutClass,
		base: () => questImageLayoutClass,
		icon: () => questImageIconLayoutClass
	},
	meta: {
		base: () => questMetaLayoutClass,
		level: () => questMetaLevelLayoutClass,
		label: () => questMetaLabelLayoutClass,
		value: () => questMetaValueLayoutClass
	},
	tags: () => questTagsLayoutClass,
	rewards: {
		base: () => questRewardsLayoutClass,
		title: () => questRewardsTitleLayoutClass,
		list: () => questRewardsListLayoutClass,
		item: () => questRewardItemLayoutClass,
		icon: () => questRewardIconLayoutClass
	},
	wrapper: {
		base: () => questWrapperLayoutClass,
		content: () => questWrapperContentLayoutClass
	}
};
