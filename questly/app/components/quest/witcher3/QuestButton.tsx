type Props = {
	completed: boolean;
	onClick: (e: React.MouseEvent) => void;
};

export function QuestButton({ completed, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`
        w-8 h-8 flex items-center justify-center
        border transition-all duration-200 cursor-pointer
        shadow-[inset_0_0_10px_rgba(0,0,0,0.6)]
        
        ${
					completed
						? "border-[#1f6b2b] bg-gradient-to-b from-[#0f2a14] to-[#07150a] hover:border-[#2fa34a]"
						: "border-[#6b1f1f] bg-gradient-to-b from-[#3a0d0d] to-[#1a0505] hover:border-[#a33]"
				}
      `}
		>
			<svg
				viewBox='0 0 24 24'
				className={`
          w-4 h-4 fill-current text-white transition-all duration-200
          ${completed ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
			>
				<path d='M10 15.172l-3.95-3.95-1.414 1.414L10 18 20.364 7.636l-1.414-1.414z' />
			</svg>
		</button>
	);
}
