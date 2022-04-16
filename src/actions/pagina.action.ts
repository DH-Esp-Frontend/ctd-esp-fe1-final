import { Action, ActionCreator } from '@reduxjs/toolkit';

export interface IncrementarPaginaAction extends Action {
    type: 'SIGUIENTE_PAGINA',
    tipoPagina: 'personajes' | 'favoritos'
}

export interface DecrementarPaginaAction extends Action {
    type: 'ANTERIOR_PAGINA',
    tipoPagina: 'personajes' | 'favoritos'
}

export interface ResetearPaginaAction extends Action {
    type: 'RESETEAR_PAGINAS'
}


export type PaginaAction = IncrementarPaginaAction | DecrementarPaginaAction | ResetearPaginaAction;

export const incrementarPagina: ActionCreator<IncrementarPaginaAction> = (tipo: 'personajes'|'favoritos') => {
    return {
        type: 'SIGUIENTE_PAGINA',
        tipoPagina: tipo
    }
}

export const decrementarPagina: ActionCreator<DecrementarPaginaAction> =  (tipo: 'personajes'|'favoritos') => {
    return {
        type: 'ANTERIOR_PAGINA',
        tipoPagina: tipo
    }
}

export const resetearPagina: ActionCreator<ResetearPaginaAction> = () => {
    return {
        type: 'RESETEAR_PAGINAS',
    }
}
