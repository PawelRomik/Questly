// --MAP--------------MAP-------------------
// --MAP--------------BASE-------------------

const mapContainer = `
relative

h-full
w-full

bg-[rgba(0,0,0,0.5)]
`;

const mapBase = `
h-full

w-full

z-3!

bg-transparent!
`;

// --MAP--------------INFO-------------------

const mapInfoContainer = `
absolute

bottom-4
left-1/2

z-1000

flex
items-center

gap-3

px-4
py-3

-translate-x-1/2

backdrop-blur

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[0_0_20px_rgba(0,0,0,0.7)]
`;

const mapInfoTitle = `
whitespace-nowrap

text-[#e6d3a3]

tracking-wide

drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
`;

const mapInfoButton = `
cursor-pointer

px-3
py-1.5

transition
transition-all

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#2a2214]
via-[#20180f]
to-[#15110b]

text-[#d9c38b]

shadow-[0_0_12px_rgba(0,0,0,0.65)]

hover:brightness-110

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
