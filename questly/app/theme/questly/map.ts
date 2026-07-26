// --MAP--------------MAP-------------------
// --MAP--------------BASE-------------------

const mapContainer = `relative bg-[rgba(0,0,0,0.5)] h-full w-full`;
const mapBase = `h-full z-3! bg-transparent! w-full`;

// --MAP--------------INFO-------------------

const mapInfoContainer = `absolute bottom-4 left-1/2 z-1000 flex -translate-x-1/2 items-center gap-3 px-4 py-3 backdrop-blur`;
const mapInfoTitle = `whitespace-nowrap`;
const mapInfoButton = `cursor-pointer px-3 py-1.5 transition`;
const mapInfoIcon = `w-6 h-6`;

//--MAP-------------EXPORT------------

export const mapStyles = {
	map: {
		container: () => mapContainer,
		map: () => mapBase
	},
	info: {
		container: () => mapInfoContainer,
		title: () => mapInfoTitle,
		button: () => mapInfoButton,
		icon: () => mapInfoIcon
	}
};
