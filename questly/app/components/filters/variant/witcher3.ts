import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// ----------------------------------------

const searchBarHeaderClass = `
  bg-linear-to-r
`;

const searchBarInputWrapperClass = `
  border border-[rgb(40,37,28)]

  bg-black/40
`;

const searchBarCharacterClass = `
  opacity-60
`;

// ----------------------------------------
const checkboxWrapperVariant = (disabled?: boolean) => (disabled ? "opacity-40 cursor-not-allowed" : "text-[#cfc6a4] hover:text-white cursor-pointer");

const checkboxWrapperClass = (disabled?: boolean) => `${checkboxWrapperVariant(disabled)}`;

const checkboxBoxClass = `
  border-2 border-[#c6a85a]

  bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]

  shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]

  shadow-3xl

  transition
`;

// ----------------------------------------
const searchInputWrapperClass = `
  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
  ${ptSans.className}
  shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
`;

const searchInputFieldClass = `
  bg-transparent

  text-[#e6d3a3]

  placeholder:text-[#6f6445]
`;

const searchInputGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_70%)]
`;
// ----------------------------------------

const sortSelectWrapperClass = `
  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
  ${ptSans.className}
  shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]
`;

const selectLabelClass = `border ${ptSans.className} border-[rgb(40,37,28)] text-[rgb(40,37,28)] font-bold bg-[#c6a85a] uppercase border-r-0`;

const sortSelectFieldClass = `
  bg-transparent

  text-[#e6d3a3]

  focus:bg-[#0f0f0f]
`;

const sortSelectIconClass = `
  text-[#a68b5b]
`;

const sortSelectGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_70%)]
`;

// ----------------------------------------

const searchSettingsClass = `
  border border-[rgb(40,37,28)]
  ${ptSans.className}
  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
`;

// ----------------------------------------

export const witcher3Styles = {
	settings: () => searchSettingsClass,
	checkboxWrapper: () => ``,
	selectWrapper: () => ``,
	base: () => ``,
	header: {
		base: () => searchBarHeaderClass,
		logo: () => ``
	},
	inputWrapper: {
		base: () => searchBarInputWrapperClass,
		character: () => searchBarCharacterClass
	},
	checkbox: {
		wrapper: (disabled?: boolean) => checkboxWrapperClass(disabled),
		inputWrapper: () => ``,
		input: () => ``,
		base: () => checkboxBoxClass,
		icon: () => `scale-300`,
		label: () => ``
	},
	searchInput: {
		wrapper: () => searchInputWrapperClass,
		inputField: () => searchInputFieldClass,
		accent: () => ``,
		glow: () => searchInputGlowClass
	},
	select: {
		container: () => ``,
		wrapper: () => sortSelectWrapperClass,
		base: () => sortSelectFieldClass,
		icon: () => sortSelectIconClass,
		accent: () => ``,
		glow: () => sortSelectGlowClass,
		label: () => selectLabelClass
	}
};
