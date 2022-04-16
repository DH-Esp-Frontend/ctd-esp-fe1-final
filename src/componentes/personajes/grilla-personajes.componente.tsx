import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, {FC, useEffect} from 'react';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from 'react-redux';
import { IRootState } from '../../store/store';
import { buscarPersonajesThunk } from '../../actions/personaje.actions';
import { useDispatch } from 'react-redux';
/**
 * 
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaPersonajes:FC = () => {

    const dispatch = useDispatch();
    const {paginas, status} = useSelector(state => state.personajes);
    const {pagina} = useSelector(state => state.pagina);

    // Carga incial de personajes
    useEffect(() => {
        dispatch(buscarPersonajesThunk(''));
    }, []);

    if (status === 'LOADING') return <div>Cargando...</div>
    if (status === 'ERROR') return <div>Error en la carga de personajes.</div>
    
    if (!paginas || paginas.length === 0) return <div></div>
    
    const personajes_en_pagina = paginas.find((paginas) => paginas.id === pagina);
    return <div className="grilla-personajes">
       {personajes_en_pagina && personajes_en_pagina.personajesEnPagina.map(personaje => <TarjetaPersonaje personaje={personaje}/>)}
    </div>
}
 
export default GrillaPersonajes;