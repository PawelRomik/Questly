import FixedImage from "@/app/components/common/FixedImage";
import { FaGithub } from "react-icons/fa6";
import logo from "../../../public/assets/logo.png";

export default function PageDescription() {
	return (
		<div
			className='p-3 flex-2 text-white   bg-linear-to-b
  from-[#151515]
  to-[#090909] flex flex-col items-center justify-center w-full border-2 border-white'
		>
			<FixedImage src={logo} className='h-[200px] mx-auto w-auto' alt='logo' />
			<div className='flex-1 flex flex-col px-5 items-center pt-5 gap-10'>
				<p className='text-xl text-center '>
					{
						"Questly is a passion project created for gamers who want a better way to track their progress. It was designed as an all-in-one platform for managing quests, achievements, collectibles, and interactive maps, making it easier to keep track of everything in one place. The goal of Questly is to provide a clean, intuitive, and user-friendly experience that lets players focus on enjoying their games instead of juggling spreadsheets, notes, or multiple websites. The platform is continuously improved with new features and refinements to make tracking progress as seamless as possible."
					}
				</p>
				<p className='text-xl  text-center'>
					{
						"Unlike many similar tools, Questly is completely free and doesn't lock essential features behind subscriptions or paywalls. It offers a wide range of customization options, allowing every user to personalize the interface and tailor the experience to their own preferences. With its modern design, straightforward navigation, and automatic progress saving, Questly is accessible to both casual players and completionists alike. Built by a gamer for gamers, it combines simplicity, flexibility, and powerful tracking features into a single platform that helps players stay organized throughout their gaming journey."
					}
				</p>
			</div>
			<FaGithub className='text-white mb-6 text-2xl w-12 h-12 ' />
		</div>
	);
}
