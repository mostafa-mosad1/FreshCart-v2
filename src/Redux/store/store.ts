import { configureStore } from "@reduxjs/toolkit";
import { SigninSliceReducer } from "../features/SigninSlice";
import { useDispatch } from "react-redux";
import { authapi } from "../features/AuthApi/AuthApi";
import { ShopApi } from "../features/ShopApi";
import { CategpriesApi } from "../features/CategoriesApi";

export const store = configureStore({
  reducer: {
    signinSlice: SigninSliceReducer,
    [authapi.reducerPath]: authapi.reducer,
    [ShopApi.reducerPath]: ShopApi.reducer,
    [CategpriesApi.reducerPath]: CategpriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat([authapi.middleware])
      .concat([ShopApi.middleware])
      .concat([CategpriesApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
