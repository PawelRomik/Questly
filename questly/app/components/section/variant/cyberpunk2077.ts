const progressBarTrackClass = `
  bg-[#111827]

  border border-[#00e0ff]/10

  shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]
`;

const progressBarClass = (completed: boolean) =>
	completed
		? `
      bg-linear-to-r

      from-[#00b7ff]
      via-[#00e0ff]
      to-[#00fff0]

      shadow-[0_0_12px_rgba(0,224,255,0.35)]
    `
		: `
      bg-linear-to-r

      from-[#ff204e]
      via-[#ff3d6e]
      to-[#ffe600]

      shadow-[0_0_12px_rgba(255,32,78,0.25)]
    `;

// ----------------------------------------

const sectionAccentBarClass = `
  opacity-90
`;

const sectionAccentGlowClass = `
  opacity-25

  blur-xl
`;

const sectionAccentColorVariant = (completed?: number, total?: number) => ({
	backgroundColor: completed !== total ? "#ff204e" : "#00e0ff"
});

// ----------------------------------------

const sectionTriggerBaseClass = `
  cursor-pointer

  transition-all duration-200

  border border-[#ff204e]/30

  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  backdrop-blur-md

  shadow-[0_0_22px_rgba(0,0,0,0.75)]

  -skew-x-8

  hover:brightness-110
  hover:border-[#00e0ff]

  hover:shadow-[0_0_18px_rgba(0,224,255,0.15)]
`;

// ----------------------------------------

const sectionHeaderChevronClass = `
  text-[#00e0ff]

  drop-shadow-[0_0_6px_rgba(0,224,255,0.7)]
`;

const sectionHeaderTitleClass = `
  text-[#f5f7ff]

  uppercase

  tracking-widest
`;

const sectionHeaderCountClass = `
  text-[#ffe600]

  font-semibold

  tracking-wide
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
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

			icon: () => `
        text-[#ff204e]

        drop-shadow-[0_0_8px_rgba(255,32,78,0.7)]
      `,

			title: () => sectionHeaderTitleClass,

			count: () => sectionHeaderCountClass
		}
	}
};
