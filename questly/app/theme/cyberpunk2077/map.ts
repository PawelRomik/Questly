// --MAP--------------MAP-------------------

// --MAP--------------BASE-------------------

const mapContainer = `
relative
bg-[rgba(0,0,0,0.5)]
h-full
w-full
`;

const mapBase = `
h-full
z-3!
bg-transparent!
w-full
`;

// --MAP--------------INFO-------------------

const mapInfoContainer = (type: "col" | "row") => `
absolute

bottom-[calc(1rem+env(safe-area-inset-bottom))]
left-1/2
${type === "col" && "flex-col"}
z-40

flex
-transform
-translate-x-1/2

items-center
justify-center
gap-3

px-8
lg:px-4
py-3

backdrop-blur

border
border-[#ff204e]/30

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

backdrop-blur-md

shadow-[0_0_22px_rgba(0,0,0,0.75)]
`;

const mapInfoTitle = `
whitespace-nowrap

text-[#f5f7ff]

uppercase

tracking-widest
`;

const mapInfoButton = `
cursor-pointer
mx-auto w-full
px-3
py-1.5

transition-all
duration-200

border-[#ff003c]
border

text-white

bg-linear-to-b
from-[#190707]
to-[#090b12]

shadow-[0_0_14px_rgba(255,0,60,0.25)]
shadow-[inset_0_0_10px_rgba(255,0,60,0.12)]

active:brightness-90

transition-all
duration-200

hover:border-[#00e0ff]

hover:from-[#111827]
hover:to-[#05070c]

hover:text-[#00e0ff]
`;

const mapInfoIcon = `
w-6
h-6
`;

const mapInfoImage = `w-60 h-auto
`;

const mapInfoDesc = `text-white max-h-30 overflow-y-auto lg:max-h-30 text-sm`;

//--MAP-------------EXPORT------------

export const mapStyles = {
	map: {
		container: () => mapContainer,
		map: () => mapBase
	},
	info: {
		container: (type: "row" | "col") => mapInfoContainer(type),
		title: () => mapInfoTitle,
		button: () => mapInfoButton,
		icon: () => mapInfoIcon,
		image: () => mapInfoImage,
		desc: () => mapInfoDesc
	}
};
