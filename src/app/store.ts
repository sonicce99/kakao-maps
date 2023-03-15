import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { api } from "./service/api";
import mapSlice from "../features/viewMap/mapSlice";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    mapSlice,
    counterSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
