import Image from "next/image";

type Props = {
	type: string;
	tags: string[];
	locationImage: string;
};

export function ModalMeta({ type, tags, locationImage }: Props) {
	const secondaryTag = tags.find((t) => t !== type);

	return (
		<div className='flex gap-3 items-center px-3 pt-3 bg-zinc-900'>
			<p className='text-sm border-r border-gray-400 pr-3 text-yellow-400 mb-4'>{type}</p>

			<div className='flex gap-2 items-center'>
				<p className='text-sm text-gray-400 mb-4'>{secondaryTag || "Unknown"}</p>

				<Image unoptimized width={1000} height={1000} src={locationImage} className='w-6.25 h-6.25 object-contain' alt='location' />
			</div>
		</div>
	);
}
