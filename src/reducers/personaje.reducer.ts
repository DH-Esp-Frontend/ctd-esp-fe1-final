import { Reducer } from "@reduxjs/toolkit";
import { PersonajeAction } from "../actions/personaje.actions"; 
import  Pagina from "../types/pagina.type";
import Personaje from "../types/personaje.type";
import { paginarRespuesta } from "../utils/paginarRespuesta";

export interface PersonajeState {
    busqueda: string;
    personajes: Personaje[];
    paginas: Pagina[];
    siguientePagina: string,
    status: "LOADING" | "SUCCESS" | "ERROR";
    error: string | null;
}

const initialState: PersonajeState = {
    busqueda: "",
    personajes: [],
    paginas: [],
    siguientePagina: "",
    status: "SUCCESS",
    error: null
};

export const personajeReducer: Reducer<PersonajeState, PersonajeAction> = (state = initialState, action): PersonajeState => {
    switch (action.type) {
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name,
                status: "LOADING"
            };
        case "BUSCAR_PERSONAJES_SUCCESS":
            return {
                ...state,
                personajes: action.personajes,
                paginas: paginarRespuesta(action.personajes),
                siguientePagina: action.siguientePagina,
                status: "SUCCESS"
            };
        case "BUSCAR_PERSONAJES_ERROR":
            return {
                ...state,
                error: action.error,
                status: "ERROR"
            };
        case "BUSCAR_PROXIMA_PAGINA_SUCCESS":
            return {
                ...state,
                personajes: [...state.personajes, ...action.personajes],
                paginas: paginarRespuesta([...state.personajes, ...action.personajes]),
                siguientePagina: action.siguientePagina,
                status: "SUCCESS"
            };
        default:
            return state;
    }
};


    