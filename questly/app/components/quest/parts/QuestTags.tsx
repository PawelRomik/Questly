import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";
import { DLC } from "@/app/types/quest";

type Props = {
	tags: string[];
	search: string;
	searchTags: boolean;
	completed: boolean;
	dlc?: DLC;
};

export function QuestTags({ tags, search, searchTags, completed, dlc }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.tags()}>
			{dlc && <Tag key={dlc.title} tag={dlc.title} dlc={dlc} search={search} searchTags={searchTags} />}
			{tags.map((tag) => (
				<Tag key={tag} tag={tag} search={search} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
