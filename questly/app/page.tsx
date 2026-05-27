import Navbar from "@/app/components/navbar/Navbar";
import background from "../public/assets/background.png";

export async function generateMetadata() {
	return {
		title: `Questly`
	};
}

export default function Home() {
	return (
		<div style={{ backgroundImage: `url(${background.src})` }} className='flex flex-col gap-5 h-screen overflow-y-scroll'>
			<Navbar />
		</div>
	);
}
