import { Reducer } from "@reduxjs/toolkit";
import { PersonajeAction } from "../actions/personaje.actions"; 
import  Pagina from "../types/pagina.type";
import Personaje, { PersonajeDetalle } from "../types/personaje.type";
import { paginarRespuesta } from "../utils/paginarRespuesta";

export interface PersonajeState {
    busqueda: string;
    personajes: Personaje[];
    personajesPaginas: Pagina[];
    siguientePagina: string,
    status: "LOADING" | "SUCCESS" | "ERROR";
    error: string | null;
    favoritos: Personaje[];
    favoritosPaginas: Pagina[];
    favoritosId: number[];
    personajeDetalle: PersonajeDetalle | null;
}

const initialState: PersonajeState = {
    busqueda: "",
    personajes: [],
    personajesPaginas: [],
    siguientePagina: "",
    status: "SUCCESS",
    error: null,
    favoritos: [],
    favoritosPaginas: [],
    favoritosId: [],
    personajeDetalle: null
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
                personajesPaginas: paginarRespuesta(action.personajes),
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
                personajesPaginas: paginarRespuesta([...state.personajes, ...action.personajes]),
                siguientePagina: action.siguientePagina,
                status: "SUCCESS"
            };
        case "AGREGAR_FAVORITO":
            return {
                ...state,
                favoritos: [...state.favoritos.filter(personaje => personaje.id !== action.personaje.id), action.personaje],
                favoritosPaginas: paginarRespuesta([...state.favoritos.filter(personaje => personaje.id !== action.personaje.id), action.personaje]),
                favoritosId: [...state.favoritosId.filter(id => id !== action.personaje.id), action.personaje.id]
            };
        case "ELIMINAR_FAVORITO":
            return {
                ...state,
                favoritos: state.favoritos.filter(personaje => personaje.id !== action.personaje.id),
                favoritosPaginas: paginarRespuesta(state.favoritos.filter(personaje => personaje.id !== action.personaje.id)),
                favoritosId: state.favoritosId.filter(id => id !== action.personaje.id)
            };
        case "LIMPIAR_FAVORITOS":
            return {
                ...state,
                favoritos: [],
                favoritosPaginas: [],
                favoritosId: []
            }
        case "BUSCAR_PERSONAJE_SUCCESS":
            return {
                ...state,
                personajeDetalle: action.personajeDetalle
            };

        default:
            return state;
    }
};


    