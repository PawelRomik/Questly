"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useLocalizedItem } from "@/app/hooks/useLocalizedItem";
import { GET_ACHIEVEMENT_BY_UUID } from "@/app/lib/queries";
import { useActiveAchievement } from "@/app/hooks/useActiveAchievement";
import { AchievementType } from "@/app/types/achievement";
import { getTheme } from "@/app/lib/utils/getTheme";
import { ModalCloseButton } from "@/app/components/quest-modal/ModalCloseButton";
import AchievementModalHeader from "@/app/components/achievement/modal/AchievementModalHeader";
import AchievementModalDescription from "@/app/components/achievement/modal/AchievementModalDescription";
import AchievementModalFooter from "@/app/components/achievement/modal/AchievementModalFooter";

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

	const achievement = useLocalizedItem<AchievementType, { uuid: string }>({
		locale,
		query: GET_ACHIEVEMENT_BY_UUID,
		vars: { uuid },
		getItems: (data: GetAchievementByUuidResponse) => data?.achievements ?? []
	});

	useEffect(() => {
		if (uuid && !achievement) {
			setActiveAchievementId(null);
		}
	}, [uuid, achievement, setActiveAchievementId]);

	if (!uuid || !achievement) return null;

	const theme = getTheme("achievement", game);

	return (
		<div className={theme.modal.base()}>
			<AchievementModalHeader achievement={achievement} game={game} />
			<AchievementModalDescription description={achievement.description} game={game} />
			<AchievementModalFooter uuid={achievement.uuid} game={game} />
			<ModalCloseButton game={game} />
		</div>
	);
}
