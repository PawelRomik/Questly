import { navbarVariants } from "@/app/components/navbar/variant/navbarVariants";

type Props = {
	side: "left" | "right";
};

export function NavDecor({ side }: Props) {
	const isLeft = side === "left";
	const styles = navbarVariants["witcher3"];

	return (
		<div className={styles.decor.base()}>
			<div className={styles.decor.layout(isLeft)} />
		</div>
	);
}
