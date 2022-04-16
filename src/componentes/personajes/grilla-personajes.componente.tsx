import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, {FC} from 'react';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from 'react-redux';
import { IRootState } from '../../store/store';

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

    const {personajes, status} = useSelector(state => state.personajes);
    const {pagina} = useSelector(state => state.pagina);

    if (status === 'LOADING') return <div>Cargando...</div>
    if (!personajes || personajes.length === 0) return <div></div>
    
    const personajes_en_pagina = personajes.find((personajes) => personajes.id === pagina);
    return <div className="grilla-personajes">
       {personajes_en_pagina && personajes_en_pagina.personajesEnPagina.map(personaje => <TarjetaPersonaje personaje={personaje}/>)}
    </div>
}
 
export default GrillaPersonajes;