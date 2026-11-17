import type { Preview } from "@storybook/react-vite";

import { LanguageDecorator, RouterDecorator, ThemeDecorator } from "../src/shared/config/storybook";

// @ts-expect-error -- Vite handles this Sass side-effect import.
import "../src/app/styles/index.scss";

const preview: Preview = {
	globalTypes: {
		theme: {
			name: "theme",
			description: "App theme",
			toolbar: {
				icon: "circlehollow",
				items: [
					{ value: "blue-theme", title: "Blue" },
					{ value: "pink-theme", title: "Pink" },
				],
				dynamicTitle: true,
			},
			defaultValue: "blue-theme",
		},
		locale: {
			name: "locale",
			description: "App themlocalee",
			toolbar: {
				icon: "globe",
				items: [
					{ value: "en", title: "English" },
					{ value: "pt", title: "Português" },
				],
				dynamicTitle: true,
			},
			defaultValue: "en",
		},
	},
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
	decorators: [ThemeDecorator, RouterDecorator, LanguageDecorator],
};

export default preview;
