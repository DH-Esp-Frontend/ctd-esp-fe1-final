import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { getEpisode } from '../services/episodio.services';
import { IRootState } from '../store/store';
import Episodio from '../types/episodio.type';

export interface BuscarEpisodiosAction extends Action {
    type: 'BUSCAR_EPISODIOS',
    ids: string[];
}

export interface BuscarEpisodiosSuccesAction extends Action {
    type: 'BUSCAR_EPISODIOS_SUCCESS',
    episodios: Episodio[];
}

export interface BuscarEpisodiosErrorAction extends Action {
    type: 'BUSCAR_EPISODIOS_ERROR',
}

const buscarEpisodios: ActionCreator<BuscarEpisodiosAction> = (ids: string[]) => {
    return {
        type: 'BUSCAR_EPISODIOS',
        ids: ids
    }
}

const buscarEpisodiosSucces: ActionCreator<BuscarEpisodiosSuccesAction> = (episodios: Episodio[]) => {
    return {
        type: 'BUSCAR_EPISODIOS_SUCCESS',
        episodios: episodios
    }
}

const buscarEpisodiosError: ActionCreator<BuscarEpisodiosErrorAction> = () => {
    return {
        type: 'BUSCAR_EPISODIOS_ERROR',
    }
}

export type EpisodioAction = BuscarEpisodiosAction | BuscarEpisodiosSuccesAction | BuscarEpisodiosErrorAction;

interface BuscarEpisodioThunkAction extends ThunkAction<void, IRootState, unknown, EpisodioAction> {};


export const buscarEpisodiosThunk = (episodios: string[]): BuscarEpisodioThunkAction => {
    return async (dispatch) => {
        const ids = episodios.map((e:string) => e.split('/').pop());
        const idsString = ids.join(',');
        dispatch(buscarEpisodios(ids));
        try {
            const respuesta = await getEpisode(idsString);
            const ans = Array.isArray(respuesta) ? respuesta : [respuesta];
            dispatch(buscarEpisodiosSucces(ans));
        } catch (error) {
            dispatch(buscarEpisodiosError());
        }
    }
}
