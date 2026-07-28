// --PRV------------GAME PREVIEW----------------------

// --PRV-----------CONTAINER-----------------

const gamePreviewBase = `
w-full
h-[700px]

flex
flex-col

overflow-hidden

border-3
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[0_0_24px_rgba(0,0,0,0.7)]

transition-all
duration-200
`;

// --PRV-----------BANNER-----------------

const gamePreviewBannerBase = `
relative

flex-4

flex
items-center
justify-center

bg-cover
bg-center

overflow-hidden

border-b
border-[rgb(40,37,28)]
`;

const gamePreviewBannerOverlay = `
absolute
inset-0

bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.75)),radial-gradient(circle_at_top,rgba(31,107,43,0.12),transparent_70%)]
`;

const gamePreviewBannerContainer = `
relative
z-10

flex
flex-col

items-center
justify-center

gap-5
`;

const gamePreviewBannerLogo = `
h-[120px]
w-auto

drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]

transition-all
duration-300

hover:scale-105
`;

const gamePreviewBannerTitle = `
text-4xl

font-bold

uppercase

tracking-widest

text-[#e6d3a3]

drop-shadow-[0_0_8px_rgba(166,139,91,0.35)]
`;

// --PRV-----------DESCRIPTION-----------------

const gamePreviewDescriptionBase = `
flex-2

flex
items-center
justify-center

border-y
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#171717]
to-[#101010]
`;

const gamePreviewDescriptionText = `
px-8

text-center

leading-7

text-[#a68b5b]
`;

// --PRV-----------STATISTICS-----------------

const gamePreviewStatisticsBase = `
flex-2

w-full

border-b
border-[rgb(40,37,28)]

bg-[#111111]

shadow-[inset_0_0_10px_rgba(0,0,0,0.7)]
`;

// --PRV-----------BUTTON-----------------

const gamePreviewButtonContainer = `
flex-1

w-full

block

h-full
`;

const gamePreviewButton = `
w-full
h-full

flex
items-center
justify-center

cursor-pointer

uppercase

tracking-[0.3em]

font-semibold

text-[#e6d3a3]

border-t
border-[rgb(40,37,28)]

bg-gradient-to-b
from-[#241d14]
to-[#0f0f0f]

transition-all
duration-200

shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]

hover:text-[#f3dfb3]
hover:border-[#6f6445]
hover:from-[#30271b]
hover:to-[#141414]

active:scale-[0.995]
`;

// --PRV-----------EXPORT----------

export const previewStyles = {
	container: () => gamePreviewBase,
	banner: {
		base: () => gamePreviewBannerBase,
		overlay: () => gamePreviewBannerOverlay,
		container: () => gamePreviewBannerContainer,
		logo: () => gamePreviewBannerLogo,
		title: () => gamePreviewBannerTitle
	},
	description: {
		base: () => gamePreviewDescriptionBase,
		text: () => gamePreviewDescriptionText
	},
	statistics: () => gamePreviewStatisticsBase,
	button: {
		container: () => gamePreviewButtonContainer,
		base: () => gamePreviewButton
	}
};
