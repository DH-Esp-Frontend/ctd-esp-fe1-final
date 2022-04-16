import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { buscarPersonajesAPI } from '../services/personaje.services';
import { IRootState } from '../store/store';
import Personaje  from '../types/personaje.type';

export interface IncrementarPaginaAction extends Action {
    type: 'SIGUIENTE_PAGINA',
}

export interface DecrementarPaginaAction extends Action {
    type: 'ANTERIOR_PAGINA'
}

export interface ResetearPaginaAction extends Action {
    type: 'RESETEAR_PAGINAS'
}


export type PaginaAction = IncrementarPaginaAction | DecrementarPaginaAction | ResetearPaginaAction;

export const incrementarPagina: ActionCreator<IncrementarPaginaAction> = () => {
    return {
        type: 'SIGUIENTE_PAGINA',
    }
}

export const decrementarPagina: ActionCreator<DecrementarPaginaAction> = () => {
    return {
        type: 'ANTERIOR_PAGINA',
    }
}

export const resetearPagina: ActionCreator<ResetearPaginaAction> = () => {
    return {
        type: 'RESETEAR_PAGINAS',
    }
}
