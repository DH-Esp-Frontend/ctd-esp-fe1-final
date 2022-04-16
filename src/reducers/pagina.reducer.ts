import { Reducer } from "@reduxjs/toolkit";
import { PaginaAction } from "../actions/pagina.action";

export interface PaginaState {
    pagina: number;
    paginaFav: number;
}

const initialState: PaginaState = {
    pagina: 0,
    paginaFav: 0
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
                pagina: 0
            };
        default:
            return state;
    }
};
