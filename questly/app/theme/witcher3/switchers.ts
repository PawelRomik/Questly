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

${active ? "border-y-2 bg-black/20 border-[#c97a00]" : ""}
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

border-2
border-[#c97a00]

rounded-lg

bg-black/20
`;

const switcherSearchInput = `
w-full

px-3
py-2

text-sm

outline-none

bg-transparent

text-[#f1e2b8]

placeholder:text-[#9c8d63]

transition-colors

focus:placeholder:text-[#c8b98c]
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

shadow-2xl

border-2
border-[#c97a00]

bg-linear-to-b
from-[#202020]
to-[#161616]
`;

const dialogTitle = `
mb-6

text-center

text-xl

font-semibold

text-[#f1e2b8]

uppercase

tracking-widest
`;

const dialogButton = `
absolute

right-3
top-3

cursor-pointer

text-[#c97a00]

transition

hover:text-yellow-400
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
