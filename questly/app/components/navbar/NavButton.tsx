import { getTheme } from "@/app/lib/utils/getTheme";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	href: string;
	game?: string;
	id: number;
	mobile?: boolean;
	onNavigate?: () => void;
};

export function NavButton({ children, href, id, game, mobile, onNavigate }: Props) {
	const theme = getTheme("navbar", game);

	return (
		<Link href={href} onClick={onNavigate} className={mobile ? "" : theme.button.link()}>
			<button
				className={
					mobile
						? `
                        w-full
                        flex
                        items-center
                        gap-4
                        px-5
                        py-4
                        border-b
                        border-white/10
                        hover:bg-white/5
                        transition
                        `
						: theme.button.base(id)
				}
			>
				{children}
			</button>
		</Link>
	);
}
