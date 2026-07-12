const searchSettingsClass = `
  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
`;

// ----------------------------------------

const searchStatClass = `border border-[rgb(40,37,28)] bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]`;

const searchStatItemClass = `
  border border-[rgb(40,37,28)]

  bg-linear-to-b
  from-[#1a1a1a]
  to-[#0f0f0f]
`;

const searchStatDotClass = `
  bg-[#a68b5b]
`;

const searchStatLabelClass = `
  text-[#e6d3a3]
`;

const searchStatCounterClass = (completed: boolean) => `
  border 
  ${completed ? "border-[#1f6b2b] bg-linear-to-b from-[#0f2a14] to-[#07150a] hover:border-[#2fa34a]" : "border-[rgb(40,37,28)]   bg-black/40"}


  text-[#cfc6a4]
`;

const searchStatButtonClass = `
  border border-[#6b1f1f]

  bg-linear-to-b
  from-[#3a0d0d]
  to-[#1a0505]

  text-[#f0d9a7]

  hover:border-[#a33]
  hover:from-[#5a1414]
  hover:to-[#2a0a0a]
`;

// ----------------------------------------

export const witcher3Styles = {
	base: () => searchSettingsClass,
	stat: {
		base: () => searchStatClass,
		item: {
			base: () => searchStatItemClass,
			left: () => ``,
			right: () => ``,
			dot: () => searchStatDotClass,
			label: () => searchStatLabelClass,
			counter: (completed: boolean) => searchStatCounterClass(completed),
			button: () => searchStatButtonClass
		}
	}
};
