"use client";

import AchievementList from "@/app/components/achievement/AchievementList";
import CollectionList from "@/app/components/collection/CollectionList";
import { FiltersContainer } from "@/app/components/filters/FiltersContainer";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { ChevronLeft, ChevronRight, PanelLeftClose, SlidersHorizontal } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo, useEffect, useRef } from "react";
import { useFilters } from "@/app/context/FiltersContext";
import { GameMapContainer } from "@/app/components/map";
import FixedImage from "@/app/components/common/FixedImage";
import questlyIcon from "../../public/assets/game_icon.png";
import QuestListSkeleton from "@/app/components/quest/QuestSectionSkeleton";
import AchievementListSkeleton from "@/app/components/achievement/AchievementListSkeleton";
import CollectionListSkeleton from "@/app/components/collection/CollectionListSkeleton";
import FiltersSkeleton from "@/app/components/filters/FiltersSkeleton";

import ContentBoundary from "@/app/components/ContentBoundary";
import { Game } from "@/app/types/quest";

type Props = {
	game: Game;
};

export default function GamePageClient({ game }: Props) {
	const params = useParams<{ game: string; content: string }>();

	const { content } = params;

	const { backgrounds } = useGameAssets();

	const { sidebarOpen, setSidebarOpen } = useFilters();

	const isMobileRef = useRef<boolean | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)");

		const updateSidebar = (isMobile: boolean) => {
			setSidebarOpen(!isMobile);
		};

		isMobileRef.current = mediaQuery.matches;
		updateSidebar(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			const isMobile = event.matches;

			if (isMobile !== isMobileRef.current) {
				isMobileRef.current = isMobile;
				updateSidebar(isMobile);
			}
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [setSidebarOpen]);

	const background = useMemo(() => {
		const array = new Uint32Array(1);
		crypto.getRandomValues(array);

		return backgrounds[array[0] % backgrounds.length];
	}, [backgrounds]);

	const backgroundUrl = background.startsWith("/_next/") ? background : `${process.env.NEXT_PUBLIC_STORAGE_URL}/${background}`;

	return (
		<div className='zoomHeight flex relative flex-col bg-[rgba(0,0,0,0.8)] overflow-hidden'>
			<Navbar game={game} />

			<div
				className='w-full h-full absolute -z-10 bg-cover'
				style={{
					backgroundImage: `url(${backgroundUrl})`
				}}
			/>

			<div className='relative flex w-full h-full overflow-hidden'>
				<button
					onClick={() => setSidebarOpen((prev) => !prev)}
					className='
						flex md:hidden
				fixed
				top-3
				left-3
				z-200
			
				w-10
				h-10
				
				items-center
				justify-center
				rounded-lg
				
				
				cursor-pointer
				transition
				text-white
			'
				>
					{sidebarOpen ? <PanelLeftClose size={20} /> : <SlidersHorizontal size={20} />}
				</button>
				<div
					className={`
			flex
			flex-col
			h-screen
			overflow-y-scroll
			md:overflow-y-hidden
			p-0 
			items-center
			justify-center
			top-0
			left-0
			md:h-full
			lg:bg-[rgba(0,0,0,0.5)]
			
			backdrop-blur-md
			border-r border-white/10
			transition-all duration-300 ease-in-out
			overflow-hidden

			${sidebarOpen ? "absolute bg-[rgba(0,0,0,0.7)] z-50 w-full md:p-5 lg:relative lg:z-auto lg:w-1/3" : "absolute bg-[rgba(0,0,0,0.5)] z-50 w-0  md:p-3 md:relative md:w-17.5"}
		`}
				>
					<button
						onClick={() => setSidebarOpen((prev) => !prev)}
						className='
						hidden md:flex
				absolute
				top-5
				right-3
				z-20
				w-10
				h-10
				
				items-center
				justify-center
				rounded-lg
				bg-black/50
				hover:bg-zinc-950
				border
				border-white/10
				cursor-pointer
				transition
				text-white
			'
					>
						{sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
					</button>

					<div
						className={`
				md:w-full md:overflow-y-hidden h-screen overflow-y-scroll
				transition-opacity duration-200
				flex md:items-center md:justify-center items-start justify-center md:py-0 py-10
				${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
			`}
					>
						<ContentBoundary fallback={<FiltersSkeleton />}>
							<FiltersContainer game={game.slug} />
						</ContentBoundary>
					</div>

					{!sidebarOpen && <FixedImage src={questlyIcon} alt='logo' className='lg:w-32 w-0 absolute bottom-0 h-auto' />}
				</div>

				<div
					className={`
			flex
			${content !== "map" && "md:p-5 py-2"}
			justify-center
			overflow-y-auto
			transition-all
			duration-300
			w-full

			md:w-2/3
			${sidebarOpen ? "md:w-2/3" : "md:w-[calc(100%-70px)]"}
		`}
				>
					{content === "quests" && (
						<ContentBoundary fallback={<QuestListSkeleton />}>
							<QuestList game={game.slug} />
						</ContentBoundary>
					)}
					{content === "achievements" && (
						<ContentBoundary fallback={<AchievementListSkeleton />}>
							<AchievementList game={game.slug} />
						</ContentBoundary>
					)}
					{content === "collectibles" && (
						<ContentBoundary fallback={<CollectionListSkeleton />}>
							<CollectionList game={game.slug} />
						</ContentBoundary>
					)}
					{content === "map" && (
						<ContentBoundary fallback={null}>
							<GameMapContainer game={game.slug} />
						</ContentBoundary>
					)}
				</div>
			</div>
		</div>
	);
}
