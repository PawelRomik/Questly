export const searchBarHeaderClass = `
  bg-linear-to-r
  from-[#111111]
  to-[#050505]

  border-b
  border-white/10
`;

export const searchBarInputWrapperClass = `
  border border-white/10

  bg-black/50

  backdrop-blur-md
`;

export const searchBarCharacterClass = `
  opacity-40
`;

// ----------------------------------------

const checkboxWrapperVariant = (disabled?: boolean) =>
	disabled ? "opacity-40 cursor-not-allowed text-white/30" : "text-white/70 hover:text-white cursor-pointer transition-colors";

const checkboxWrapperClass = (disabled?: boolean) => `
  ${checkboxWrapperVariant(disabled)}
`;

const checkboxBoxClass = `
  border
  border-white/15

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]

  transition-all
  duration-200

  hover:border-white/25
`;

// ----------------------------------------

const searchInputWrapperClass = `
  border border-white/10

  bg-linear-to-b
  from-[#161616]
  to-[#0a0a0a]

  shadow-[inset_0_0_12px_rgba(255,255,255,0.02)]

  backdrop-blur-sm

  transition-colors

  focus-within:border-white/20
`;

const searchInputFieldClass = `
  bg-transparent

  text-white

  placeholder:text-white/30

  outline-none
`;

const searchInputGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_70%)]
`;

// ----------------------------------------

const sortSelectWrapperClass = `
  border border-white/10

  bg-linear-to-b
  from-[#161616]
  to-[#0a0a0a]

  shadow-[inset_0_0_12px_rgba(255,255,255,0.02)]

  transition-colors

  focus-within:border-white/20
`;

const sortSelectFieldClass = `
  bg-transparent

  text-white

  focus:bg-[#101010]

  outline-none
`;

const sortSelectIconClass = `
  text-white/40
`;

const sortSelectGlowClass = `
  bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_70%)]
`;

// ----------------------------------------

const searchSettingsClass = `
  border border-white/10

  bg-linear-to-b
  from-[#141414]
  to-[#090909]

  backdrop-blur-md
`;

// ----------------------------------------

export const defaultFiltersStyles = {
	settings: () => searchSettingsClass,
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
		icon: () => `scale-250 text-white`,
		label: () => ``
	},
	searchInput: {
		wrapper: () => searchInputWrapperClass,
		inputField: () => searchInputFieldClass,
		accent: () => ``,
		glow: () => searchInputGlowClass
	},
	select: {
		wrapper: () => sortSelectWrapperClass,
		base: () => sortSelectFieldClass,
		icon: () => sortSelectIconClass,
		accent: () => ``,
		glow: () => sortSelectGlowClass
	}
};
