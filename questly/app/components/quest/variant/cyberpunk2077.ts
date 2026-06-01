import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const questAccentBarClass = `
  opacity-90

  shadow-[0_0_12px_currentColor]
`;

const questAccentGlowClass = `
  opacity-30

  blur-xl
`;

const questAccentColorVariant = (completed: boolean, color: string) => (completed ? "#00e0ff" : color);

// ----------------------------------------

const questButtonBaseClass = `
  border

  cursor-pointer

  transition-all duration-200

  backdrop-blur-sm

  uppercase
  tracking-widest

  shadow-[0_0_15px_rgba(0,0,0,0.6)]
`;

const questButtonVariant = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]

      bg-linear-to-b
      from-[#07141a]
      to-[#04070c]

      hover:border-[#ffe600]

      shadow-[0_0_18px_rgba(0,224,255,0.25)]
    `
		: `
      border-[#ff204e]

      bg-linear-to-b
      from-[#1a0710]
      to-[#07070c]

      hover:border-[#00e0ff]

      shadow-[0_0_18px_rgba(255,32,78,0.2)]
    `;

const questButtonClass = (completed: boolean) => `${questButtonBaseClass} ${questButtonVariant(completed)}`;

const questButtonIconBaseClass = `
  fill-current

  transition-all duration-200
`;

const questButtonIconVariant = (completed: boolean) =>
	completed
		? `
      text-[#00e0ff]

      opacity-100
      scale-100

      drop-shadow-[0_0_8px_rgba(0,224,255,0.8)]
    `
		: `
      text-[#ff204e]

      opacity-0
      scale-95
    `;

const questButtonIconClass = (completed: boolean) => `${questButtonIconBaseClass} ${questButtonIconVariant(completed)}`;

// ----------------------------------------

const questDescriptionClass = `
  text-[#7f8ea3]
`;

// ----------------------------------------

const questTitleClass = `
  text-[#f5f7ff]

  uppercase
  tracking-wide
`;

// ----------------------------------------

const questDividerClass = `
  bg-linear-to-r
  from-transparent
  via-[#ff204e]/50
  to-transparent
`;

// ----------------------------------------

const questMetaLabelClass = `
  text-[#6f7b8f]

  uppercase
  tracking-widest
`;

const questMetaValueClass = `
  text-[#00e0ff]

  font-semibold
`;

// ----------------------------------------

const questRewardsClass = `
  text-xs

  text-[#7f8ea3]
`;

const questRewardsTitleClass = `
  text-[#ffe600]

  uppercase

  tracking-widest
`;

const questRewardItemClass = `
  font-semibold

  text-[#00e0ff]
`;

// ----------------------------------------

const questWrapperBaseClass = `
  cursor-pointer

  border

  transition-all duration-200

  hover:translate-x-1
  hover:-translate-y-1

  backdrop-blur-md

  shadow-[0_0_25px_rgba(0,0,0,0.8)]

  bg-linear-to-b
  from-[#0c1018]
  via-[#090b12]
  to-[#05070c]

  ${rajdhani.className}
`;

const questWrapperVariant = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]/50

      opacity-75

      hover:border-[#ffe600]

      shadow-[0_0_30px_rgba(0,224,255,0.18)]

      before:absolute
      before:inset-0
      before:bg-[linear-gradient(120deg,transparent,rgba(0,224,255,0.04),transparent)]
    `
		: `
      border-[#ff204e]/40

      hover:border-[#00e0ff]

      hover:scale-[1.015]

      shadow-[0_0_30px_rgba(255,32,78,0.12)]
    `;

const questWrapperClass = (completed: boolean) => `${questWrapperBaseClass} ${questWrapperVariant(completed)}`;

// ----------------------------------------

export const cyberpunk2077Styles = {
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
		},
		dlc: () => ``
	},
	divider: () => questDividerClass,
	image: {
		wrapper: () => `
      border border-[#00e0ff]/20

      bg-[#05070c]

      overflow-hidden
    `,
		container: () => ``,
		base: () => `
      object-cover

      contrast-110
      saturate-125
    `,
		icon: () => `
      text-[#ff204e]

      drop-shadow-[0_0_8px_rgba(255,32,78,0.7)]
    `
	},
	meta: {
		base: () => ``,
		level: () => `
      text-[#ffe600]

      font-bold
    `,
		label: () => questMetaLabelClass,
		value: () => questMetaValueClass
	},
	tags: () => `
    text-[#ff204e]

    uppercase

    tracking-widest
  `,
	rewards: {
		base: () => questRewardsClass,
		title: () => questRewardsTitleClass,
		list: () => ``,
		item: () => questRewardItemClass,
		icon: () => `
      text-[#ffe600] max-w-7
    `
	},
	wrapper: {
		base: (completed: boolean) => questWrapperClass(completed),
		content: () => `
      relative

      overflow-hidden
    `
	}
};
