import { Tag } from "@/app/components/tag/Tag";
import CompletedTag from "@/app/components/tag/CompletedTag";
import { questVariants } from "@/app/components/quest/variant/questVariants";

type Props = {
	tags: string[];
	search: string;
	searchTags: boolean;
	completed: boolean;
};

export function QuestTags({ tags, search, searchTags, completed }: Props) {
	const styles = questVariants["witcher3"];
	return (
		<div className={styles.tags()}>
			{tags.map((tag) => (
				<Tag key={tag} tag={tag} search={search} searchTags={searchTags} />
			))}

			{completed && <CompletedTag />}
		</div>
	);
}
