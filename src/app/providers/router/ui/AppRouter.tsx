import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";

export default function AppRouter() {
	return (
		<Routes>
			{routeConfig.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={
						<Suspense
							key={route.path}
							fallback={<>loading...</>}
						>
							{route.element}
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
}
