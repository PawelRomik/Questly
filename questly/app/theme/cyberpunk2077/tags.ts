// --TAG------------TAGS----------------------

// --TAG-----------COMPLETED-----------------

const completedTagWrapper = `
flex
gap-2
flex-wrap
`;

const completedTag = `
text-[8px]
lg:text-[10px]

uppercase

tracking-wide

px-1
lg:px-2
py-1

border
border-[#00e0ff]/40

bg-linear-to-b
from-[#07141a]
to-[#04070c]

text-[#00e0ff]

tracking-widest

shadow-[inset_0_0_8px_rgba(0,224,255,0.12)]
shadow-[0_0_12px_rgba(0,224,255,0.18)]
`;

// --TAG-----------BASE-------------------

const tagBase = (active: boolean) => `
text-[8px]
lg:text-[10px]

uppercase

tracking-wide

px-1
lg:px-2
py-1

border

transition

${
	active
		? `
border-[#ffe600]/50

bg-linear-to-b
from-[#2a2408]
to-[#120f05]

text-white

tracking-widest

shadow-[0_0_10px_rgba(255,230,0,0.28)]
`
		: `
border-[#ff204e]/25

bg-linear-to-b
from-[#1a0b12]
to-[#09070c]

text-[#f5f7ff]

shadow-[inset_0_0_8px_rgba(255,32,78,0.08)]

hover:border-[#00e0ff]

hover:text-[#00e0ff]

transition-all
duration-200
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
