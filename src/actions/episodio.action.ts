import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { getEpisode } from '../services/episodio.services';
import { IRootState } from '../store/store';
import Episodio from '../types/episodio.type';

export interface BuscarEpisodioAction extends Action {
    type: 'BUSCAR_EPISODIO',
    id: string;
}

export interface BuscarEpisodioSuccesAction extends Action {
    type: 'BUSCAR_EPISODIO_SUCCESS',
    episodio: Episodio;
}

export interface BuscarEpisodioErrorAction extends Action {
    type: 'BUSCAR_EPISODIO_ERROR',
    id: string;
}

const buscarEpisodio: ActionCreator<BuscarEpisodioAction> = (id: string) => {
    return {
        type: 'BUSCAR_EPISODIO',
        id: id
    }
}

const buscarEpisodioSucces: ActionCreator<BuscarEpisodioSuccesAction> = (episodio: Episodio) => {
    return {
        type: 'BUSCAR_EPISODIO_SUCCESS',
        episodio: episodio
    }
}

const buscarEpisodioError: ActionCreator<BuscarEpisodioErrorAction> = (id: string) => {
    return {
        type: 'BUSCAR_EPISODIO_ERROR',
        id: id
    }
}

export type EpisodioAction = BuscarEpisodioAction | BuscarEpisodioSuccesAction | BuscarEpisodioErrorAction;

interface BuscarEpisodioThunkAction extends ThunkAction<void, IRootState, unknown, EpisodioAction> {};


export const buscarEpisodioThunk = (episodio: string): BuscarEpisodioThunkAction => {
    return async (dispatch) => {
        dispatch(buscarEpisodio(episodio));
        try {
            const respuesta = await getEpisode(episodio);
            dispatch(buscarEpisodioSucces(respuesta));
        } catch (error) {
            dispatch(buscarEpisodioError(episodio));
        }
    }
}
