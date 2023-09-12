import { configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
    reducer :{

    },
})

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
export default store;