import ReactMarkdown from "react-markdown";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"]
});

type Props = {
	desc: string;
};

export function ModalDescription({ desc }: Props) {
	return (
		<div
			className={`
        col-2 row-3
        flex flex-col gap-3 p-3
        border-r-3 border-y-3 border-[rgb(40,37,28)]
        text-sm leading-relaxed text-gray-300
        ${ptSans.className}
      `}
		>
			<ReactMarkdown>{desc}</ReactMarkdown>
		</div>
	);
}
