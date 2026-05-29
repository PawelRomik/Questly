import background from "../public/assets/background.png";
import HubNavbar from "@/app/components/navbar/HubNavbar";

export async function generateMetadata() {
	return {
		title: `Questly`
	};
}

export default function Home() {
	return (
		<div style={{ backgroundImage: `url(${background.src})` }} className='flex flex-col gap-5 h-screen overflow-y-scroll'>
			<HubNavbar />
		</div>
	);
}
