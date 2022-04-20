import { Action, ActionCreator, ThunkAction } from '@reduxjs/toolkit';
import { buscarPersonajePorIdAPI, buscarPersonajesPorNombreAPI, buscarPersonajesPorPaginaAPI } from '../services/personaje.services';
import { IRootState } from '../store/store';
import Personaje, {PersonajeDetalle}  from '../types/personaje.type';
import { buscarEpisodiosThunk } from './episodio.action';

export interface BuscarPersonajesAction extends Action {
    type: 'BUSCAR_PERSONAJES',
    name: string
}

export interface BuscarPersonajesSuccessAction extends Action {
    type: 'BUSCAR_PERSONAJES_SUCCESS' | 'BUSCAR_PROXIMA_PAGINA_SUCCESS',
    siguientePagina: string,
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action {
    type: 'BUSCAR_PERSONAJES_ERROR',
    error: string
}

export interface BuscarPersonajePorIdSuccessAction extends Action {
    type: 'BUSCAR_PERSONAJE_SUCCESS',
    personajeDetalle: PersonajeDetalle
}

export interface BuscarPersonajePorIdErrorAction extends Action {
    type: 'BUSCAR_PERSONAJE_ERROR',
    error: string
}


export interface BuscarProximaPaginaAction extends Action {
    type: 'BUSCAR_PROXIMA_PAGINA',
}

export interface AgregarFavoritoAction extends Action {
    type: 'AGREGAR_FAVORITO',
    personaje: Personaje
}
export interface EliminarFavoritoAction extends Action {
    type: 'ELIMINAR_FAVORITO',
    personaje: Personaje
}
export interface LimpiarFavoritosAction extends Action {
    type: 'LIMPIAR_FAVORITOS',
}

export type PersonajeAction = BuscarPersonajesAction | BuscarPersonajesSuccessAction | BuscarPersonajesErrorAction |  BuscarPersonajePorIdSuccessAction | BuscarPersonajePorIdErrorAction | BuscarProximaPaginaAction | AgregarFavoritoAction | EliminarFavoritoAction | LimpiarFavoritosAction ;

interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajeAction> {};

const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: 'BUSCAR_PERSONAJES',
        name: name
    }
}

const buscarPersonajesSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[], siguientePagina:string) => {
    return {
        type: 'BUSCAR_PERSONAJES_SUCCESS',
        siguientePagina: siguientePagina,
        personajes: personajes
    }
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'BUSCAR_PERSONAJES_ERROR',
        error: error
    }
}

const buscarPersonajePorIdSuccess: ActionCreator<BuscarPersonajePorIdSuccessAction> = (personajeDetalle: PersonajeDetalle) => {
    return {
        type: 'BUSCAR_PERSONAJE_SUCCESS',
        personajeDetalle: personajeDetalle
    }
}

const buscarPersonajePorIdError: ActionCreator<BuscarPersonajePorIdErrorAction> = (error: string) => {
    return {
        type: 'BUSCAR_PERSONAJE_ERROR',
        error: error
    }
}

const buscarProximaPaginaSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[], siguientePagina:string) => {
    return {
        type: 'BUSCAR_PROXIMA_PAGINA_SUCCESS',
        siguientePagina: siguientePagina,
        personajes: personajes
    }
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: 'AGREGAR_FAVORITO',
        personaje: personaje
    }
}
export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: 'ELIMINAR_FAVORITO',
        personaje: personaje
    }
}

export const limpiarFavoritos: ActionCreator<LimpiarFavoritosAction> = () => {
    return {
        type: "LIMPIAR_FAVORITOS"
    }
} 

export const buscarProximaPagina: ActionCreator<BuscarProximaPaginaAction> = () => {
    return {
        type: 'BUSCAR_PROXIMA_PAGINA',
    }
}

export const buscarPersonajesThunk = (name: string): BuscarPersonajesThunkAction => {
    return async (dispatch) => {
        if (name.length > 2 || name.length === 0) { 
            dispatch(buscarPersonajes(name));
            try {
                const respuesta = await buscarPersonajesPorNombreAPI(name);
                dispatch(buscarPersonajesSuccess(respuesta.personajes, respuesta.siguientePagina));
            } catch (error) {
                dispatch(buscarPersonajesError(error));
            }
        }
    }
}

export const buscarPersonajePorIdThunk = (id: number): BuscarPersonajesThunkAction => {
    return async (dispatch) => {
        try {
            const respuesta = await buscarPersonajePorIdAPI(id);
            dispatch(buscarPersonajePorIdSuccess(respuesta.personaje));
            dispatch(buscarEpisodiosThunk(respuesta.personaje.episode));
        } catch (error) {
            dispatch(buscarPersonajePorIdError(error));
        }
    }
}

export const buscarProximaPaginaThunk = (): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        const { siguientePagina } = getState().personajes;
        if (siguientePagina !== "") {
            try {
                const respuesta = await buscarPersonajesPorPaginaAPI(siguientePagina);
                dispatch(buscarProximaPaginaSuccess(respuesta.personajes, respuesta.siguientePagina));
            } catch (error) {
                dispatch(buscarPersonajesError(error));
            }
        }
    }
} 

