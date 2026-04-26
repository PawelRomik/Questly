import { themeProps } from "@/app/components/navbar/types";
import Link from "next/link";

type WitcherSign = "igni" | "axii" | "yrden" | "aard" | "quen";

type Props = {
	children: React.ReactNode;
	href: string;
	side?: "left" | "right";
	activeSide?: "left" | "right" | null;
	setActive: (v: "left" | "right" | null) => void;
	border?: "left" | "right";
	theme: themeProps;
	sign: WitcherSign;
};

const signColors: Record<WitcherSign, string> = {
	igni: "after:from-red-500/80 from-[#181818] to-[#121212]  after:via-red-400/40",
	axii: "after:from-green-500/80 from-[#181818] to-[#121212] after:via-green-400/40",
	aard: "after:from-cyan-500/80 from-[#202020] to-[#161616]  after:via-cyan-400/40",
	yrden: "after:from-purple-500/80 from-[#202020] to-[#161616] after:via-purple-400/40",
	quen: "after:from-yellow-500/80 after:via-yellow-400/40"
};

export function NavButton({ children, href, side, activeSide, sign, setActive, border, theme }: Props) {
	const gradient = signColors[sign];
	return (
		<Link href={href} className='w-full h-full'>
			<button
				onMouseEnter={() => side && setActive(side)}
				onMouseLeave={() => side && setActive(null)}
				className={`
  relative overflow-hidden
  bg-linear-to-b 
  ${theme.text}
  uppercase px-5 w-full h-full cursor-pointer
  transition flex flex-col items-center justify-center
  inset-shadow-2xl


  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-1/2
  after:h-5/6
  after:bg-linear-to-t
${gradient}
  after:to-transparent
  after:blur-2xl
  after:opacity-0
  after:transition
  hover:after:opacity-100
`}
			>
				{children}
			</button>
		</Link>
	);
}
