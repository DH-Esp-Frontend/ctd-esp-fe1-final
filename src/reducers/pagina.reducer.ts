import { Reducer } from "@reduxjs/toolkit";
import { PaginaAction } from "../actions/pagina.action";

export interface PaginaState {
    personajes: number;
    favoritos: number;
}

const initialState: PaginaState = {
    personajes: 0,
    favoritos: 0
};

export const paginaReducer: Reducer<PaginaState, PaginaAction> = (state = initialState, action): PaginaState => {
    switch (action.type) {
        case "SIGUIENTE_PAGINA":
            return {
                ...state,
                [action.tipoPagina]: state[action.tipoPagina] + 1
            };
        case "ANTERIOR_PAGINA":
            return {
                ...state,
                [action.tipoPagina]: state[action.tipoPagina] - 1
            };
        case "RESETEAR_PAGINAS":
            return {
                ...state,
                personajes: 0,
                favoritos: 0,
            };
        default:
            return state;
    }
};
