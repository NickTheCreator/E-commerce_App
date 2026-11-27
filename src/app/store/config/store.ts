import { configureStore, type ThunkAction, type UnknownAction } from "@reduxjs/toolkit";
import { userReducer } from "@/app/entities";

import type { StateSchema } from "./StateSchema";

export const createStore = (initialState?: StateSchema) => {
	return configureStore({
		preloadedState: initialState,
		reducer: {
			user: userReducer,
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
		devTools: true,
	});
};

export type AppDispatch = ThunkAction<StateSchema, void, unknown, UnknownAction>;
