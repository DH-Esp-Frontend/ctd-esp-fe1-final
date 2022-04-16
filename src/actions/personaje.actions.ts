import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { type } from 'os';
import { buscarPersonajesAPI } from '../services/personaje.services';
import { IRootState } from '../store/store';
import Personaje  from '../types/personaje.type';

export interface BuscarPersonajesAction extends Action {
    type: 'BUSCAR_PERSONAJES',
    name: string
}

export interface BuscarPersonajesSuccessAction extends Action {
    type: 'BUSCAR_PERSONAJES_SUCCESS',
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action {
    type: 'BUSCAR_PERSONAJES_ERROR',
    error: string
}

export type PersonajeAction = BuscarPersonajesAction | BuscarPersonajesSuccessAction | BuscarPersonajesErrorAction;

interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajeAction> {};

const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: 'BUSCAR_PERSONAJES',
        name: name
    }
}

const buscarPersonajesSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: 'BUSCAR_PERSONAJES_SUCCESS',
        personajes: personajes
    }
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'BUSCAR_PERSONAJES_ERROR',
        error: error
    }
}


export const buscarPersonajesThunk = (name: string): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        if (name === "") {
            return dispatch(buscarPersonajesSuccess([]));
        }
        dispatch(buscarPersonajes(name));
        try {
            const personajes = await buscarPersonajesAPI(name);
            dispatch(buscarPersonajesSuccess(personajes));
        } catch (error) {
            dispatch(buscarPersonajesError(error));
        }
    }
}

