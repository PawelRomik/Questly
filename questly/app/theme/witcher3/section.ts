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

bg-zinc-700
`;

const progressBarFill = (completed: boolean) => `
h-full

transition-all
duration-500

${
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
`
}
`;

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

opacity-80
`;

const sectionAccentGlow = `
absolute

top-0
left-0

w-3
h-full

blur-lg

opacity-20
`;

const sectionAccentColor = (completed?: number, total?: number) => (completed !== total ? "#c97a00" : "#2fa34a");

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

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[0_0_20px_rgba(0,0,0,0.7)]

hover:brightness-110
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

text-[#a68b5b]
`;

const sectionHeaderIcon = `
h-8
w-8

object-contain
`;

const sectionHeaderTitle = `
text-lg

uppercase

tracking-wide

text-[#e6d3a3]
`;

const sectionHeaderCount = `
text-xs

text-[#a68b5b]
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
