import { useTheme } from "./theme/useTheme";
import { AuthProviders, type AuthProvidersType } from "./auth/auth";
import { routePaths, AppRoutes } from "./router/routePaths";
import { languageIconList, type SupportedLngsType } from "./i18n/LanguageIconList";
import { Theme, ThemeContext, type ThemeType, LOCAL_STORAGE_THEME_KEY } from "./theme/ThemeContext";

export {
	AuthProviders,
	routePaths,
	AppRoutes,
	Theme,
	ThemeContext,
	LOCAL_STORAGE_THEME_KEY,
	languageIconList,
	useTheme,
};
export type { ThemeType, SupportedLngsType, AuthProvidersType };
