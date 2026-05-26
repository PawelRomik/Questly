const progressBarWrapperLayoutClass = `
  w-full

  mx-auto

  flex flex-col

  gap-1
`;

const progressBarTrackLayoutClass = `
  w-full

  h-2

  overflow-hidden
`;

const progressBarFillLayoutClass = `
  h-full

  transition-all

  duration-500
`;

// ----------------------------------------

const sectionRootClass = `
w-full`;

// ----------------------------------------

const sectionAccentWrapperLayoutClass = `
  pointer-events-none

  absolute inset-y-0 left-0

  w-12
`;

const sectionAccentBarLayoutClass = `
  absolute top-0 left-0

  w-1 h-full
`;

const sectionAccentGlowLayoutClass = `
  absolute top-0 left-0

  w-3 h-full

  blur-lg
`;

// ----------------------------------------

const sectionContentWrapperLayoutClass = `
  overflow-hidden
`;

const sectionContentLayoutClass = `
  flex flex-col

  gap-3

  pl-2
  pt-4
`;

// ----------------------------------------

const sectionProgressLayoutClass = `
  mt-3
`;

// ----------------------------------------

const sectionTriggerLayoutClass = `
  relative

  w-full

  flex flex-col

  px-4 py-3
`;

// ----------------------------------------

const sectionHeaderLayoutClass = `
  flex items-center justify-between

  w-full
`;

const sectionHeaderContentLayoutClass = `
  flex items-center

  gap-3
`;

const sectionHeaderChevronLayoutClass = `
  w-4 h-4
`;

const sectionHeaderIconLayoutClass = `
  h-8 w-8

  object-contain
`;

const sectionHeaderTitleLayoutClass = `
  text-lg

  uppercase tracking-wide
`;

const sectionHeaderCountLayoutClass = `
  text-xs
`;

// ----------------------------------------

export const universalStyles = {
	progressBar: {
		base: () => progressBarWrapperLayoutClass,
		track: () => progressBarTrackLayoutClass,
		fill: () => progressBarFillLayoutClass
	},
	section: {
		root: () => sectionRootClass,
		accent: {
			base: () => sectionAccentWrapperLayoutClass,
			bar: () => sectionAccentBarLayoutClass,
			glow: () => sectionAccentGlowLayoutClass,
			color: () => ``
		},
		content: {
			wrapper: () => sectionContentWrapperLayoutClass,
			base: () => sectionContentLayoutClass
		},
		progress: () => sectionProgressLayoutClass,
		trigger: () => sectionTriggerLayoutClass,
		header: {
			base: () => sectionHeaderLayoutClass,
			content: () => sectionHeaderContentLayoutClass,
			chevron: () => sectionHeaderChevronLayoutClass,
			icon: () => sectionHeaderIconLayoutClass,
			title: () => sectionHeaderTitleLayoutClass,
			count: () => sectionHeaderCountLayoutClass
		}
	}
};
