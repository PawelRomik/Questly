import Navbar from "@/app/components/navbar/Navbar";

export async function generateMetadata() {
	return {
		title: `Questly`
	};
}

export default function Home() {
	return (
		<div className='flex flex-col gap-5 h-screen overflow-y-scroll bg-[repeating-linear-gradient(0deg,#09090b,#09090b_4px,#18181b_4px,#18181b_40px)]'>
			<Navbar />
		</div>
	);
}
