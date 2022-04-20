import { Reducer } from "@reduxjs/toolkit";
import { EpisodioAction } from "../actions/episodio.action";
import Episodio from "../types/episodio.type";

export interface EpisodioState {
    episodios: Episodio[];
}

const initialState: EpisodioState = {
    episodios: [],
};

export const episodioReducer: Reducer<EpisodioState, EpisodioAction> = (state = initialState, action): EpisodioState => {
    switch (action.type) {
        case "BUSCAR_EPISODIO":
            return {
                ...state,
                episodios: [...state.episodios.filter((episodio:Episodio) => episodio.id !== action.id, {id: action.id, name: 'Cargando...', episode: 'Cargando...', air_date: 'Cargando...'})],
            };
        case "BUSCAR_EPISODIO_SUCCESS":
            return {
                ...state,
                episodios: [...state.episodios.filter((episodio:Episodio) => episodio.id !== action.episodio.id), action.episodio],
            };
        case "BUSCAR_EPISODIO_ERROR":
            return {
                ...state,
                episodios: [...state.episodios.filter((episodio:Episodio) => episodio.id !== action.id), {id: action.id, name: 'Error Buscando.', episode: 'S- E-', air_date: '--/--/----'}],      
            };
        default:
            return state;
    }
};
