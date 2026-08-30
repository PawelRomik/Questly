"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { useLocalizedItem } from "@/app/hooks/useLocalizedItem";
import { GET_ACHIEVEMENT_BY_UUID } from "@/app/lib/queries";
import { useActiveAchievement } from "@/app/hooks/useActiveAchievement";
import { useCompleted } from "@/app/context/CompletedContext";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { AchievementType } from "@/app/types/achievement";
import { RichDescription } from "@/app/components/common/RichDescription";
import FixedImage from "@/app/components/common/FixedImage";
import { getTheme } from "@/app/lib/utils/getTheme";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";

type Props = {
	game: string;
};

type GetAchievementByUuidResponse = {
	achievements: AchievementType[];
};

export function AchievementModalLayout({ game }: Props) {
	const locale = useLocale();
	const searchParams = useSearchParams();
	const uuid = searchParams.get("activeAchievement") || "";
	const { setActiveAchievementId } = useActiveAchievement();
	const { achievement_icon } = useGameAssets();
	const t = useTranslations("quests");
	const achievement = useLocalizedItem<AchievementType, { uuid: string }>({
		locale,
		query: GET_ACHIEVEMENT_BY_UUID,
		vars: { uuid },
		getItems: (data: GetAchievementByUuidResponse) => data?.achievements ?? []
	});

	const { toggle, isCompleted } = useCompleted(game, "achievements");

	// Tak samo jak w QuestModalLayout - jeśli dane się załadowały, a osiągnięcia
	// o takim uuid nie ma (zły/nieaktualny link), zamykamy modal zamiast
	// zostawiać pusty overlay bez treści.
	useEffect(() => {
		if (uuid && !achievement) {
			setActiveAchievementId(null);
		}
	}, [uuid, achievement, setActiveAchievementId]);

	if (!uuid || !achievement) return null;

	const completed = isCompleted(achievement.uuid);
	const theme = getTheme("achievement", game);

	return (
		<div className={theme.modal.base()}>
			<div className={theme.modal.header.base()}>
				<FixedImage src={achievement.icon ?? achievement_icon} alt={achievement.title} className={theme.modal.header.icon()} />
				<span className={theme.modal.header.title()}>{achievement.title}</span>
			</div>

			<div className={theme.modal.description()}>
				<RichDescription desc={achievement.description} />
			</div>

			<div className={theme.modal.footer()}>
				<button type='button' onClick={() => toggle(achievement.uuid)} className={theme.modal.completed.button(completed)}>
					{t("completed")}
					<span className={theme.modal.completed.wrapper()}>
						<svg viewBox='0 0 24 24' className={theme.modal.completed.icon(completed)}>
							<path className={theme.modal.completed.icon(completed)} d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
						</svg>
					</span>
				</button>
			</div>
			<ModalCloseButton game={game} />
		</div>
	);
}
