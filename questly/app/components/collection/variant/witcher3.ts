import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
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

const collectionGroupButtonBaseClass = `
  border
  shadow-[0_0_10px_rgba(0,0,0,0.7)]
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  hover:brightness-125 disabled:hover:brightness-100 
`;

const collectionGroupButtonVariant = (active: boolean) =>
	active
		? "border-[#1f6b2b] text-[#9be3a7] scale-95 inset-shadow-[0_0_15px_rgba(0,255,100,0.2)]"
		: "border-[rgb(40,37,28)] text-[#e6d3a3] disabled:hover:border-[rgb(40,37,28)]   hover:border-[#c6a85a]";

const collectionGroupButtonClass = (active: boolean) => `${collectionGroupButtonBaseClass} ${collectionGroupButtonVariant(active)}`;

// ----------------------------------------

const collectionBaseClass = `
  border
  shadow-[0_0_20px_rgba(0,0,0,0.7)]
  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]
  ${ptSans.className}
`;

const collectionVariant = (completed: boolean) => (completed ? "border-[#1f6b2b] opacity-70 scale-95 hover:scale-100" : "border-[rgb(40,37,28)] hover:scale-[1.01]");

const collectionClass = (completed: boolean) => `${collectionBaseClass} ${collectionVariant(completed)}`;

// ----------------------------------------

const collectionButtonBaseClass = `
  border
  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
`;

const collectionButtonVariant = (completed: boolean) =>
	completed
		? "border-[#6b1f1f] bg-linear-to-b from-[#3a0d0d] to-[#1a0505] text-[#e6a3a3] hover:border-[#a33]"
		: "border-[#1f6b2b] bg-linear-to-b from-[#0f2a14] to-[#07150a] text-[#9be3a7] hover:border-[#2fa34a]";

const collectionButtonClass = (completed: boolean) => `${collectionButtonBaseClass} ${collectionButtonVariant(completed)}`;

// ----------------------------------------

const collectionHeaderTitleClass = `
  text-[#e6d3a3]
`;

const collectionHeaderCounterClass = `
  text-zinc-400
`;

// ----------------------------------------

const collectionItemBaseClass = ``;

const collectionItemVariant = (completed: boolean) => (completed ? "opacity-40 scale-90" : "hover:scale-110");

const collectionItemClass = (completed: boolean) => `${collectionItemBaseClass} ${collectionItemVariant(completed)}`;

const collectionItemImageClass = `
  hover:scale-115
`;

// ----------------------------------------

const collectionListGroupsStyleClass = `
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
