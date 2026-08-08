import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

// --SWC------------SWITCHERS-------------------

// --SWC------------SWITCHER-------------------

const switcherGrid = `
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-3
  gap-6
overflow-y-auto
max-h-[300px]
md:max-h-[470px]
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

${active ? "border-y-2 border-[#ff204e]/50 bg-black/20" : ""}
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

group-hover:translate-y-2
group-hover:scale-110
group-hover:brightness-125

transition
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

rounded-none

border
border-[#00e0ff]/30

bg-black/40

text-[#00e0ff]

placeholder:text-[#00e0ff]/35

transition-all
duration-200

caret-[#00e0ff]

focus:border-[#00e0ff]
focus:bg-black/60

hover:border-[#00e0ff]/60
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

shadow-[0_0_35px_rgba(0,0,0,0.9)]

border-2
border-[#ff204e]/50

bg-linear-to-b
from-[#111827]
to-[#07090f]

backdrop-blur-md
`;

const dialogTitle = `
mb-6

text-center

text-xl

font-semibold

text-[#f5f7ff]

uppercase

tracking-[0.25em]

${rajdhani.className}
`;

const dialogButton = `
absolute

right-3
top-3

cursor-pointer

text-[#00e0ff]/60

transition-all
duration-200

hover:text-[#00e0ff]

hover:drop-shadow-[0_0_10px_#00e0ff]
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
