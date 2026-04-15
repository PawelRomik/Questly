import Image from "next/image";

type Props = {
	src: string;
	completed: boolean;
};

export function AchievementImage({ src, completed }: Props) {
	return (
		<div className='relative flex items-center justify-center'>
			<div className='relative p-2 rounded-lg bg-zinc-900 border border-zinc-700'>
				<Image unoptimized width={1000} height={1000} src={`http://localhost:1337${src}`} className='h-12.5 w-12.5 object-contain' alt='location' />

				<div className='pointer-events-none absolute inset-0'>
					<div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${completed ? "border-green-600" : "border-red-600"}`} />
					<div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2  ${completed ? "border-green-600" : "border-red-600"}`} />
					<div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2  ${completed ? "border-green-600" : "border-red-600"}`} />
					<div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2  ${completed ? "border-green-600" : "border-red-600"}`} />
				</div>

				<div
					className={`pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 
					border-l-10 border-l-transparent 
					border-r-10 border-r-transparent 
					border-t-14 ${completed ? "border-t-green-600" : "border-t-red-600"}`}
				/>
			</div>
		</div>
	);
}
