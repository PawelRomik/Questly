const PROGRESS_STORAGE_KEY = "completed";

type CompletedState = Record<
	string,
	{
		quests: string[];
		achievements: string[];
		collections: string[];
		mapMarkers: string[];
	}
>;

type ImportMessages = {
	invalidFile: string;
	invalidShape: string;
	confirmOverwrite: string;
};

function isValidProgressShape(value: unknown): value is CompletedState {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return false;
	}

	return Object.values(value as Record<string, unknown>).every((gameData) => {
		if (!gameData || typeof gameData !== "object" || Array.isArray(gameData)) {
			return false;
		}

		const { quests, achievements, collections, mapMarkers } = gameData as Record<string, unknown>;

		return [quests, achievements, collections, mapMarkers].every((list) => Array.isArray(list) && list.every((item) => typeof item === "string"));
	});
}

export async function importLocalStorage(file: File, messages: ImportMessages) {
	const text = await file.text();

	let parsed: unknown;

	try {
		parsed = JSON.parse(text);
	} catch {
		alert(messages.invalidFile);
		return;
	}

	if (!isValidProgressShape(parsed)) {
		alert(messages.invalidShape);
		return;
	}

	const confirmed = window.confirm(messages.confirmOverwrite);

	if (!confirmed) return;

	window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(parsed));

	window.location.reload();
}
