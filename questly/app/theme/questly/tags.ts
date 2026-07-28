// --TAG------------TAGS----------------------
// --TAG-----------COMPLETED-----------------

const completedTagWrapper = `
flex

flex-wrap

gap-2
`;

const completedTag = `
text-[10px]

uppercase
tracking-wide

px-2
py-1

border
border-white/15

bg-linear-to-b
from-[#262626]
to-[#121212]

text-white/85

shadow-[inset_0_0_6px_rgba(255,255,255,0.04)]
`;

// --TAG-----------BASE-------------------

const tagBase = (active: boolean) => `
text-[10px]

uppercase
tracking-wide

px-2
py-1

border

transition

${
	active
		? `
border-white/25

bg-linear-to-b
from-[#2d2d2d]
to-[#161616]

text-white

shadow-[0_0_10px_rgba(255,255,255,0.08)]
`
		: `
border-white/10

bg-linear-to-b
from-[#1b1b1b]
to-[#0d0d0d]

text-white/60

shadow-[inset_0_0_6px_rgba(255,255,255,0.03)]

transition-all
duration-200

hover:border-white/20
hover:text-white
hover:bg-[#202020]
`
}
`;

// --TAG-----------EXPORT----------

export const tagStyles = {
	completed: {
		wrapper: () => completedTagWrapper,
		tag: () => completedTag
	},
	tag: (active: boolean) => tagBase(active)
};
