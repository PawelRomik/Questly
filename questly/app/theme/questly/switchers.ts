// --SWC------------SWITCHERS-------------------
// --SWC------------SWITCHER-------------------

const switcherGrid = `
grid
grid-cols-2
sm:grid-cols-3

gap-6
`;

const switcherLink = (active: boolean) => `
group

flex
flex-col

items-center
justify-between

p-4

rounded-lg

transition

${active ? "border-y-2 border-white" : ""}
`;

const switcherItem = `
relative

w-16
h-16
`;

const switcherImage = `
object-contain

w-20
h-20

group-hover:scale-110

transition
`;

const switcherFlag = (flag: string) => `
fi
fi-${flag}

text-4xl

transition

group-hover:scale-120
`;

const switcherLabel = `
text-sm

text-white

pt-2

text-center

transition

group-hover:translate-y-2
group-hover:scale-110
group-hover:brightness-125
`;

const switcherFlagTrigger = (flag: string) => `
fi
fi-${flag}

rounded-sm

text-2xl
`;

// --SWC----------SEARCHBAR---------------

const switcherSearchContainer = `
mb-4
`;

const switcherSearchInput = `
w-full

px-3
py-2

text-sm

outline-none

bg-linear-to-b
from-[#101010]
to-[#060606]

border
border-white/80

shadow-2xl

text-white

backdrop-blur-md
`;

// --SWC------------DIALOG-------------------

const dialogTrigger = `
flex
flex-1
`;

const dialogOverlay = `
fixed
inset-0

z-40

bg-black/70

backdrop-blur-sm
`;

const dialogContent = `
fixed

top-1/2
left-1/2

z-50

w-[90vw]
max-w-lg

p-6

-translate-x-1/2
-translate-y-1/2

rounded-xl

bg-linear-to-b
from-[#101010]
to-[#060606]

border
border-white/80

shadow-2xl

backdrop-blur-md
`;

const dialogTitle = `
mb-6

text-center
text-xl

font-semibold

text-white

tracking-wide
`;

const dialogButton = `
absolute

right-3
top-3

cursor-pointer

text-neutral-400

transition-colors
duration-300

hover:text-white
`;

// --SWC------------EXPORT---------

export const switcherStyles = {
	switcher: {
		grid: () => switcherGrid,
		link: (active: boolean) => switcherLink(active),
		item: () => switcherItem,
		image: () => switcherImage,
		label: () => switcherLabel,
		flag: (flag: string) => switcherFlag(flag),
		flagTrigger: (flag: string) => switcherFlagTrigger(flag),
		searchbar: {
			container: () => switcherSearchContainer,
			input: () => switcherSearchInput
		}
	},
	dialog: {
		trigger: () => dialogTrigger,
		overlay: () => dialogOverlay,
		content: () => dialogContent,
		title: () => dialogTitle,
		button: () => dialogButton
	}
};
