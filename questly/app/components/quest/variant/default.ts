/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const questAccentBarClass = `
  opacity-70
`;

const questAccentGlowClass = `
  opacity-10
`;

const questAccentColorVariant = (completed: boolean, color: string) => (completed ? "#ffffff" : "#7a7a7a");

// ----------------------------------------

const questButtonBaseClass = `
  border

  cursor-pointer

  transition-all
  duration-200

  backdrop-blur-sm
`;

const questButtonVariant = (completed: boolean) =>
	completed
		? `
      border-white/20

      bg-linear-to-b
      from-[#2a2a2a]
      to-[#151515]

      hover:border-white/40
    `
		: `
      border-white/10

      bg-linear-to-b
      from-[#1a1a1a]
      to-[#0b0b0b]

      hover:border-white/25
      hover:from-[#202020]
      hover:to-[#111111]
    `;

const questButtonClass = (completed: boolean) => `
  ${questButtonBaseClass}
  ${questButtonVariant(completed)}
`;

const questButtonIconBaseClass = `
  fill-current

  text-white

  transition-all
  duration-200
`;

const questButtonIconVariant = (completed: boolean) => (completed ? "opacity-100 scale-100" : "opacity-0 scale-75");

const questButtonIconClass = (completed: boolean) => `
  ${questButtonIconBaseClass}
  ${questButtonIconVariant(completed)}
`;

// ----------------------------------------

const questDescriptionClass = `
  text-white/55
`;

// ----------------------------------------

const questTitleClass = `
  text-white
`;

// ----------------------------------------

const questDividerClass = `
  bg-white/10
`;

// ----------------------------------------

const questMetaLabelClass = `
  text-white/40
`;

const questMetaValueClass = `
  text-white/85
`;

// ----------------------------------------

const questRewardsClass = `
  text-xs

  text-white/45
`;

const questRewardsTitleClass = `
  text-white/80
`;

const questRewardItemClass = `
  font-medium

  text-white/60
`;

// ----------------------------------------

const questWrapperBaseClass = `
  cursor-pointer

  border

  transition-all
  duration-200

  hover:-translate-y-0.5

  shadow-[0_0_20px_rgba(0,0,0,0.45)]

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  ${inter.className}
`;

const questWrapperVariant = (completed: boolean) =>
	completed
		? `
      border-white/15

      opacity-60

      hover:opacity-80
      hover:border-white/25

      bg-[#101010]
    `
		: `
      border-white/10

      hover:border-white/20

      hover:scale-[1.01]
    `;

const questWrapperClass = (completed: boolean) => `
  ${questWrapperBaseClass}
  ${questWrapperVariant(completed)}
`;

// ----------------------------------------

export const defaultQuestStyles = {
	accent: {
		base: () => ``,
		bar: () => questAccentBarClass,
		glow: () => questAccentGlowClass,
		color: (completed: boolean, color: string) => questAccentColorVariant(completed, color)
	},
	button: {
		base: (completed: boolean) => questButtonClass(completed),
		icon: (completed: boolean) => questButtonIconClass(completed)
	},
	content: {
		base: () => ``,
		description: () => questDescriptionClass,
		title: {
			wrapper: () => ``,
			base: () => questTitleClass
		}
	},
	divider: () => questDividerClass,
	image: {
		wrapper: () => ``,
		container: () => ``,
		base: () => ``,
		icon: () => ``
	},
	meta: {
		base: () => ``,
		level: () => ``,
		label: () => questMetaLabelClass,
		value: () => questMetaValueClass
	},
	tags: () => ``,
	rewards: {
		base: () => questRewardsClass,
		title: () => questRewardsTitleClass,
		list: () => ``,
		item: () => questRewardItemClass,
		icon: () => `w-4 opacity-70`
	},
	wrapper: {
		base: (completed: boolean) => questWrapperClass(completed),
		content: () => ``
	}
};
