import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

const searchBarHeaderClass = `

`;

const searchBarInputWrapperClass = `
  border border-[#ff003c]/40

  bg-[#090b12]/90

  backdrop-blur-sm
  ${rajdhani.className}

  shadow-[0_0_20px_rgba(255,0,60,0.12)]

`;

const searchBarCharacterClass = `
  text-[#ffe600]
  opacity-80


  drop-shadow-[0_0_15px_rgba(255,0,60,0.9)]
  [filter:drop-shadow(-1px_-1px_1px_rgba(255,0,60,0.45))_drop-shadow(1px_-1px_1px_rgba(255,0,60,0.45))_drop-shadow(0px_-3px_30px_rgba(255,0,60,0.45))]
`;
// ----------------------------------------

const checkboxWrapperVariant = (disabled?: boolean) =>
	disabled
		? "opacity-40 cursor-not-allowed"
		: `
      text-[#00d9ff]
      hover:text-[#ff003c]

      transition-colors

      cursor-pointer
    `;

const checkboxWrapperClass = (disabled?: boolean) => `${checkboxWrapperVariant(disabled)}`;

const checkboxBoxClass = `
  border border-[#ff003c]

  bg-linear-to-b
  from-[#190707]
  to-[#090b12]

  shadow-[0_0_14px_rgba(255,0,60,0.25)]
  shadow-[inset_0_0_10px_rgba(255,0,60,0.12)]

  transition
`;

// ----------------------------------------

const searchInputWrapperClass = `
  border border-[#ff003c]/40

  bg-linear-to-b
  from-[#16090b]
  to-[#090b12]
 

  shadow-[inset_0_0_12px_rgba(255,0,60,0.08)]

  backdrop-blur-sm
`;

const searchInputFieldClass = `
  bg-transparent

  text-[#00d9ff]

  placeholder:text-[#5d4d59]

  caret-[#ffe600]

  selection:bg-[#ff003c]/40
`;

const searchInputGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(255,0,60,0.18),transparent_70%)]
`;

// ----------------------------------------

const sortSelectWrapperClass = `
  border border-[#00d9ff]/30

  bg-linear-to-b
  from-[#10131d]
  to-[#090b12]

  shadow-[inset_0_0_12px_rgba(0,217,255,0.08)]

  backdrop-blur-sm
`;

const sortSelectFieldClass = `
  bg-transparent

  text-[#00d9ff]

  focus:bg-[#111827]
`;

const sortSelectIconClass = `
  text-[#ff003c]

  drop-shadow-[0_0_6px_rgba(255,0,60,0.8)]
`;

const sortSelectGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(0,217,255,0.18),transparent_70%)]
`;

// ----------------------------------------

const searchSettingsClass = `
  border border-[#ff003c]/30

  bg-linear-to-b
  from-[#120909]
  to-[#090b12]

  shadow-[0_0_30px_rgba(255,0,60,0.12)]

  backdrop-blur-md
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
	settings: () => searchSettingsClass,
	base: () => ``,
	header: {
		base: () => searchBarHeaderClass,
		logo: () => `
      text-[#ffe600]

      drop-shadow-[0_0_12px_rgba(255,230,0,0.9)]

      tracking-widest
      uppercase
      italic
    `
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
		icon: () => `text-[#00d9ff] scale-100`,
		label: () => `
      uppercase
      tracking-wide
    `
	},
	searchInput: {
		wrapper: () => searchInputWrapperClass,
		inputField: () => searchInputFieldClass,
		accent: () => `bg-[#ff003c]`,
		glow: () => searchInputGlowClass
	},
	select: {
		wrapper: () => sortSelectWrapperClass,
		base: () => sortSelectFieldClass,
		icon: () => sortSelectIconClass,
		accent: () => `bg-[#00d9ff]`,
		glow: () => sortSelectGlowClass
	}
};
