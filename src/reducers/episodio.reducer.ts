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
        case "BUSCAR_EPISODIOS":
            return {
                ...state,
                episodios: action.ids.map((id) => ({id: id, name: 'Cargando...',episode:'S-E-',air_date:'--/----'})),
            };
        case "BUSCAR_EPISODIOS_SUCCESS":
            return {
                ...state,
                episodios: action.episodios,
            };
        case "BUSCAR_EPISODIOS_ERROR":
            return {
                ...state,
                episodios: [],      
            };
        default:
            return state;
    }
};
