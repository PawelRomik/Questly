import Image from "next/image";

type Props = {
	src: string;
};

export function AchievementImage({ src }: Props) {
	return (
		<div className='relative flex items-center justify-center'>
			<div className='p-2 rounded-lg bg-zinc-900 border border-zinc-700'>
				<Image unoptimized width={1000} height={1000} src={`http://localhost:1337${src}`} className='h-12.5 w-12.5 object-contain' alt='location' />
			</div>
		</div>
	);
}
