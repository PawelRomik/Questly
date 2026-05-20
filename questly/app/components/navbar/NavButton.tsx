import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	href: string;

	id: number;
};

export function NavButton({ children, href, id }: Props) {
	const styles = useGameStyles(navbarVariants);
	return (
		<Link href={href} className={styles.button.link()}>
			<button className={styles.button.base(id)}>{children}</button>
		</Link>
	);
}
