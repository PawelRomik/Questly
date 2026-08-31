"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveAchievement } from "@/app/hooks/useActiveAchievement";
import { AchievementModalLayout } from "@/app/components/achievement/modal/AchievementModalLayout";
import { getTheme } from "@/app/lib/utils/getTheme";
import ContentBoundary from "@/app/components/ContentBoundary";
import AchievementModalSkeleton from "@/app/components/achievement/modal/AchievementModalSkeleton";

type Props = {
	game: string;
};

export default function AchievementModalRoot({ game }: Props) {
	const { activeAchievementId, setActiveAchievementId } = useActiveAchievement();
	const theme = getTheme("questModal", game);

	const isOpen = !!activeAchievementId;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveAchievementId(null)}>
			<Dialog.Portal>
				<Dialog.Overlay className={theme.overlay()} />

				<Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-300'>
					<VisuallyHidden.Root>
						<Dialog.Title>Achievement details</Dialog.Title>
					</VisuallyHidden.Root>

					<ContentBoundary fallback={<AchievementModalSkeleton />}>
						<AchievementModalLayout game={game} />
					</ContentBoundary>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
