import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	side: "left" | "right";
};

export function NavDecor({ side }: Props) {
	const isLeft = side === "left";
	const styles = useGameStyles(navbarVariants);

	return (
		<div className={styles.decor.base()}>
			<div className={styles.decor.layout(isLeft)} />
		</div>
	);
}
