import FixedImage from "@/app/components/common/FixedImage";

export function ModalCharacter({ src }: { src: string }) {
	return (
		<div className='border-r border-zinc-700 flex items-center justify-center bg-zinc-900 h-full'>
			<FixedImage src={src} alt='portrait' className='w-full h-full object-cover' />
		</div>
	);
}
