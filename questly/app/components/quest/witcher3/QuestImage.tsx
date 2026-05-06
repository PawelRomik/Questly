import FixedImage from "@/app/components/common/FixedImage";

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
				<FixedImage src={src} className={`${width === "full" ? "h-14.5 w-14.5" : "h-12.5 w-8"} object-cover`} alt='location' />
				<FixedImage alt='icon' src={icon || ""} className='absolute bottom-0 w-7.5 right-11' />
			</div>
		</div>
	);
}
