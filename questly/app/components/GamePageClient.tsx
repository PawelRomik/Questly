"use client";
import AchievementList from "@/app/components/achievement/AchievementList";
import CollectionList from "@/app/components/collection/CollectionList";
import { SearchBar } from "@/app/components/filters/SearchBar";
import Navbar from "@/app/components/navbar/Navbar";
import QuestList from "@/app/components/quest/QuestList";
import { useGameAssets } from "@/app/context/GameAssetsProvider";
import { useParams } from "next/navigation";
import FixedImage from "@/app/components/common/FixedImage";
import { useMemo } from "react";

export default function GamePageClient() {
	const params = useParams<{ game: string; content: string }>();
	const { content } = params;

	const { backgrounds } = useGameAssets();

	const background = useMemo(() => {
		if (!backgrounds.length) return "";

		const array = new Uint32Array(1);
		crypto.getRandomValues(array);

		const randomIndex = array[0] % backgrounds.length;

		return backgrounds[randomIndex]?.url || "";
	}, [backgrounds]);

	return (
		<div className='h-screen flex relative flex-col bg-[rgba(0,0,0,0.8)] overflow-hidden'>
			<Navbar />

			<FixedImage src={background} alt='background' className='object-cover w-full h-full absolute -z-10' />

			<div className='flex flex-1 overflow-hidden'>
				<div className='w-1/3 p-5 bg-[rgba(0,0,0,0.5)] flex items-start'>
					<SearchBar />
				</div>

				<div className='w-2/3 p-5 flex justify-center overflow-y-auto'>
					{content === "quests" && <QuestList />}
					{content === "achievements" && <AchievementList />}
					{content === "collectibles" && <CollectionList />}
				</div>
			</div>
		</div>
	);
}
