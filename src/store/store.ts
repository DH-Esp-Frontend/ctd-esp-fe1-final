import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import {personajeReducer} from "../reducers/personaje.reducer";
import {paginaReducer} from "../reducers/pagina.reducer";
import { episodioReducer } from "../reducers/episodio.reducer";


const rootReducer = combineReducers({
   personajes: personajeReducer,
   pagina: paginaReducer,
   episodios: episodioReducer
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // Aqui aplicaremos los middlewares
)