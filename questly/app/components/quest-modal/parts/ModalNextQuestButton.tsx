import Link from "next/link";
import Image from "next/image";
import questIcon from "../../../../public/assets/quest.png";
import { questModalVariants } from "@/app/components/quest-modal/variant/questModalVariants";

type Props = {
	quest: {
		title: string;
		uuid: string;
	};
};

export function ModalNextQuestButton({ quest }: Props) {
	const styles = questModalVariants["witcher3"];
	return (
		<Link href={`?activeQuest=${quest.uuid}`} className={styles.nextButton.wrapper()}>
			<button className={styles.nextButton.base()}>
				<Image alt='quest' src={questIcon} unoptimized className={styles.nextButton.icon()} />
				Next quest:
				<span className={styles.nextButton.title()}>{quest.title}</span>
			</button>
		</Link>
	);
}
