import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

// --FLT--------------FILTERS------------------
// --FLT-----------SEARCHBAR WRAPPER----------------

const searchBarBase = `
w-full
mx-auto

flex
flex-col

gap-5

px-3
`;

const searchBarHeader = `
relative

flex
items-center

gap-4

px-4
py-3

bg-linear-to-r
`;

const searchBarLogo = `
h-30

object-contain
`;

const searchBarInputWrapper = `
relative

w-full

border
border-[rgb(40,37,28)]

bg-black/40
`;

const searchBarCharacter = `
absolute

bottom-full

w-30

object-contain

opacity-60
`;

const filtersIcon = `
w-32
h-auto

absolute

top-[15px]
left-[30px]
`;

// --FLT--------------CHECKBOX-------------------

const checkboxWrapper = (disabled?: boolean) => `
flex
items-start
justify-start

gap-3

px-3

text-sm

transition

${
	disabled
		? `
opacity-40
cursor-not-allowed
`
		: `
text-[#cfc6a4]

hover:text-white

cursor-pointer
`
}
`;

const checkboxInputWrapper = `
relative

w-5
h-5

min-w-5
min-h-5
`;

const checkboxInput = `
absolute

inset-0

opacity-0

peer
`;

const checkboxBase = `
relative

w-full
h-full

flex
items-center
justify-center

border-2
border-[#c6a85a]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[inset_0_0_6px_rgba(0,0,0,0.8)]
shadow-3xl

transition
`;

const checkboxIcon = `
absolute

h-5

object-contain

select-none
pointer-events-none

scale-300
`;

const checkboxLabel = `
uppercase

tracking-wide
`;

// --FLT-------------SEARCH INPUT-----------------

const searchInputWrapper = `
relative

w-full

group

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]

${ptSans.className}
`;

const searchInputField = `
w-full

px-4
py-2

text-sm

tracking-wide

outline-none

bg-transparent

text-[#e6d3a3]

placeholder:text-[#6f6445]
`;

const searchInputAccent = `
absolute

bottom-0
left-0

w-full
h-0.5

opacity-60

transition-all
duration-200

group-focus-within:opacity-100
group-active-within:opacity-100
group-focus-within:brightness-125
`;

const searchInputGlow = `
pointer-events-none

absolute

inset-0

opacity-0

transition

group-hover:opacity-100
group-focus-within:opacity-100

bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_70%)]
`;

// --FLT------------SELECT-------------------

const sortSelectWrapper = `
relative

w-fit

group

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]

${ptSans.className}
`;

const selectContainer = `
flex
items-center

relative
`;

const selectLabel = `
px-2
py-2

text-sm

border
border-[rgb(40,37,28)]

border-r-0

bg-[#c6a85a]

text-[rgb(40,37,28)]

font-bold

uppercase

${ptSans.className}
`;

const sortSelectField = `
appearance-none

cursor-pointer

px-4
pr-10
py-2

text-sm

tracking-wide

outline-none

bg-transparent

text-[#e6d3a3]

focus:bg-[#0f0f0f]
`;

const sortSelectIcon = `
pointer-events-none

absolute

right-3
top-1/2

-translate-y-1/2

text-xs

text-[#a68b5b]
`;

const sortSelectAccent = `
absolute

bottom-0
left-0

w-full
h-0.5

opacity-60

transition-all
duration-200

group-focus-within:opacity-100
group-focus-within:brightness-125
`;

const sortSelectGlow = `
pointer-events-none

absolute

inset-0

opacity-0

transition

group-hover:opacity-100
group-focus-within:opacity-100

bg-[radial-gradient(circle_at_left,rgba(255,215,0,0.08),transparent_70%)]
`;

// --FLT---------------SETTINGS-----------------

const searchSettings = `
flex
flex-wrap

items-center

gap-4

p-4

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

${ptSans.className}
`;

const checkboxSettingsWrapper = `
grid

grid-cols-3

auto-rows-[50px]

text-sm

transition
`;

const selectSettingsWrapper = `
flex

gap-3

items-center
justify-start

flex-wrap

w-full
`;

// --FLT---------------LEGEND-----------------

const legendContainer = `
grid

grid-cols-2

gap-2

border
border-[rgb(40,37,28)]

bg-linear-to-b
from-[#1a1a1a]
to-[#0f0f0f]

shadow-[0_0_20px_rgba(0,0,0,0.7)]
`;

const legendButton = `
flex
items-center

gap-2

p-2

cursor-pointer

transition-all

border
border-transparent

hover:brightness-110
hover:brightness-120
`;

const legendIcon = `
w-5
h-5
`;

const legendMarkerContainer = `
flex

flex-1

items-center
justify-between

text-sm
`;

const legendMarkerCount = `
text-sm

text-[#a68b5b]

font-medium
`;

const legendMarkerLabel = (visible: boolean) => `
${!visible ? "line-through opacity-50" : ""}

${
	visible
		? `
text-[#e6d3a3]
opacity-60
`
		: `
text-[#7d7257]
`
}

transition-colors
`;

// --FLT--------------BUTTON-----------------

const filtersButton = `
px-2
py-2

text-sm

flex

gap-2

cursor-pointer

border
border-[rgb(40,37,28)]

bg-[#c6a85a]

text-[rgb(40,37,28)]

font-bold

uppercase

border-r-0

hover:scale-105
hover:brightness-120

transition

${ptSans.className}
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
