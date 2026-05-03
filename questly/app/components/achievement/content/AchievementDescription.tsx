import { achievementVariants } from "@/app/components/achievement/variant/achievementVariants";

type Props = {
	secret: boolean;
	description: string;
};

export default function AchievementDescription({ secret, description }: Props) {
	const styles = achievementVariants["witcher3"];
	return <p className={styles.description}>{secret ? "Hidden Achievement " : description}</p>;
}
