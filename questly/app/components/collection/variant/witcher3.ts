import { PT_Sans } from "next/font/google";

export const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// ----------------------------------------

const collectionAccentColorClass = (completed: boolean) => (completed ? "bg-[#2fa34a]" : "bg-[#c6a85a]");

// ----------------------------------------

const collectionGroupWrapperClass = `
  ${ptSans.className}
`;

// ----------------------------------------

export const collectionGroupButtonBaseClass = `
  border
  shadow-[0_0_10px_rgba(0,0,0,0.7)]
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  hover:brightness-125
`;

export const collectionGroupButtonVariant = (active: boolean) =>
	active ? "border-[#1f6b2b] text-[#9be3a7] scale-95 inset-shadow-[0_0_15px_rgba(0,255,100,0.2)]" : "border-[rgb(40,37,28)] text-[#e6d3a3] hover:scale-105 hover:border-[#c6a85a]";

export const collectionGroupButtonClass = (active: boolean) => `${collectionGroupButtonBaseClass} ${collectionGroupButtonVariant(active)}`;

// ----------------------------------------

export const collectionBaseClass = `
  border
  shadow-[0_0_20px_rgba(0,0,0,0.7)]
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  ${ptSans.className}
`;

export const collectionVariant = (completed: boolean) => (completed ? "border-[#1f6b2b] opacity-70 scale-95 hover:scale-100" : "border-[rgb(40,37,28)] hover:scale-[1.01]");

export const collectionClass = (completed: boolean) => `${collectionBaseClass} ${collectionVariant(completed)}`;

// ----------------------------------------

export const collectionButtonBaseClass = `
  border
  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
`;

export const collectionButtonVariant = (completed: boolean) =>
	completed
		? "border-[#6b1f1f] bg-linear-to-b from-[#3a0d0d] to-[#1a0505] text-[#e6a3a3] hover:border-[#a33]"
		: "border-[#1f6b2b] bg-linear-to-b from-[#0f2a14] to-[#07150a] text-[#9be3a7] hover:border-[#2fa34a]";

export const collectionButtonClass = (completed: boolean) => `${collectionButtonBaseClass} ${collectionButtonVariant(completed)}`;

// ----------------------------------------

export const collectionHeaderTitleClass = `
  text-[#e6d3a3]
`;

export const collectionHeaderCounterClass = `
  text-zinc-400
`;

// ----------------------------------------

export const collectionItemBaseClass = ``;

export const collectionItemVariant = (completed: boolean) => (completed ? "opacity-40 scale-90" : "hover:scale-110");

export const collectionItemClass = (completed: boolean) => `${collectionItemBaseClass} ${collectionItemVariant(completed)}`;

export const collectionItemImageClass = `
  hover:scale-115
`;

// ----------------------------------------

export const collectionListGroupsStyleClass = `
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]
  shadow-3xl
`;

// ----------------------------------------

export const witcher3Styles = {
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
			counter: () => collectionHeaderCounterClass
		},
		item: {
			base: (completed: boolean) => collectionItemClass(completed),
			image: () => collectionItemImageClass
		}
	},
	group: {
		wrapper: () => collectionGroupWrapperClass,
		button: (completed: boolean) => collectionGroupButtonClass(completed)
	}
};
