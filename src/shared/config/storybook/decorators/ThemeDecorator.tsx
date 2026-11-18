import type { Decorator } from "@storybook/react-vite";

export const ThemeDecorator: Decorator = (Story, contex) => {
	const { theme } = contex.globals;
	return (
		<div className={theme}>
			<Story {...contex} />
		</div>
	);
};
