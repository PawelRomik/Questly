import { themes } from "@/app/theme/styles";

export type Theme = (typeof themes)[keyof typeof themes];
export type ThemeType = keyof Theme;

export function getTheme<T extends ThemeType>(type: T, game?: string): Theme[T] {
	const theme = game && game in themes ? themes[game as keyof typeof themes] : themes.questly;

	return theme[type];
}
