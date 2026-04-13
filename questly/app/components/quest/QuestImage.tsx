import Image from "next/image";

type Props = {
	src: string;
	level?: number;
};

export function QuestImage({ src, level }: Props) {
	return (
		<div className='relative flex items-center justify-center'>
			<div className='p-2 rounded-lg bg-zinc-900 border border-zinc-700'>
				<Image unoptimized width={1000} height={1000} src={src} className='h-12.5 w-12.5 object-cover' alt='location' />
			</div>

			{level && <span className='absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full'>{level}</span>}
		</div>
	);
}
