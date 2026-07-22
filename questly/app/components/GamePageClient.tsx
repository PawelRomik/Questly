"use client";

import AchievementList from "@/app/components/achievement/AchievementList";
import CollectionList from "@/app/components/collection/CollectionList";
import { FiltersContainer } from "@/app/components/filters/FiltersContainer";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useFilters } from "@/app/context/FiltersContext";
import { GameMapContainer } from "@/app/components/map";

export default function GamePageClient() {
	const params = useParams<{ game: string; content: string }>();

	const { content } = params;

	const { backgrounds } = useGameAssets();

	console.log(backgrounds);

	const { sidebarOpen, setSidebarOpen } = useFilters();

	const background = useMemo(() => {
		const array = new Uint32Array(1);
		crypto.getRandomValues(array);

		return backgrounds[array[0] % backgrounds.length];
	}, [backgrounds]);

	const backgroundUrl = background.startsWith("/_next/") ? background : `${process.env.NEXT_PUBLIC_STORAGE_URL}/${background}`;

	return (
		<div className='h-screen flex relative flex-col bg-[rgba(0,0,0,0.8)] overflow-hidden'>
			<Navbar />

			<div
				className='w-full h-full absolute -z-10 bg-repeat'
				style={{
					backgroundImage: `url(${backgroundUrl})`
				}}
			/>

			<div className='flex flex-1   overflow-hidden relative'>
				<div
					className={`
						relative
					
						flex
						flex-col
						items-center
						justify-center
						top-0
						bg-[rgba(0,0,0,0.5)]
						backdrop-blur-md
						border-r border-white/10
						transition-all duration-300 ease-in-out
						overflow-hidden
						${sidebarOpen ? "w-1/3 p-5" : "w-17.5 p-3"}
					`}
				>
					<button
						onClick={() => setSidebarOpen((prev) => !prev)}
						className='
							absolute
							top-5
							right-3
							z-20
							w-10
							h-10
							flex
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
							h-full
							transition-opacity duration-200 flex items-center justify-center
							${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
						`}
					>
						<FiltersContainer />
					</div>
				</div>

				<div
					className={`
						flex
						${content !== "map" && "p-5"}
						justify-center
					
						overflow-y-auto
						transition-all
						duration-300 
						${sidebarOpen ? "w-2/3" : "w-[calc(100%-70px)]"}
					`}
				>
					{content === "quests" && <QuestList />}
					{content === "achievements" && <AchievementList />}
					{content === "collectibles" && <CollectionList />}
					{content === "map" && <GameMapContainer />}
				</div>
			</div>
		</div>
	);
}
