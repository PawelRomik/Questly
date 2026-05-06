import FixedImage from "@/app/components/common/FixedImage";

export function ModalMap({ src }: { src: string }) {
	return (
		<div className='  h-full w-full  overflow-hidden'>
			<div className='text-gray-500 text-sm opacity-60 w h-full p-1   hover:opacity-100 cursor-pointer transition'>
				<FixedImage src={src} className='h-full w-full object-cover' alt='map' />
			</div>
		</div>
	);
}
