import { configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook,useDispatch, useSelector } from "react-redux";
import characterReducer from "./characters/slice";

const store = configureStore({
    reducer :{
        characters: characterReducer,
    },
})

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
export default store;