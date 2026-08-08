import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --PRV------------GAME PREVIEW----------------------

// --PRV-----------CONTAINER-----------------

const gamePreviewBase = `
w-full
h-[700px]

flex
flex-col

overflow-hidden

border-3
border-[#00e0ff]/25

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

${rajdhani.className}

backdrop-blur-md

shadow-[0_0_30px_rgba(0,0,0,0.8)]

transition-all
duration-300
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
border-[#00e0ff]/20
`;

const gamePreviewBannerOverlay = `
absolute
inset-0

bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.75)),radial-gradient(circle_at_top,rgba(0,224,255,0.18),transparent_70%)]

backdrop-blur-[1px]
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

drop-shadow-[0_0_25px_rgba(0,224,255,0.45)]

transition-all
duration-300

hover:scale-105
`;

const gamePreviewBannerTitle = `
lg:text-4xl

text-xl

uppercase
text-center

font-bold

tracking-[0.25em]

text-[#f5f7ff]

drop-shadow-[0_0_16px_rgba(0,224,255,0.4)]
`;

// --PRV-----------DESCRIPTION-----------------

const gamePreviewDescriptionBase = `
flex-2

flex
items-center
justify-center

border-y
border-[#00e0ff]/20

bg-linear-to-b
from-[#090b12]
to-[#05070c]
`;

const gamePreviewDescriptionText = `
px-8

text-center

leading-8

text-[#7f8ea3]
`;

// --PRV-----------STATISTICS-----------------

const gamePreviewStatisticsBase = `
flex-2

w-full

border-b
border-[#00e0ff]/20

bg-[#06080d]

shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]
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

text-[#00e0ff]

border-t
border-[#00e0ff]/25

bg-linear-to-b
from-[#07141a]
to-[#04070c]

transition-all
duration-200

shadow-[inset_0_0_18px_rgba(0,0,0,0.8)]

hover:text-[#ffe600]
hover:border-[#ffe600]
hover:tracking-[0.35em]
hover:shadow-[0_0_25px_rgba(0,224,255,0.2)]

active:scale-[0.99]
`;

// --PRV-----------EXPORT-----------------

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
