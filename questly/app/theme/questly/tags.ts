// --TAG------------TAGS----------------------
// --TAG-----------COMPLETED-----------------
const completedTagWrapper = `flex gap-2 flex-wrap`;

const completedTag = `text-[10px] uppercase tracking-wide px-2 py-1`;

// --TAG-----------BASE-------------------

const tagBase = `text-[10px] uppercase tracking-wide px-2 py-1 border transition`;

// --TAG-----------EXPORT----------
export const tagStyles = {
	completed: {
		wrapper: () => completedTagWrapper,
		tag: () => completedTag
	},
	tag: () => tagBase
};
