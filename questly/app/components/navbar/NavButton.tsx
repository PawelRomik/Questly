import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
	href: string;

	id: number;
};

export function NavButton({ children, href, id }: Props) {
	const styles = navbarVariants["witcher3"];
	return (
		<Link href={href} className={styles.button.link()}>
			<button className={styles.button.base(id)}>{children}</button>
		</Link>
	);
}
