import Image from "next/image";

export function ModalMap({ src }: { src: string }) {
	return (
		<div className='border-t border-zinc-700 bg-zinc-950 overflow-hidden'>
			<div className='text-gray-500 text-sm opacity-60 h-full p-1 bg-zinc-800 hover:opacity-100 cursor-pointer transition'>
				<Image unoptimized width={1000} height={1000} src={src} className='h-full w-full object-cover' alt='map' />
			</div>
		</div>
	);
}
