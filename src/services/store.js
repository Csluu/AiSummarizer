import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// store is a global state the saves the entire information of our application
export const store = configureStore({
	// Most cases we don't need entire state but specific part of it so we reduce it to what we need
	reducer: { [articleApi.reducerPath]: articleApi.reducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(articleApi.middleware),
});
