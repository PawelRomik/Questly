import { setRequestLocale } from "next-intl/server";
import background from "../../../public/assets/background.png";
import HubNavbar from "@/app/components/navbar/HubNavbar";
import { use } from "react";

export async function generateMetadata() {
	return {
		title: `Questly`
	};
}

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = use(params);
	setRequestLocale(locale);

	return (
		<div style={{ backgroundImage: `url(${background.src})` }} className='flex flex-col gap-5 h-screen overflow-y-scroll'>
			<HubNavbar />
		</div>
	);
}
