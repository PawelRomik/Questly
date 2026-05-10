import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

type Props = {
	secret: boolean;
	description: string;
	revealed: boolean;
};

export default function AchievementDescription({ secret, description, revealed }: Props) {
	const styles = achievementVariants["witcher3"];
	return <p className={styles.description}>{secret && !revealed ? "Hidden Achievement " : description}</p>;
}
