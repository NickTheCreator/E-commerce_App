import { BrowserRouter } from "react-router";

import type { Decorator } from "@storybook/react-vite";

export const RouterDecorator: Decorator = (Story, contex) => {
	return (
		<BrowserRouter>
			<Story {...contex} />
		</BrowserRouter>
	);
};
