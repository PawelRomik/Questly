const progressBarTrackClass = `
  bg-zinc-700
`;
const progressBarClass = (completed: boolean) =>
	completed
		? `
      bg-linear-to-r
      from-green-400
      via-green-500
      to-green-600
    `
		: `
      bg-linear-to-r
      from-[#a8803b]
      to-[#d6982e]
    `;

// ----------------------------------------

const sectionAccentBarClass = `
  opacity-80
`;

const sectionAccentGlowClass = `
  opacity-20
`;

const sectionAccentColorVariant = (completed?: number, total?: number) => ({
	backgroundColor: completed !== total ? "#c97a00" : "#2fa34a"
});

// ----------------------------------------

const sectionTriggerBaseClass = `
  cursor-pointer

  transition-all

  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]

  shadow-[0_0_20px_rgba(0,0,0,0.7)]

  -skew-x-8

  hover:brightness-110
`;

// ----------------------------------------

const sectionHeaderChevronClass = `
  text-[#a68b5b]
`;

const sectionHeaderTitleClass = `
  text-[#e6d3a3]
`;

const sectionHeaderCountClass = `
  text-[#a68b5b]
`;

// ----------------------------------------

export const witcher3Styles = {
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
