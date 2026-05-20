import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	secret: boolean;
	description: string;
	revealed: boolean;
};

export default function AchievementDescription({ secret, description, revealed }: Props) {
	const styles = useGameStyles(achievementVariants);
	return <p className={styles.description}>{secret && !revealed ? "Hidden Achievement " : description}</p>;
}
