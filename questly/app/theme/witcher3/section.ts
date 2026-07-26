//--SCN---------------SECTION------------------
//--SCN----------------PROGRESSBAR-----------------
const progressBarWrapper = `w-full mx-auto flex flex-col gap-1`;

const progressBarTrack = `w-full h-2 overflow-hidden`;

const progressBarFill = `h-full transition-all duration-500`;

// --SCN-----------BASE-----------------

const sectionRoot = `w-full`;

// --SCN-------------ACCENT-------------------

const sectionAccentWrapper = `pointer-events-none absolute inset-y-0 left-0 w-12`;

const sectionAccentBar = `absolute top-0 left-0 w-1 h-full`;

const sectionAccentGlow = `absolute top-0 left-0 w-3 h-full blur-lg`;

const sectionAccentColor = ``;

// --SCN-----------CONTENT------------------

const sectionContentWrapper = `overflow-hidden`;

const sectionContent = `flex flex-col gap-3 pl-2 pt-4`;

// --SCN-------------PROGRESS-----------------

const sectionProgress = `mt-3`;

// --SCN-------------TRIGGER------------------

const sectionTrigger = `relative w-full flex flex-col px-4 py-3`;

// --SCN----------HEADER-------------------

const sectionHeader = `flex items-center justify-between w-full`;

const sectionHeaderContent = `flex items-center gap-3`;

const sectionHeaderChevron = `w-4 h-4`;

const sectionHeaderIcon = `h-8 w-8 object-contain`;

const sectionHeaderTitle = `text-lg uppercase tracking-wide`;

const sectionHeaderCount = `text-xs`;

// --SCN-------------EXPORT-------------

export const sectionStyles = {
	progressBar: {
		base: () => progressBarWrapper,
		track: () => progressBarTrack,
		fill: () => progressBarFill
	},
	section: {
		root: () => sectionRoot,
		accent: {
			base: () => sectionAccentWrapper,
			bar: () => sectionAccentBar,
			glow: () => sectionAccentGlow,
			color: () => sectionAccentColor
		},
		content: {
			wrapper: () => sectionContentWrapper,
			base: () => sectionContent
		},
		progress: () => sectionProgress,
		trigger: () => sectionTrigger,
		header: {
			base: () => sectionHeader,
			content: () => sectionHeaderContent,
			chevron: () => sectionHeaderChevron,
			icon: () => sectionHeaderIcon,
			title: () => sectionHeaderTitle,
			count: () => sectionHeaderCount
		}
	}
};
