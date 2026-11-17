import i18n from "../../i18n/i18n";

import type { Decorator } from "@storybook/react-vite";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";

export const LanguageDecorator: Decorator = (Story, contex) => {
	const { locale } = contex.globals;

	useEffect(() => {
		i18n.changeLanguage(locale);
	}, [i18n]);

	return (
		<Suspense>
			<I18nextProvider i18n={i18n}>
				<Story {...contex} />
			</I18nextProvider>
		</Suspense>
	);
};
