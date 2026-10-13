import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type ThemeType } from "./ThemeContext";

interface UseThemeReturn {
	theme?: ThemeType;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.BLUE ? Theme.PINK : Theme.BLUE;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	return { theme, toggleTheme };
};
