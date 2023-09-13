import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slice/character/characterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import paginationReducer from "./slice/pagination/paginationSlice";


export const store = configureStore
({
    reducer: 
    {
        pages:paginationReducer,
        characters:charactersReducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

type DispatchFunc=()=>AppDispatch

export const useAppDispatch:DispatchFunc = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

export default store;
