import { getTheme } from "@/app/lib/utils/getTheme";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	href: string;
	game?: string;
	id: number;
};

export function NavButton({ children, href, id, game }: Props) {
	const theme = getTheme("navbar", game);
	return (
		<Link href={href} className={theme.button.link()}>
			<button className={theme.button.base(id)}>{children}</button>
		</Link>
	);
}
