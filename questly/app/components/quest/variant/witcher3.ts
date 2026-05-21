import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// ----------------------------------------

const questAccentBarClass = `
  opacity-80
`;

const questAccentGlowClass = `
  opacity-20
`;

const questAccentColorVariant = (completed: boolean, color: string) => (completed ? "#2fa34a" : color);

// ----------------------------------------

const questButtonBaseClass = `
  border

  cursor-pointer

  transition-all duration-200

  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
`;

const questButtonVariant = (completed: boolean) =>
	completed
		? `
      border-[#1f6b2b]
      bg-linear-to-b
      from-[#0f2a14]
      to-[#07150a]
      hover:border-[#2fa34a]
    `
		: `
      border-[#6b1f1f]
      bg-linear-to-b
      from-[#3a0d0d]
      to-[#1a0505]
      hover:border-[#a33]
    `;

const questButtonClass = (completed: boolean) => `${questButtonBaseClass} ${questButtonVariant(completed)}`;

const questButtonIconBaseClass = `
  fill-current

  text-white

  transition-all duration-200
`;

const questButtonIconVariant = (completed: boolean) => (completed ? "opacity-100 scale-100" : "opacity-0 scale-75");

const questButtonIconClass = (completed: boolean) => `${questButtonIconBaseClass} ${questButtonIconVariant(completed)}`;

// ----------------------------------------

const questDescriptionClass = `
  text-zinc-400
`;

// ----------------------------------------

const questTitleClass = `
  text-white
`;

// ----------------------------------------

const questDividerClass = `
  bg-[rgb(40,37,28)]
`;

// ----------------------------------------

const questMetaLabelClass = `
  text-zinc-400
`;

const questMetaValueClass = `
  text-white
`;

// ----------------------------------------

const questRewardsClass = `
  text-xs

  text-zinc-400
`;

const questRewardsTitleClass = `
  text-[#e6d3a3]
`;

const questRewardItemClass = `
  font-semibold

  text-zinc-400
`;

// ----------------------------------------

const questWrapperBaseClass = `
  cursor-pointer

  border

  transition-all duration-200

  hover:translate-x-1
  hover:-translate-y-0.5

  shadow-[0_0_20px_rgba(0,0,0,0.7)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
  ${ptSans.className}
`;

const questWrapperVariant = (completed: boolean) =>
	completed
		? `
      border-[#1f6b2b]

      opacity-65

      scale-95

      hover:scale-100

      inset-shadow-[0_0_25px_rgba(0,255,100,0.15)]
    `
		: `
      border-[rgb(40,37,28)]

      hover:scale-[1.01]
    `;

const questWrapperClass = (completed: boolean) => `${questWrapperBaseClass} ${questWrapperVariant(completed)}`;

// ----------------------------------------

export const witcher3Styles = {
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
		icon: () => `w-4`
	},
	wrapper: {
		base: (completed: boolean) => questWrapperClass(completed),
		content: () => ``
	}
};
