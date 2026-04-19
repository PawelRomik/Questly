import Image from "next/image";

type Props = {
	src: string;
	completed: boolean;
	width?: "full" | "half" | undefined;
	icon?: string;
};

export function QuestImage({ src, icon, width }: Props) {
	return (
		<div className='relative flex items-center justify-center'>
			<div className='p-2 rounded-lg relative '>
				<Image unoptimized width={1000} height={1000} src={src} className={`${width === "full" ? "h-14.5 w-14.5" : "h-12.5 w-8"} object-cover`} alt='location' />
				<Image alt='icon' src={`http://localhost:1337${icon}`} className='absolute bottom-0 w-7.5 right-11' width={100} height={100} unoptimized />
			</div>
		</div>
	);
}
