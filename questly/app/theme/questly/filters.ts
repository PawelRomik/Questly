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
from-[#111111]
to-[#050505]

border-b
border-white/10
`;

const searchBarLogo = `
h-30

object-contain
`;

const searchBarInputWrapper = `
relative

w-full

border
border-white/10

bg-black/50

backdrop-blur-md
`;

const searchBarCharacter = `
absolute
bottom-full

w-30

object-contain

opacity-40
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
text-white/30
`
		: `
text-white/70

hover:text-white

cursor-pointer

transition-colors
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

border
border-white/15

bg-linear-to-b
from-[#181818]
to-[#0b0b0b]

shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]

transition-all
duration-200

hover:border-white/25
`;

const checkboxIcon = `
absolute

h-5

object-contain

select-none

pointer-events-none

scale-250

text-white
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
border-white/10

bg-linear-to-b
from-[#161616]
to-[#0a0a0a]

shadow-[inset_0_0_12px_rgba(255,255,255,0.02)]

backdrop-blur-sm

transition-colors

focus-within:border-white/20
`;

const searchInputField = `
w-full

px-4
py-2

text-sm

tracking-wide

outline-none

bg-transparent

text-white

placeholder:text-white/30
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

bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_70%)]
`;

// --FLT------------SELECT-------------------

const sortSelectWrapper = `
relative

w-fit

group

border
border-white/10

bg-linear-to-b
from-[#161616]
to-[#0a0a0a]

shadow-[inset_0_0_12px_rgba(255,255,255,0.02)]

transition-colors

focus-within:border-white/20
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
border-white/10

border-r-0

font-bold

text-black/70

bg-white/85

uppercase
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

text-white

focus:bg-[#101010]
`;

const sortSelectIcon = `
pointer-events-none

absolute

right-3
top-1/2

-text-xs

-translate-y-1/2

text-white/40
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

bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_70%)]
`;

// --FLT---------------SETTINGS-----------------

const searchSettings = `
flex
flex-wrap
items-center

gap-4

p-4

border
border-white/10

bg-linear-to-b
from-[#141414]
to-[#090909]

backdrop-blur-md
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
border-white/10

bg-linear-to-b
from-[#141414]
to-[#090909]

backdrop-blur-md

shadow-[0_0_18px_rgba(0,0,0,0.45)]
`;

const legendButton = `
flex
items-center

gap-2

p-2

cursor-pointer

transition-all
duration-200

border
border-transparent

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

text-white/60

font-medium
`;

const legendMarkerLabel = (visible: boolean) => `
${visible ? "text-white" : "text-white/35"}

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
border-white/10

font-bold

text-black/70

bg-white/85

uppercase

border-r-0

hover:scale-105
hover:brightness-120

transition
`;

// --FLT---------------EXPORT---------------

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
