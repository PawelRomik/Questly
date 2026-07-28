// --PRV------------GAME PREVIEW----------------------

// --PRV-----------CONTAINER-----------------

const gamePreviewBase = `
w-full
h-[700px]

flex
flex-col

overflow-hidden

border-3
border-white/10

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

shadow-[0_0_24px_rgba(0,0,0,0.45)]

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
border-white/10
`;

const gamePreviewBannerOverlay = `
absolute
inset-0

bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.75))]
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

opacity-95

transition-all
duration-300

hover:scale-105
`;

const gamePreviewBannerTitle = `
text-4xl

font-bold

uppercase
text-center

tracking-widest

text-white

drop-shadow-[0_0_8px_rgba(255,255,255,0.08)]
`;

// --PRV-----------DESCRIPTION-----------------

const gamePreviewDescriptionBase = `
flex-2

flex
items-center
justify-center

border-y
border-white/10

bg-linear-to-b
from-[#161616]
to-[#0a0a0a]
`;

const gamePreviewDescriptionText = `
px-8

text-center

leading-7

text-white/55
`;

// --PRV-----------STATISTICS-----------------

const gamePreviewStatisticsBase = `
flex-2

w-full

border-b
border-white/10

bg-[#111111]

shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]
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

text-white/80

border-t
border-white/10

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

transition-all
duration-200

hover:text-white
hover:border-white/20
hover:bg-linear-to-b
hover:from-[#222222]
hover:to-[#121212]

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
