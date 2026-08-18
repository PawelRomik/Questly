import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { QuestFamily } from "@/app/types/quest";
import { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
	quest: QuestFamily;
	defaultIcon: string | StaticImageData;
	game?: string;
};

export default function QuestLink({ quest, defaultIcon, game }: Props) {
	const theme = getTheme("questModal", game);
	return (
		<Link href={`?activeQuest=${quest.uuid}`} className={theme.requirements.quest.link()}>
			<FixedImage src={quest.quest_type?.icon || defaultIcon} className={theme.requirements.quest.icon()} alt='' />

			<span>{quest.title}</span>
		</Link>
	);
}
