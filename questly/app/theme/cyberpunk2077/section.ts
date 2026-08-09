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

bg-[#111827]

border
border-[#00e0ff]/10

shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]
`;

const progressBarFill = (completed: boolean) => `
h-full

transition-all
duration-500

  ${
		completed
			? `
        bg-[#00e0ff]
        shadow-[0_0_12px_rgba(0,224,255,0.35)]
      `
			: `
        bg-[#ff003c]
        shadow-[0_0_12px_rgba(255,0,60,0.25)]
      `
	}
`;

// --SCN-----------BASE-----------------

const sectionRoot = `w-full`;

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

opacity-90
`;

const sectionAccentGlow = `
absolute
top-0
left-0

w-3
h-full

opacity-25

blur-xl
`;

const sectionAccentColor = (completed?: number, total?: number) => (completed !== total ? "#ff204e" : "#00e0ff");

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
border-[#ff204e]/30

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

backdrop-blur-md

shadow-[0_0_22px_rgba(0,0,0,0.75)]

hover:brightness-110
hover:border-[#00e0ff]

hover:shadow-[0_0_18px_rgba(0,224,255,0.15)]
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

text-[#00e0ff]

drop-shadow-[0_0_6px_rgba(0,224,255,0.7)]
`;

const sectionHeaderIcon = `
h-8
w-8

object-contain

text-[#ff204e]

drop-shadow-[0_0_8px_rgba(255,32,78,0.7)]
`;

const sectionHeaderTitle = `
lg:text-lg
text-sm

text-[#f5f7ff]

uppercase

tracking-widest
`;

const sectionHeaderCount = `
text-xs

text-[#ffe600]

font-semibold

tracking-wide
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
