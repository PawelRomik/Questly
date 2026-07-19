export const universalStyles = {
	map: {
		container: () => `relative h-full w-full`,
		map: () => `h-full z-3! bg-transparent!  w-full`
	},
	info: {
		container: () => `absolute bottom-4 left-1/2 z-1000 flex -translate-x-1/2 items-center gap-3 px-4 py-3 backdrop-blur`,
		title: () => `whitespace-nowrap `,
		button: () => `cursor-pointer px-3 py-1.5 transition`,
		icon: () => "w-6 h-6"
	}
};
