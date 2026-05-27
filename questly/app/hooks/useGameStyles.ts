"use client";

import { useParams } from "next/navigation";

type VariantMap<T> = Record<string, T>;

export function useGameStyles<T>(variants: VariantMap<T>): T {
	const params = useParams();

	const game = params.game as string;

	return variants[game] ?? variants.default;
}
