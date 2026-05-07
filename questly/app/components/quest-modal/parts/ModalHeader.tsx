import { Quest } from "@/app/types/quest";
import FixedImage from "@/app/components/common/FixedImage";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	quest: Quest;
};

export function ModalHeader({ quest }: Props) {
	const styles = questModalVariants["witcher3"];
	return (
		<div className={styles.header.base()}>
			<FixedImage src={quest.location.banner.url} className={styles.header.image()} alt={quest.location.name} />

			<div>
				<h2 className={styles.header.title()}>{quest.title}</h2>

				<p className={styles.header.subtitle()}>
					{quest.location.name} | {quest.quest_type.name}
				</p>

				<p className={styles.header.level()}>Suggested level {quest.level}</p>
			</div>
		</div>
	);
}
