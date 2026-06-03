import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "500", "600", "700"]
});

// ----------------------------------------

const collectionAccentColorClass = (completed: boolean) => (completed ? "bg-white" : "bg-white/40");

// ----------------------------------------

const collectionGroupWrapperClass = `
  ${inter.className}
`;

// ----------------------------------------

const collectionGroupButtonBaseClass = `
  border

  shadow-[0_0_10px_rgba(0,0,0,0.45)]

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  transition-all
  duration-200

  hover:brightness-110

  disabled:hover:brightness-100
`;

const collectionGroupButtonVariant = (active: boolean) =>
	active
		? `
      border-white/25

      text-white

      scale-95

      bg-[#202020]

      shadow-[0_0_15px_rgba(255,255,255,0.06)]
    `
		: `
      border-white/10

      text-white/65

      hover:border-white/20
      hover:text-white
    `;

const collectionGroupButtonClass = (active: boolean) => `
  ${collectionGroupButtonBaseClass}
  ${collectionGroupButtonVariant(active)}
`;

// ----------------------------------------

const collectionBaseClass = `
  border

  shadow-[0_0_20px_rgba(0,0,0,0.45)]

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  transition-all
  duration-200

  ${inter.className}
`;

const collectionVariant = (completed: boolean) =>
	completed
		? `
      border-white/15

      opacity-60

      scale-95

      hover:scale-100
      hover:opacity-80
    `
		: `
      border-white/10

      hover:border-white/20
      hover:scale-[1.01]
    `;

const collectionClass = (completed: boolean) => `
  ${collectionBaseClass}
  ${collectionVariant(completed)}
`;

// ----------------------------------------

const collectionButtonBaseClass = `
  border

  transition-all
  duration-200
`;

const collectionButtonVariant = (completed: boolean) =>
	completed
		? `
      border-white/10

      bg-linear-to-b
      from-[#161616]
      to-[#0a0a0a]

      text-white/55

      hover:border-white/20
    `
		: `
      border-white/20

      bg-linear-to-b
      from-[#2a2a2a]
      to-[#121212]

      text-white

      hover:border-white/35
    `;

const collectionButtonClass = (completed: boolean) => `
  ${collectionButtonBaseClass}
  ${collectionButtonVariant(completed)}
`;

// ----------------------------------------

const collectionHeaderTitleClass = `
  text-white/85
`;

const collectionHeaderCounterClass = `
  text-white/40
`;

// ----------------------------------------

const collectionItemBaseClass = `
  transition-all
  duration-200
`;

const collectionItemVariant = (completed: boolean) =>
	completed
		? `
      opacity-35

      scale-90
    `
		: `
      hover:scale-110
    `;

const collectionItemClass = (completed: boolean) => `
  ${collectionItemBaseClass}
  ${collectionItemVariant(completed)}
`;

const collectionItemImageClass = `
  transition-transform
  duration-200

  hover:scale-115
`;

// ----------------------------------------

const collectionListGroupsStyleClass = `
  bg-linear-to-b
  from-[#151515]
  to-[#090909]

  shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]
`;

// ----------------------------------------

export const defaultCollectionStyles = {
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
