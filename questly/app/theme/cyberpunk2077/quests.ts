// --QST---------------QUEST------------------
// --QST---------------ACCENT------------------

const questAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const questAccentBar = `absolute top-0 left-0 w-1 h-full`;

const questAccentGlow = `absolute top-0 left-0 w-4 h-full blur-md`;

const questAccentColor = ``;

// --QST---------------BUTTON------------------

const questButton = `w-8 h-8 flex items-center justify-center`;

const questButtonIcon = `w-4 h-4`;

// --QST---------------CONTENT------------------

const questContent = `flex flex-col items-start flex-1`;

// --QST---------------DESCRIPTION------------------

const questDescription = `text-sm text-left`;

// --QST---------------TITLE------------------

const questTitleWrapper = `flex items-center justify-center gap-1`;

const questTitle = `text-lg`;

// --QST---------------DIVIDER------------------

const questDivider = `w-px h-10 mx-2`;

// --QST---------------IMAGE------------------

const questImageWrapper = `relative flex items-center justify-center`;

const questDlc = `h-3 w-auto`;

const questImageContainer = `relative p-2 rounded-lg`;

const questImage = `h-14.5 w-14.5 object-cover`;

const questImageIcon = `absolute bottom-0 right-11 object-contain h-7.5 w-auto`;

// --QST---------------META------------------

const questMeta = `flex items-center justify-center gap-3 z-10`;

const questMetaLevel = `flex flex-col items-center`;

const questMetaLabel = `text-xs uppercase`;

const questMetaValue = `text-xl font-bold`;

// --QST---------------TAGS------------------

const questTags = `flex flex-wrap gap-2 mt-2`;

// --QST---------------REWARDS------------------

const questRewards = `flex flex-col items-end gap-1 z-10`;

const questRewardsTitle = `uppercase tracking-wide`;

const questRewardsList = `flex items-center justify-center gap-3`;

const questRewardItem = `flex items-center gap-1`;

const questRewardIcon = `object-contain h-4`;

// --QST---------------CONTAINER------------------

const questWrapper = `relative w-[95%] mx-auto flex items-center gap-4 p-4 overflow-hidden`;

const questWrapperContent = `flex-1 z-10`;

// --QST---------------EXPORT------------------

export const questStyles = {
	accent: {
		base: () => questAccentWrapper,
		bar: () => questAccentBar,
		glow: () => questAccentGlow,
		color: () => questAccentColor
	},
	button: {
		base: () => questButton,
		icon: () => questButtonIcon
	},
	content: {
		base: () => questContent,
		description: () => questDescription,
		title: {
			wrapper: () => questTitleWrapper,
			base: () => questTitle
		},
		dlc: () => questDlc
	},
	divider: () => questDivider,
	image: {
		wrapper: () => questImageWrapper,
		container: () => questImageContainer,
		base: () => questImage,
		icon: () => questImageIcon
	},
	meta: {
		base: () => questMeta,
		level: () => questMetaLevel,
		label: () => questMetaLabel,
		value: () => questMetaValue
	},
	tags: () => questTags,
	rewards: {
		base: () => questRewards,
		title: () => questRewardsTitle,
		list: () => questRewardsList,
		item: () => questRewardItem,
		icon: () => questRewardIcon
	},
	wrapper: {
		base: () => questWrapper,
		content: () => questWrapperContent
	}
};
