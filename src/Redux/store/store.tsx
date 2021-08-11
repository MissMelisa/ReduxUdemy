import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterReducer from "../slices/slicesCounter";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
