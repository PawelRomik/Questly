"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import { useActiveAchievement } from "@/app/hooks/useActiveAchievement";
import { AchievementModalLayout } from "@/app/components/achievement/modal/AchievementModalLayout";
import { getTheme } from "@/app/lib/utils/getTheme";
import ContentBoundary from "@/app/components/ContentBoundary";

type Props = {
	game: string;
};

// Skeleton na czas ładowania - te same wymiary co realny modal, żeby nic
// nie "skakało" gdy dane się doładują.
function AchievementModalSkeleton() {
	return (
		<div className='w-[calc(100vw-2rem)] max-w-125 lg:w-125 flex flex-col border-2 border-[rgb(40,37,28)] bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] shadow-[0_0_40px_rgba(0,0,0,0.9)]'>
			<div className='flex items-center gap-3 px-4 py-3 border-b-2 border-[rgb(40,37,28)]'>
				<div className='w-10 h-10 shrink-0 animate-pulse bg-white/5' />
				<div className='h-5 w-40 animate-pulse bg-white/5' />
			</div>

			<div className='p-4 flex flex-col gap-2'>
				<div className='h-4 w-full animate-pulse bg-white/5' />
				<div className='h-4 w-5/6 animate-pulse bg-white/5' />
				<div className='h-4 w-2/3 animate-pulse bg-white/5' />
			</div>

			<div className='flex items-center justify-end gap-2 p-3 border-t border-[#3a3a3a]'>
				<div className='h-8 w-24 animate-pulse bg-white/5' />
			</div>
		</div>
	);
}

export default function AchievementModalRoot({ game }: Props) {
	const { activeAchievementId, setActiveAchievementId } = useActiveAchievement();
	const theme = getTheme("questModal", game);

	const isOpen = !!activeAchievementId;

	return (
		<Dialog.Root open={isOpen} onOpenChange={(open) => !open && setActiveAchievementId(null)}>
			<Dialog.Portal>
				<Dialog.Overlay className={theme.overlay()} />

				<Dialog.Content className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-80'>
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
