import { Reducer } from "@reduxjs/toolkit";
import { PaginaAction } from "../actions/pagina.action";

export interface PaginaState {
    pagina: number;
}

const initialState: PaginaState = {
    pagina: 0
};

export const paginaReducer: Reducer<PaginaState, PaginaAction> = (state = initialState, action): PaginaState => {
    switch (action.type) {
        case "SIGUIENTE_PAGINA":
            return {
                ...state,
                pagina: state.pagina + 1
            };
        case "ANTERIOR_PAGINA":
            return {
                ...state,
                pagina: state.pagina - 1
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
