//--SCN---------------SECTION------------------
//--SCN----------------PROGRESSBAR-----------------

const progressBarWrapper = `
w-full
mx-auto

flex
flex-col

gap-1
`;

const progressBarTrack = `
w-full
h-2

overflow-hidden

bg-white/10

backdrop-blur-sm
`;

const progressBarFill = (completed: boolean) => `
h-full

transition-all
duration-500

${
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
`
}`;

// --SCN-----------BASE-----------------

const sectionRoot = `
w-full
`;

// --SCN-------------ACCENT-------------------

const sectionAccentWrapper = `
pointer-events-none

absolute
inset-y-0
left-0

w-12
`;

const sectionAccentBar = `
absolute
top-0
left-0

w-1
h-full

opacity-70
`;

const sectionAccentGlow = `
absolute
top-0
left-0

w-3
h-full

blur-lg

opacity-10
`;

const sectionAccentColor = (completed?: number, total?: number) => (completed !== total ? "#8a8a8a" : "#ffffff");

// --SCN-----------CONTENT------------------

const sectionContentWrapper = `
overflow-hidden
`;

const sectionContent = `
flex
flex-col

gap-3

pl-2
pt-4
`;

// --SCN-------------PROGRESS-----------------

const sectionProgress = `
mt-3
`;

// --SCN-------------TRIGGER------------------

const sectionTrigger = `
relative

w-full

flex
flex-col

px-4
py-3

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

// --SCN----------HEADER-------------------

const sectionHeader = `
flex
items-center
justify-between

w-full
`;

const sectionHeaderContent = `
flex
items-center

gap-3
`;

const sectionHeaderChevron = `
w-4
h-4

text-white/50

transition-colors

group-hover:text-white/80
`;

const sectionHeaderIcon = `
h-8
w-8

object-contain
`;

const sectionHeaderTitle = `
lg:text-lg
text-sm

uppercase
tracking-wide

text-white/85
`;

const sectionHeaderCount = `
text-xs

text-white/45
`;

// --SCN-------------EXPORT-------------

export const sectionStyles = {
	progressBar: {
		base: () => progressBarWrapper,
		track: () => progressBarTrack,
		fill: (completed: boolean) => progressBarFill(completed)
	},
	section: {
		root: () => sectionRoot,
		accent: {
			base: () => sectionAccentWrapper,
			bar: () => sectionAccentBar,
			glow: () => sectionAccentGlow,
			color: (completed?: number, total?: number) => sectionAccentColor(completed, total)
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
