import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { NotFoundPage } from "@/pages/NotFound";

import { AppRoutes, routePath } from "@/shared/config";

import type { RouteProps } from "react-router";

export const routeConfig: RouteProps[] = [
	{
		path: routePath[AppRoutes.HOME],
		element: <HomePage />,
	},
	{
		path: routePath[AppRoutes.LOGIN],
		element: <LoginPage />,
	},
	{
		path: routePath[AppRoutes.NOTFOUND],
		element: <NotFoundPage />,
	},
];
