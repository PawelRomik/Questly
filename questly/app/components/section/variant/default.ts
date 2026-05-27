const progressBarTrackClass = `
  bg-white/10

  backdrop-blur-sm
`;

const progressBarClass = (completed: boolean) =>
	completed
		? `
      bg-linear-to-r
      from-white/70
      via-white/90
      to-white
    `
		: `
      bg-linear-to-r
      from-[#3a3a3a]
      via-[#5a5a5a]
      to-[#7a7a7a]
    `;

// ----------------------------------------

const sectionAccentBarClass = `
  opacity-70
`;

const sectionAccentGlowClass = `
  opacity-10
`;

const sectionAccentColorVariant = (completed?: number, total?: number) => ({
	backgroundColor: completed !== total ? "#8a8a8a" : "#ffffff"
});

// ----------------------------------------

const sectionTriggerBaseClass = `
  cursor-pointer

  transition-all
  duration-200

  border
  border-white/10

  bg-linear-to-b
  from-[#181818]
  to-[#0b0b0b]

  shadow-[0_0_20px_rgba(0,0,0,0.5)]

  hover:border-white/20
  hover:brightness-110

  active:scale-[0.995]
`;

// ----------------------------------------

const sectionHeaderChevronClass = `
  text-white/50

  transition-colors

  group-hover:text-white/80
`;

const sectionHeaderTitleClass = `
  text-white/85
`;

const sectionHeaderCountClass = `
  text-white/45
`;

// ----------------------------------------

export const defaultSectionStyles = {
	progressBar: {
		base: () => ``,
		track: () => progressBarTrackClass,
		fill: (completed: boolean) => progressBarClass(completed)
	},
	section: {
		root: () => ``,
		accent: {
			base: () => ``,
			bar: () => sectionAccentBarClass,
			glow: () => sectionAccentGlowClass,
			color: (completed?: number, total?: number) => sectionAccentColorVariant(completed, total)
		},
		content: {
			wrapper: () => ``,
			base: () => ``
		},
		progress: () => ``,
		trigger: () => sectionTriggerBaseClass,
		header: {
			base: () => ``,
			content: () => ``,
			chevron: () => sectionHeaderChevronClass,
			icon: () => ``,
			title: () => sectionHeaderTitleClass,
			count: () => sectionHeaderCountClass
		}
	}
};
