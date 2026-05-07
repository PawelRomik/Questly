import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// ----------------------------------------

export const questModalClass = `
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  border-4 border-[rgb(40,37,28)]
  shadow-[0_0_40px_rgba(0,0,0,0.9)]
  text-gray-200
`;

// ----------------------------------------

export const questModalOverlayClass = `
  bg-black/80 backdrop-blur-sm
`;

// ----------------------------------------

export const modalCloseButtonClass = `
  bg-black/60

  border border-[#444]

  hover:bg-[#7a1414]

  transition
`;

// ----------------------------------------

export const modalCharacterWrapperClass = `
  border-r-3 border-b-3 border-[rgb(40,37,28)]
`;

export const modalCharacterContainerClass = `
  border-r border-zinc-700
  bg-zinc-900
`;

// ----------------------------------------

export const modalDescriptionClass = `
  border-r-3 border-y-3 border-[rgb(40,37,28)]

  text-gray-300

  ${ptSans.className}
`;
// ----------------------------------------

export const modalFooterClass = `
  border-t border-[#3a3a3a]

  bg-black/50
`;

// ----------------------------------------

export const modalCompleteButtonStyles = `
  transition-all duration-200

  shadow-[inset_0_0_12px_rgba(255,0,0,0.08)]
`;

export const modalCompleteButtonVariant = (completed: boolean) =>
	completed
		? `
      border-[#1f6b2b]
      bg-linear-to-b from-[#0f2a14] to-[#07150a]
      text-[#b7f5c5]
      hover:border-[#2fa34a]
    `
		: `
      border-[#6b1f1f]
      bg-linear-to-b from-[#3a0d0d] to-[#1a0505]
      text-[#f0d9a7]
      hover:border-[#a33]
    `;

const modalCompleteButtonClass = (completed: boolean) => `${modalCompleteButtonStyles} ${modalCompleteButtonVariant(completed)}`;

export const modalCompleteButtonIconVariant = (completed: boolean) => (completed ? "opacity-100 transition" : "opacity-0 transition");

// ----------------------------------------

export const modalNextQuestLinkClass = `
  text-xs
`;

export const modalNextQuestButtonClass = `
  border border-[#6b5a2b]

  bg-linear-to-b from-[#1a1a1a] to-[#0b0b0b]

  text-[#e6d3a3]

  hover:border-[#c6a85a]
  hover:text-white

  transition-all duration-200

  shadow-[inset_0_0_10px_rgba(255,215,0,0.05)]
`;

export const modalNextQuestButtonTitleClass = `
  italic text-[#a68b5b]
`;

// ----------------------------------------

export const modalHeaderClass = `
  border-3 border-[rgb(75,63,13)]

  bg-linear-to-r
  from-[#0a0a0a]
  via-[#1a1405]
  to-[#0a0a0a]

  ${ptSans.className}
`;

export const modalHeaderTitleClass = `
  text-white
`;

export const modalHeaderSubtitleClass = `
  text-[rgb(255,203,14)]
`;

export const modalHeaderLevelClass = `
  text-gray-300
`;

// ----------------------------------------

export const modalMapWrapperClass = `
  bg-black/20

  border-[rgb(40,37,28)]
  border-b-3
`;

export const modalMapContentClass = `
  text-sm text-gray-500

  opacity-60
  hover:opacity-100

  transition
`;

// ----------------------------------------

export const modalRequirementsClass = `
  border-[rgb(40,37,28)]
  border-y-3

  bg-black/20
`;

export const modalRequirementsTitleClass = `
  text-[#a68b5b]
`;

export const requirementQuestLinkClass = `
  text-[#a68b5b]

  underline

  hover:text-blue-300
`;

export const requirementTagPrimaryClass = `
  px-2 py-1

  text-xs

  bg-zinc-700

  rounded-l
`;

export const requirementTagSecondaryClass = `
  px-2 py-1

  text-xs

  bg-zinc-950

  rounded-r
`;

// ----------------------------------------

export const modalRewardsClass = `
  border-3 border-t-0 border-[rgb(40,37,28)]

  bg-black/20
`;

export const modalRewardsTitleClass = `
  text-[#a68b5b]
`;

// ----------------------------------------

export const witcher3Styles = {
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
		icon: (completed: boolean) => modalCompleteButtonVariant(completed)
	},
	nextButton: {
		base: () => modalNextQuestButtonClass,
		icon: () => ``,
		wrapper: () => modalNextQuestLinkClass,
		title: () => modalNextQuestButtonTitleClass
	},
	header: {
		base: () => modalHeaderClass,
		title: () => modalHeaderTitleClass,
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
			value: () => ``
		},
		items: () => ``
	}
};
