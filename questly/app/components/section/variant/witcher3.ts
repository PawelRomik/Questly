export const progressBarTrackClass = `
  bg-zinc-700
`;

export const progressBarClass = (
	completed: boolean
) =>
	completed
		? `
      bg-linear-to-r
      from-green-400
      via-green-500
      to-green-600
    `
		: `
      bg-linear-to-r
      from-[#a8803b]
      to-[#d6982e]
    `;



// ----------------------------------------

export const witcher3Styles = {
     progressBar: {
            base: () => ``,
            track: () => progressBarTrackClass,
            fill: (completed:boolean) => progressBarClass(completed)
        }
};
