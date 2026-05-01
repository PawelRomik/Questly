// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractList<T>(data: any, key: string): T[] {
	return data?.[key] ?? [];
}
