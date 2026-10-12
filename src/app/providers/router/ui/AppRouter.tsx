import { Route, Routes } from "react-router";
import { routeConfig } from "../routerConfig";

export default function AppRouter() {
	return (
		<Routes>
			{routeConfig.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
				/>
			))}
		</Routes>
	);
}
