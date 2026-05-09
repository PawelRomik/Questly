export const searchBarLayoutClass = `
  w-full

  mt-30 mx-auto

  flex flex-col gap-5

  px-3
`;

export const searchBarHeaderLayoutClass = `
  relative

  flex items-center gap-4

  px-4 py-3
`;

export const searchBarLogoLayoutClass = `
  h-30

  object-contain
`;

export const searchBarInputWrapperLayoutClass = `
  relative

  w-full

  p-3
`;

export const searchBarCharacterLayoutClass = `
  absolute bottom-full

  w-30

  object-contain
`;

// ----------------------------------------

const checkboxWrapperLayoutClass = `
  flex items-center gap-3

  text-sm

  transition
`;

const checkboxInputWrapperLayoutClass = `
  relative w-5 h-5
`;

const checkboxInputLayoutClass = `
  absolute inset-0

  opacity-0

  peer
`;

const checkboxLayoutClass = `
  relative

  w-full h-full

  flex items-center justify-center
`;

const checkboxIconLayoutClass = `
  absolute

  h-5

  object-contain

  scale-300

  select-none

  pointer-events-none
`;

const checkboxLabelLayoutClass = `
  uppercase tracking-wide
`;

// ----------------------------------------

const searchInputWrapperLayoutClass = `
  relative

  w-full

  group
`;

const searchInputFieldLayoutClass = `
  w-full

  px-4 py-2

  text-sm

  outline-none

  tracking-wide
`;

const searchInputAccentLayoutClass = `
  absolute bottom-0 left-0

  w-full h-0.5

  opacity-60

  transition-all duration-200

  group-focus-within:opacity-100
  group-active-within:opacity-100

  group-focus-within:brightness-125
`;

const searchInputGlowLayoutClass = `
  pointer-events-none

  absolute inset-0

  opacity-0

  transition

  group-hover:opacity-100
  group-focus-within:opacity-100
`;

// ----------------------------------------

const sortSelectWrapperLayoutClass = `
  relative

  w-fit

  group
`;

const sortSelectFieldLayoutClass = `
  appearance-none

  cursor-pointer

  px-4 pr-10 py-2

  text-sm

  outline-none

  tracking-wide
`;

const sortSelectIconLayoutClass = `
  pointer-events-none

  absolute right-3 top-1/2

  -translate-y-1/2

  text-xs
`;

const sortSelectAccentLayoutClass = `
  absolute bottom-0 left-0

  w-full h-0.5

  opacity-60

  transition-all duration-200

  group-focus-within:opacity-100
  group-focus-within:brightness-125
`;

const sortSelectGlowLayoutClass = `
  pointer-events-none

  absolute inset-0

  opacity-0

  transition

  group-hover:opacity-100
  group-focus-within:opacity-100
`;

// ----------------------------------------

const searchSettingsLayoutClass = `
  flex flex-wrap items-center gap-4

  p-4
`;

// ----------------------------------------

export const universalStyles = {
	settings: () => searchSettingsLayoutClass,
	base: () => searchBarLayoutClass,
	header: {
		base: () => searchBarHeaderLayoutClass,
		logo: () => searchBarLogoLayoutClass
	},
	inputWrapper: {
		base: () => searchBarInputWrapperLayoutClass,
		character: () => searchBarCharacterLayoutClass
	},
	checkbox: {
		wrapper: () => checkboxWrapperLayoutClass,
		inputWrapper: () => checkboxInputWrapperLayoutClass,
		input: () => checkboxInputLayoutClass,
		base: () => checkboxLayoutClass,
		icon: () => checkboxIconLayoutClass,
		label: () => checkboxLabelLayoutClass
	},
	searchInput: {
		wrapper: () => searchInputWrapperLayoutClass,
		inputField: () => searchInputFieldLayoutClass,
		accent: () => searchInputAccentLayoutClass,
		glow: () => searchInputGlowLayoutClass
	},
	select: {
		wrapper: () => sortSelectWrapperLayoutClass,
		base: () => sortSelectFieldLayoutClass,
		icon: () => sortSelectIconLayoutClass,
		accent: () => sortSelectAccentLayoutClass,
		glow: () => sortSelectGlowLayoutClass
	}
};
