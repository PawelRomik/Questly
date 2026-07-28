import { setRequestLocale } from "next-intl/server";
import background from "../../../public/assets/background.png";
import HubNavbar from "@/app/components/navbar/HubNavbar";
import { use } from "react";
import OtherGamesSection from "@/app/components/game-preview/OtherGamesSection";
import Line from "@/app/components/common/Line";
import MainSection from "@/app/components/game-preview/MainSection";

export async function generateMetadata() {
	return {
		title: `Questly`
	};
}

export default function Home({ params }: { params: Promise<{ locale: string; game: string }> }) {
	const { locale, game } = use(params);
	setRequestLocale(locale);

	return (
		<div style={{ backgroundImage: `url(${background.src})` }} className='flex pb-5 flex-col gap-5 h-screen overflow-y-scroll'>
			<HubNavbar game={game} />
			<MainSection />
			<Line />
			<OtherGamesSection />
		</div>
	);
}
