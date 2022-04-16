import { Reducer } from "@reduxjs/toolkit";
import { PersonajeAction } from "../actions/personaje.actions"; 
import  Personaje from "../types/personaje.type";

export interface PersonajeState {
    busqueda: string;
    personajes: Personaje[];
    status: "LOADING" | "SUCCESS" | "ERROR";
    error: string | null;
}

const initialState: PersonajeState = {
    busqueda: "",
    personajes: [],
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
                status: "SUCCESS"
            };
        case "BUSCAR_PERSONAJES_ERROR":
            return {
                ...state,
                error: action.error,
                status: "ERROR"
            };
        default:
            return state;
    }
};


    