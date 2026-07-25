export default function Label({ text }: { text: string }) {
	return (
		<h2
			className='uppercase bg-linear-to-b
      from-[#151515]
      to-[#090909] font-bold text-3xl text-white p-2 px-6 border-2 border-white '
		>
			{text}
		</h2>
	);
}
