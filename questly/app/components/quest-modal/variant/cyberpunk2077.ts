import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const questModalClass = `
  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  border border-[#ff204e]/35

  backdrop-blur-xl

  shadow-[0_0_40px_rgba(0,0,0,0.9)]

  text-[#f5f7ff]

  ${rajdhani.className}
`;

// ----------------------------------------

const questModalOverlayClass = `
  bg-black/85

  backdrop-blur-md
`;

// ----------------------------------------

const modalCloseButtonClass = `
  bg-black/40

  border border-[#ff204e]/35

  text-[#f5f7ff]

  hover:bg-[#180912]

  hover:border-[#00e0ff]

  hover:text-[#00e0ff]

  transition-all duration-200
`;

// ----------------------------------------

const modalCharacterWrapperClass = `
  border-r border-b border-[#00e0ff]/25
`;

const modalCharacterContainerClass = `
  border-r border-[#ff204e]/20

  bg-[#07090f]
`;

// ----------------------------------------

const modalDescriptionClass = `
  border-r border-y border-[#ff204e]/20

  text-[#7f8ea3]

  ${rajdhani.className}
`;

// ----------------------------------------

const modalFooterClass = `
  border-t border-[#00e0ff]/15

  bg-black/30
`;

// ----------------------------------------

const modalCompleteButtonStyles = `
  transition-all duration-200

  uppercase
  tracking-widest

  shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]
`;

const modalCompleteButtonVariant = (completed: boolean) =>
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
    `;

const modalCompleteButtonClass = (completed: boolean) => `${modalCompleteButtonStyles} ${modalCompleteButtonVariant(completed)}`;

const modalCompleteButtonIconVariant = (completed: boolean) =>
	completed
		? `
      opacity-100

      text-[#00e0ff]

      drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]

      transition
    `
		: `
      opacity-0

      transition
    `;

// ----------------------------------------

const modalNextQuestLinkClass = `
  text-xs
`;

const modalNextQuestButtonClass = `
  border border-[#ffe600]/25

  bg-linear-to-b
  from-[#16130a]
  to-[#09070c]

  text-[#ffe600]

  uppercase
  tracking-widest

  hover:border-[#00e0ff]

  hover:text-[#00e0ff]

  transition-all duration-200

  shadow-[inset_0_0_10px_rgba(255,230,0,0.05)]
`;

const modalNextQuestButtonTitleClass = `
  italic

  text-[#ff204e]
`;

// ----------------------------------------

const modalHeaderClass = `
  border border-[#00e0ff]/30

  bg-linear-to-r
  from-[#05070c]
  via-[#111827]
  to-[#05070c]

  shadow-[0_0_18px_rgba(0,224,255,0.08)]

  ${rajdhani.className}
`;

const modalHeaderTitleClass = `
  text-[#f5f7ff]

  uppercase

  tracking-widest
`;

const modalHeaderSubtitleClass = `
  text-[#00e0ff]

  drop-shadow-[0_0_8px_rgba(0,224,255,0.7)]
`;

const modalHeaderLevelClass = `
  text-[#ffe600]
`;

// ----------------------------------------

const modalMapWrapperClass = `
  bg-black/20

  border-[#ff204e]/20

  border-b
`;

const modalMapContentClass = `
  text-sm

  text-[#7f8ea3]

  opacity-60

  hover:opacity-100

  transition-all duration-200
`;

// ----------------------------------------

const modalRequirementsClass = `
  border-[#00e0ff]/15

  border-y

  bg-black/20
`;

const modalRequirementsTitleClass = `
  text-[#ffe600]

  uppercase

  tracking-widest
`;

const requirementQuestLinkClass = `
  text-[#00e0ff]

  underline

  hover:text-[#ffe600]
`;

const requirementTagPrimaryClass = `
  px-2 py-1

  text-xs

  bg-[#111827]

  text-[#00e0ff]

  rounded-l
`;

const requirementTagSecondaryClass = `
  px-2 py-1

  text-xs

  bg-[#05070c]

  text-[#f5f7ff]

  rounded-r
`;

// ----------------------------------------

const modalRewardsClass = `
  border border-t-0 border-[#ff204e]/20

  bg-black/20
`;

const modalRewardsTitleClass = `
  text-[#ffe600]

  uppercase

  tracking-widest
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
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
			base: () => ` `,

			value: () => `
        text-[#ffe600]
      `,

			icon: () => `
        text-[#00e0ff] max-w-6 w-auto  object-contain
      `
		},

		items: () => `
      text-[#f5f7ff]
    `
	},

	list: () => ``
};
