import { lazy } from "react";

export const NotFoundPageLazy = lazy(
	() =>
		new Promise((resolve) => {
			// @ts-expect-error Simulate delay
			setTimeout(() => resolve(import("./NotFoundPage")), 1500);
		}),
);
