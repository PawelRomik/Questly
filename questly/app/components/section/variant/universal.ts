const progressBarWrapperLayoutClass = `
  w-full

  mx-auto

  flex flex-col

  gap-1
`;

const progressBarTrackLayoutClass = `
  w-full

  h-2

  overflow-hidden
`;

const progressBarFillLayoutClass = `
  h-full

  transition-all

  duration-500
`;

// ----------------------------------------

export const universalStyles = {
	progressBar: {
		base: () => progressBarWrapperLayoutClass,
		track: () => progressBarTrackLayoutClass,
		fill: () => progressBarFillLayoutClass
	}
};
