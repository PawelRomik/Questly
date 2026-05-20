import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";
import { useGameStyles } from "@/app/hooks/useGameStyles";

type Props = {
	tags: string[];
	search: string;
	searchTags: boolean;
	completed: boolean;
};

export function QuestTags({ tags, search, searchTags, completed }: Props) {
	const styles = useGameStyles(questVariants);
	return (
		<div className={styles.tags()}>
			{tags.map((tag) => (
				<Tag key={tag} tag={tag} search={search} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
