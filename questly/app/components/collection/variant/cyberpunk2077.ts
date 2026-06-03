import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const collectionAccentColorClass = (completed: boolean) => (completed ? "bg-[#00e0ff]" : "bg-[#ff204e]");

// ----------------------------------------

const collectionGroupWrapperClass = `
  ${rajdhani.className}
`;

// ----------------------------------------

const collectionGroupButtonBaseClass = `
  border

  backdrop-blur-sm

  shadow-[0_0_16px_rgba(0,0,0,0.7)]

  bg-linear-to-b
  from-[#10131d]
  to-[#06080d]

  uppercase
  tracking-widest

  transition-all duration-200

  hover:brightness-125 disabled:hover:brightness-100
`;

const collectionGroupButtonVariant = (active: boolean) =>
	active
		? `
      border-[#00e0ff]

      text-[#00e0ff]

      scale-95

      shadow-[0_0_18px_rgba(0,224,255,0.25)]

      inset-shadow-[0_0_14px_rgba(0,224,255,0.12)]
    `
		: `
      border-[#ff204e]/40

      text-[#ffe600]

      disabled:hover:border-[#ff204e]/40
      hover:border-[#00e0ff]

      shadow-[0_0_14px_rgba(255,32,78,0.12)]
    `;

const collectionGroupButtonClass = (active: boolean) => `${collectionGroupButtonBaseClass} ${collectionGroupButtonVariant(active)}`;

// ----------------------------------------

const collectionBaseClass = `
  border

  backdrop-blur-md

  shadow-[0_0_28px_rgba(0,0,0,0.75)]

  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  transition-all duration-200

  ${rajdhani.className}
`;

const collectionVariant = (completed: boolean) =>
	completed
		? `
      border-[#00e0ff]/40

      opacity-70

      scale-95

      hover:scale-100

      shadow-[0_0_24px_rgba(0,224,255,0.15)]
    `
		: `
      border-[#ff204e]/30

      hover:scale-[1.01]

      hover:border-[#00e0ff]

      shadow-[0_0_24px_rgba(255,32,78,0.1)]
    `;

const collectionClass = (completed: boolean) => `${collectionBaseClass} ${collectionVariant(completed)}`;

// ----------------------------------------

const collectionButtonBaseClass = `
  border

  uppercase
  tracking-widest

  transition-all duration-200

  shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]
`;

const collectionButtonVariant = (completed: boolean) =>
	completed
		? `
      border-[#ff204e]

      bg-linear-to-b
      from-[#220812]
      to-[#07070c]

      text-[#ff6b8d]

      hover:border-[#ffe600]

      shadow-[0_0_16px_rgba(255,32,78,0.18)]
    `
		: `
      border-[#00e0ff]

      bg-linear-to-b
      from-[#07141a]
      to-[#05070c]

      text-[#00e0ff]

      hover:border-[#ffe600]

      shadow-[0_0_16px_rgba(0,224,255,0.18)]
    `;

const collectionButtonClass = (completed: boolean) => `${collectionButtonBaseClass} ${collectionButtonVariant(completed)}`;

// ----------------------------------------

const collectionHeaderTitleClass = `
  text-[#ffe600]

  uppercase

  tracking-widest
`;

const collectionHeaderCounterClass = `
  text-[#7f8ea3]
`;

// ----------------------------------------

const collectionItemBaseClass = `
  transition-all duration-200
`;

const collectionItemVariant = (completed: boolean) =>
	completed
		? `
      opacity-40

      scale-90

      grayscale

      hover:opacity-60
    `
		: `
      hover:scale-110

      hover:drop-shadow-[0_0_14px_rgba(0,224,255,0.35)]
    `;

const collectionItemClass = (completed: boolean) => `${collectionItemBaseClass} ${collectionItemVariant(completed)}`;

const collectionItemImageClass = `
  transition-all duration-200

  hover:scale-115

  contrast-110
  saturate-125
`;

// ----------------------------------------

const collectionListGroupsStyleClass = `
  bg-linear-to-b
  from-[#10131d]
  to-[#06080d]

  border border-[#ff204e]/20

  shadow-[inset_0_0_8px_rgba(255,32,78,0.08)]
  shadow-[0_0_24px_rgba(0,0,0,0.6)]

  backdrop-blur-sm
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
	accent: {
		wrapper: () => ``,
		bar: (completed: boolean) => collectionAccentColorClass(completed),
		glow: (completed: boolean) => collectionAccentColorClass(completed)
	},
	list: {
		base: () => ``,
		group: () => collectionListGroupsStyleClass,
		grid: () => ``
	},
	collection: {
		base: (completed: boolean) => collectionClass(completed),
		grid: () => ``,
		button: (completed: boolean) => collectionButtonClass(completed),
		header: {
			base: () => ``,
			row: () => ``,
			title: () => collectionHeaderTitleClass,
			counter: () => collectionHeaderCounterClass,
			missable: () => ``,
			wrapper: () => ``,
			dlc: {
				base: () => ``,
				icon: () => ``
			}
		},
		item: {
			base: (completed: boolean) => collectionItemClass(completed),
			image: () => collectionItemImageClass,
			wrapper: () => ``,
			missableIcon: () => ``
		}
	},
	group: {
		wrapper: () => collectionGroupWrapperClass,
		button: (completed: boolean) => collectionGroupButtonClass(completed)
	}
};
