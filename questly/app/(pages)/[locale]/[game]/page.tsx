import { redirect } from "next/navigation";

type Props = {
	params: Promise<{
		locale: string;
		game: string;
	}>;
};

export default async function GameRedirect({ params }: Props) {
	const { locale, game } = await params;

	redirect(`/${locale}/${game}/quests`);
}
