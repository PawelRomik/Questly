const PROGRESS_STORAGE_KEY = "completed";

type ExportMessages = {
	noProgressToExport: string;
};

export function exportLocalStorage(messages: ExportMessages) {
	const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);

	if (!raw) {
		alert(messages.noProgressToExport);
		return;
	}

	let formatted: string;

	try {
		formatted = JSON.stringify(JSON.parse(raw), null, 2);
	} catch {
		formatted = raw;
	}

	const blob = new Blob([formatted], { type: "text/plain" });
	const url = URL.createObjectURL(blob);

	const date = new Date().toISOString().slice(0, 10);
	const link = document.createElement("a");
	link.href = url;
	link.download = `questly-data-${date}.txt`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	URL.revokeObjectURL(url);
}
