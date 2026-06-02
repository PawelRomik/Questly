import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const questModalClass = `
  bg-linear-to-b
  from-[#161616]
  to-[#080808]

  border
  border-white/10

  shadow-[0_0_40px_rgba(0,0,0,0.7)]

  text-white/85

  backdrop-blur-xl
`;

// ----------------------------------------

const questModalOverlayClass = `
  bg-black/75

  backdrop-blur-md
`;

// ----------------------------------------

const modalCloseButtonClass = `
  bg-black/40

  border
  border-white/10

  hover:bg-white/10
  hover:border-white/20

  transition-all
  duration-200
`;

// ----------------------------------------

const modalCharacterWrapperClass = `
  border-r
  border-b
  border-white/10
`;

const modalCharacterContainerClass = `
  border-r
  border-white/5

  bg-[#0d0d0d]
`;

// ----------------------------------------

const modalDescriptionClass = `
  border-r
  border-y
  border-white/10

  text-white/65

  ${inter.className}
`;

// ----------------------------------------

const modalFooterClass = `
  border-t
  border-white/10

  bg-black/20
`;

// ----------------------------------------

const modalCompleteButtonStyles = `
  transition-all
  duration-200

  border

  backdrop-blur-sm
`;

const modalCompleteButtonVariant = (completed: boolean) =>
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
    `;

const modalCompleteButtonClass = (completed: boolean) => `
  ${modalCompleteButtonStyles}
  ${modalCompleteButtonVariant(completed)}
`;

const modalCompleteButtonIconVariant = (completed: boolean) => (completed ? "opacity-100 transition text-white" : "opacity-0 transition");

// ----------------------------------------

const modalNextQuestLinkClass = `
  text-xs
`;

const modalNextQuestButtonClass = `
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

const modalNextQuestButtonTitleClass = `
  italic

  text-white/40
`;

// ----------------------------------------

const modalHeaderClass = `
  border-b
  border-white/10

  bg-linear-to-r
  from-[#0b0b0b]
  via-[#151515]
  to-[#0b0b0b]

  ${inter.className}
`;

const modalHeaderTitleClass = `
  text-white
`;

const modalHeaderSubtitleClass = `
  text-white/50
`;

const modalHeaderLevelClass = `
  text-white/40
`;

// ----------------------------------------

const modalMapWrapperClass = `
  bg-black/20

  border-b
  border-white/10
`;

const modalMapContentClass = `
  text-sm
  text-white/35

  opacity-60

  hover:opacity-100

  transition
`;

// ----------------------------------------

const modalRequirementsClass = `
  border-y
  border-white/10

  bg-black/15
`;

const modalRequirementsTitleClass = `
  text-white/70
`;

const requirementQuestLinkClass = `
  text-white/55

  underline

  hover:text-white
`;

const requirementTagPrimaryClass = `
  px-2 py-1

  text-xs

  bg-[#2a2a2a]

  text-white/70

  rounded-l
`;

const requirementTagSecondaryClass = `
  px-2 py-1

  text-xs

  bg-[#101010]

  text-white/45

  rounded-r
`;

// ----------------------------------------

const modalRewardsClass = `
  border-x
  border-white/10

  bg-black/15
`;

const modalRewardsTitleClass = `
  text-white/70
`;

// ----------------------------------------

export const defaultModalStyles = {
	base: () => questModalClass,
	trigger: () => ``,
	overlay: () => questModalOverlayClass,
	closeButton: () => modalCloseButtonClass,
	character: {
		wrapper: () => modalCharacterWrapperClass,
		container: () => modalCharacterContainerClass,
		image: () => ``
	},
	description: () => modalDescriptionClass,
	footer: () => modalFooterClass,
	completeButton: {
		base: (completed: boolean) => modalCompleteButtonClass(completed),
		wrapper: () => ``,
		icon: (completed: boolean) => modalCompleteButtonVariant(completed),
		mark: (completed: boolean) => modalCompleteButtonIconVariant(completed)
	},
	nextButton: {
		base: () => modalNextQuestButtonClass,
		icon: () => ``,
		wrapper: () => modalNextQuestLinkClass,
		title: () => modalNextQuestButtonTitleClass
	},
	header: {
		base: () => modalHeaderClass,
		title: {
			wrapper: () => ``,
			base: () => modalHeaderTitleClass,
			image: () => ``
		},
		subtitle: () => modalHeaderSubtitleClass,
		image: () => ``,
		level: () => modalHeaderLevelClass
	},
	map: {
		wrapper: () => modalMapWrapperClass,
		container: () => ``,
		content: () => modalMapContentClass,
		image: () => ``
	},
	requirements: {
		base: () => modalRequirementsClass,
		title: () => modalRequirementsTitleClass,
		list: () => ``,
		quest: {
			base: () => ``,
			icon: () => ``,
			label: () => ``,
			link: () => requirementQuestLinkClass
		},
		tag: {
			base: () => ``,
			primary: () => requirementTagPrimaryClass,
			secondary: () => requirementTagSecondaryClass
		}
	},
	rewards: {
		base: () => modalRewardsClass,
		title: () => modalRewardsTitleClass,
		content: () => ``,
		list: () => ``,
		currency: {
			base: () => ``,
			value: () => ``,
			icon: () => ``
		},
		items: () => ``
	},
	list: () => ``
};
