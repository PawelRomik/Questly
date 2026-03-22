import Image from "next/image";

export function ModalCharacter({ src }: { src: string }) {
	return (
		<div className='border-r border-zinc-700 flex items-center justify-center bg-zinc-900 h-full'>
			<Image unoptimized width={1000} height={1000} src={src} alt='portrait' className='w-full h-full object-cover' />
		</div>
	);
}
