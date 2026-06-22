export function highlightText(text: string, indices?: readonly [number, number][]) {
	if (!indices?.length) {
		return text;
	}

	const highlighted = new Set<number>();

	indices.forEach(([start, end]) => {
		for (let i = start; i <= end; i++) {
			highlighted.add(i);
		}
	});

	return text.split("").map((char, index) =>
		highlighted.has(index) ? (
			<span key={index} className='text-[#c6a85a] font-semibold'>
				{char}
			</span>
		) : (
			char
		)
	);
}
