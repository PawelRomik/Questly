type Props = {
	completed: boolean;
	onClick: (e: React.MouseEvent) => void;
};

export function AchievementButton({ completed, onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 text-sm font-medium rounded-lg transition cursor-pointer
			${completed ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} text-white`}
		>
			{completed ? "Undo" : "Complete"}
		</button>
	);
}
