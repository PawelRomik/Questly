import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --FLT--------------FILTERS------------------
// --FLT-----------SEARCHBAR WRAPPER----------------

const searchBarBase = `w-full mx-auto flex flex-col gap-5 px-3`;

const searchBarHeader = `
relative flex items-center gap-4 px-4 py-3
`;

const searchBarLogo = `
h-30 object-contain

text-[#ffe600]

drop-shadow-[0_0_12px_rgba(255,230,0,0.9)]

tracking-widest
uppercase
italic
`;

const searchBarInputWrapper = `
relative w-full

border border-[#ff003c]/40

bg-[#090b12]/90

backdrop-blur-sm

${rajdhani.className}

shadow-[0_0_20px_rgba(255,0,60,0.12)]
`;

const searchBarCharacter = `
absolute bottom-full w-30 object-contain

text-[#ffe600]
opacity-80

drop-shadow-[0_0_15px_rgba(255,0,60,0.9)]
[filter:drop-shadow(-1px_-1px_1px_rgba(255,0,60,0.45))_drop-shadow(1px_-1px_1px_rgba(255,0,60,0.45))_drop-shadow(0px_-3px_30px_rgba(255,0,60,0.45))]
`;

const filtersIcon = `w-32 h-auto absolute top-[15px] left-[30px]`;

// --FLT--------------CHECKBOX-------------------

const checkboxWrapper = (disabled?: boolean) => `
flex items-start gap-3 px-3 justify-start text-sm transition

${
	disabled
		? "opacity-40 cursor-not-allowed"
		: `
text-[#00d9ff]
hover:text-[#ff003c]

transition-colors

cursor-pointer
`
}
`;

const checkboxInputWrapper = `relative w-5 h-5 min-w-5 min-h-5`;

const checkboxInput = `absolute inset-0 opacity-0 peer`;

const checkboxBase = `
relative w-full h-full flex items-center justify-center

border border-[#ff003c]

${rajdhani.className}

bg-linear-to-b
from-[#190707]
to-[#090b12]

shadow-[0_0_14px_rgba(255,0,60,0.25)]
shadow-[inset_0_0_10px_rgba(255,0,60,0.12)]

transition
`;

const checkboxIcon = `
absolute h-5 object-contain select-none pointer-events-none

text-[#00d9ff]
scale-100
`;

const checkboxLabel = `
uppercase
tracking-wide
`;

// --FLT-------------SEARCH INPUT-----------------

const searchInputWrapper = `
relative w-full group

border border-[#ff003c]/40

bg-linear-to-b
from-[#16090b]
to-[#090b12]

${rajdhani.className}

shadow-[inset_0_0_12px_rgba(255,0,60,0.08)]

backdrop-blur-sm
`;

const searchInputField = `
w-full px-4 py-2 text-sm outline-none tracking-wide

bg-transparent

text-[#00d9ff]

placeholder:text-[#5d4d59]

caret-[#ffe600]

selection:bg-[#ff003c]/40
`;

const searchInputAccent = `
absolute bottom-0 left-0 w-full h-0.5 opacity-60 transition-all duration-200
group-focus-within:opacity-100
group-active-within:opacity-100
group-focus-within:brightness-125

bg-[#ff003c]
`;

const searchInputGlow = `
pointer-events-none absolute inset-0 opacity-0 transition
group-hover:opacity-100
group-focus-within:opacity-100

bg-[radial-gradient(circle_at_left,rgba(255,0,60,0.18),transparent_70%)]
`;

// --FLT------------SELECT-------------------

const sortSelectWrapper = `
relative w-fit group

border border-l-0 border-[#00d9ff]/30

bg-linear-to-b
from-[#10131d]
to-[#090b12]

${rajdhani.className}

shadow-[inset_0_0_12px_rgba(0,217,255,0.08)]

backdrop-blur-sm
`;

const selectContainer = `flex items-center relative`;

const selectLabel = `
px-2 py-2 text-sm

border

${rajdhani.className}

border-[#ff003c]

text-white

bg-linear-to-b
from-[#190707]
to-[#090b12]

shadow-[0_0_14px_rgba(255,0,60,0.25)]
shadow-[inset_0_0_10px_rgba(255,0,60,0.12)]

uppercase

border-r-0
`;

const sortSelectField = `
appearance-none cursor-pointer px-4 pr-10 py-2 text-sm outline-none tracking-wide

bg-transparent

text-[#00d9ff]

focus:bg-[#111827]
`;

const sortSelectIcon = `
pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs

text-[#ff003c]

drop-shadow-[0_0_6px_rgba(255,0,60,0.8)]
`;

const sortSelectAccent = `
absolute bottom-0 left-0 w-full h-0.5 opacity-60 transition-all duration-200
group-focus-within:opacity-100
group-focus-within:brightness-125
`;

const sortSelectGlow = `
pointer-events-none absolute inset-0 opacity-0 transition
group-hover:opacity-100
group-focus-within:opacity-100

bg-[radial-gradient(circle_at_left,rgba(0,217,255,0.18),transparent_70%)]
`;

// --FLT---------------SETTINGS-----------------

const searchSettings = `
flex flex-wrap items-center gap-4 p-4

border border-[#ff003c]/30

${rajdhani.className}

bg-linear-to-b
from-[#120909]
to-[#090b12]

shadow-[0_0_30px_rgba(255,0,60,0.12)]

backdrop-blur-md
`;

const checkboxSettingsWrapper = `grid grid-cols-3 auto-rows-[50px] text-sm transition`;

const selectSettingsWrapper = `flex gap-3 items-center justify-start flex-wrap w-full`;

// --FLT---------------LEGEND-----------------

const legendContainer = `
grid grid-cols-2 gap-2

border border-[#ff204e]/30

bg-linear-to-b
from-[#10131d]
via-[#090b12]
to-[#05070c]

backdrop-blur-md

shadow-[0_0_22px_rgba(0,0,0,0.75)]
`;

const legendButton = `
flex items-center gap-2 p-2

cursor-pointer

transition-all duration-200

border border-transparent

hover:brightness-120

hover:shadow-[0_0_14px_rgba(0,224,255,0.15)]
`;

const legendIcon = `w-5 h-5`;

const legendMarkerContainer = `flex text-sm flex-1 items-center justify-between`;

const legendMarkerCount = `
text-sm

text-[#ff204e]

font-semibold

tracking-wide
`;

const legendMarkerLabel = (visible: boolean) => `
${
	visible
		? `
text-[#f5f7ff]
opacity-60
`
		: `
text-[#6f7b91]
`
}

uppercase

tracking-wide

transition-colors
`;

// --FLT--------------BUTTON-----------------

const filtersButton = `
px-2 py-2 text-sm flex gap-2 cursor-pointer

border

${rajdhani.className}

border-[#ff003c]

text-white

bg-linear-to-b
from-[#190707]
to-[#090b12]

shadow-[0_0_14px_rgba(255,0,60,0.25)]
shadow-[inset_0_0_10px_rgba(255,0,60,0.12)]

uppercase

hover:scale-105
hover:brightness-120

transition
`;

//--FLT---------------EXPORT---------------

export const filterStyles = {
	settings: () => searchSettings,
	checkboxWrapper: () => checkboxSettingsWrapper,
	selectWrapper: () => selectSettingsWrapper,
	icon: () => filtersIcon,
	base: () => searchBarBase,
	header: {
		base: () => searchBarHeader,
		logo: () => searchBarLogo
	},
	inputWrapper: {
		base: () => searchBarInputWrapper,
		character: () => searchBarCharacter
	},
	checkbox: {
		wrapper: (disabled?: boolean) => checkboxWrapper(disabled),
		inputWrapper: () => checkboxInputWrapper,
		input: () => checkboxInput,
		base: () => checkboxBase,
		icon: () => checkboxIcon,
		label: () => checkboxLabel
	},
	searchInput: {
		wrapper: () => searchInputWrapper,
		inputField: () => searchInputField,
		accent: () => searchInputAccent,
		glow: () => searchInputGlow
	},
	select: {
		container: () => selectContainer,
		wrapper: () => sortSelectWrapper,
		base: () => sortSelectField,
		icon: () => sortSelectIcon,
		accent: () => sortSelectAccent,
		glow: () => sortSelectGlow,
		label: () => selectLabel
	},
	button: () => filtersButton,
	legend: {
		container: () => legendContainer,
		button: () => legendButton,
		icon: () => legendIcon,
		marker: {
			container: () => legendMarkerContainer,
			count: () => legendMarkerCount,
			label: (visible: boolean) => legendMarkerLabel(visible)
		}
	}
};
