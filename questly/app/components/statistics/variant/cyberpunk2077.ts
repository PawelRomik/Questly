import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"]
});

const searchSettingsClass = `

${rajdhani.className}
  bg-linear-to-b
  from-[#10131d]
  via-[#090b12]
  to-[#05070c]

  backdrop-blur-md

  shadow-[0_0_24px_rgba(0,0,0,0.75)]
`;

// ----------------------------------------

const searchStatClass = `
  border border-[#00e0ff]/20

  bg-linear-to-b
  from-[#10131d]
  to-[#06080d]

  shadow-[0_0_18px_rgba(0,224,255,0.08)]

  backdrop-blur-sm
`;

const searchStatItemClass = `
  border border-[#ff204e]/25

  bg-linear-to-b
  from-[#121520]
  to-[#07090f]

  transition-all duration-200

  hover:border-[#00e0ff]

  hover:shadow-[0_0_14px_rgba(0,224,255,0.12)]
`;

const searchStatDotClass = `
  bg-[#00e0ff]

  shadow-[0_0_10px_rgba(0,224,255,0.8)]
`;

const searchStatLabelClass = `
  text-[#f5f7ff]

  uppercase

  tracking-wide
`;

const searchStatCounterClass = (completed: boolean) => `
  border 

  ${completed ? "border-[#00e0ff] bg-linear-to-b from-[#143747] to-[#0b1b2a] shadow-[0_0_18px_rgba(0,224,255,0.25)]" : "border-[#00e0ff]/20 bg-black/40"}

  text-[#ffe600]

  shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]
`;

const searchStatButtonClass = `
  border border-[#ff204e]

  bg-linear-to-b
  from-[#220812]
  to-[#07070c]

  text-[#f5f7ff]

  uppercase
  tracking-widest

  transition-all duration-200

  hover:border-[#00e0ff]

  hover:from-[#111827]
  hover:to-[#05070c]

  hover:text-[#00e0ff]

  shadow-[0_0_16px_rgba(255,32,78,0.14)]
`;

// ----------------------------------------

export const cyberpunk2077Styles = {
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
