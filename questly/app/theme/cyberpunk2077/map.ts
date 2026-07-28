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

const mapInfoContainer = `
absolute
bottom-4
left-1/2
z-1000

flex
-transform
-translate-x-1/2

items-center
gap-3

px-4
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

px-3
py-1.5

transition-all
duration-200

border
border-[#00e0ff]/40

bg-linear-to-r
from-[#0b1a24]
via-[#0d2430]
to-[#123447]

text-[#00e0ff]

shadow-[0_0_12px_rgba(0,224,255,0.25)]

hover:border-[#00fff0]
hover:brightness-110
hover:shadow-[0_0_18px_rgba(0,224,255,0.35)]

active:brightness-90
`;

const mapInfoIcon = `
w-6
h-6
`;

//--MAP-------------EXPORT------------

export const mapStyles = {
	map: {
		container: () => mapContainer,
		map: () => mapBase
	},
	info: {
		container: () => mapInfoContainer,
		title: () => mapInfoTitle,
		button: () => mapInfoButton,
		icon: () => mapInfoIcon
	}
};
