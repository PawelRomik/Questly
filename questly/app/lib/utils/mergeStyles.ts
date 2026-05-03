/* eslint-disable @typescript-eslint/no-explicit-any */
export default function mergeStyles(base: any, override: any): any {
	const result = { ...base };

	for (const key in override) {
		const baseVal = base[key];
		const overrideVal = override[key];

		if (typeof baseVal === "function" && typeof overrideVal === "function") {
			result[key] = (...args: any[]) => [baseVal(...args), overrideVal(...args)].filter(Boolean).join(" ");
		} else if (typeof baseVal === "object" && typeof overrideVal === "object" && baseVal !== null && overrideVal !== null) {
			result[key] = mergeStyles(baseVal, overrideVal);
		} else {
			result[key] = overrideVal;
		}
	}

	return result;
}
