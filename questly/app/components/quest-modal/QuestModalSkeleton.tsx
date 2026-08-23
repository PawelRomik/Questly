import { getTheme } from "@/app/lib/utils/getTheme";

const pulse = "animate-pulse bg-white/5";

export function QuestModalSkeleton() {
	const theme = getTheme("questModal");

	return (
		<div className={theme.base(false)}>
			<div className={theme.character.wrapper(false)}>
				<div className={`${theme.character.container()} ${pulse}`} />
			</div>

			<div className={theme.header.base()}>
				<div className={theme.header.title.wrapper()}>
					<div className={`h-10 w-10 lg:h-13.75 lg:w-13.75 shrink-0 ${pulse}`} />

					<div className='flex flex-col gap-2 min-w-0'>
						<div className={`h-5 w-40 ${pulse}`} />
						<div className={`h-3 w-28 ${pulse}`} />
					</div>
				</div>
			</div>

			<div className={theme.description()}>
				<div className={`h-4 w-full ${pulse}`} />
				<div className={`h-4 w-full ${pulse}`} />
				<div className={`h-4 w-5/6 ${pulse}`} />
				<div className={`h-4 w-full ${pulse}`} />
				<div className={`h-4 w-3/4 ${pulse}`} />
				<div className={`h-4 w-full ${pulse}`} />
				<div className={`h-4 w-2/3 ${pulse}`} />
			</div>

			<div className={theme.requirements.base()}>
				<div className='flex flex-col gap-2'>
					<div className={`h-3 w-24 ${pulse}`} />
					<div className={`h-3 w-32 ${pulse}`} />
				</div>

				<div className='flex flex-col gap-2'>
					<div className={`h-3 w-28 ${pulse}`} />
					<div className={`h-3 w-24 ${pulse}`} />
				</div>

				<div className='flex flex-col gap-2'>
					<div className={`h-3 w-24 ${pulse}`} />
					<div className={`h-3 w-20 ${pulse}`} />
				</div>
			</div>

			<div className={theme.map.wrapper()}>
				<div className={`${theme.map.container()} ${pulse}`} />
			</div>

			<div className={theme.footer()}>
				<div className={`h-6 w-32 ${pulse}`} />
				<div className={`h-10 w-40 ${pulse}`} />
			</div>
		</div>
	);
}
