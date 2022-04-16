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

interface GrillaProps {
    tipo: 'paginas' | 'favoritosPaginas';
}

const GrillaPersonajes: FC<GrillaProps>= ({tipo}: GrillaProps) => {

    const dispatch = useDispatch();
    const estado = useSelector(state => state.personajes);
    const {pagina} = useSelector(state => state.pagina);

    const status = estado.status;
    const tipoPaginas = estado[tipo]

    if (status === 'LOADING') return <div>Cargando...</div>
    if (status === 'ERROR') return <div>Error en la carga de personajes.</div>

    if (!tipoPaginas || tipoPaginas.length === 0) return <div></div>
    
    const personajes_en_pagina = tipoPaginas.find((tipoPaginas) => tipoPaginas.id === pagina);
    return <div className="grilla-personajes">
       {personajes_en_pagina && personajes_en_pagina.personajesEnPagina.map(personaje => <TarjetaPersonaje personaje={personaje}/>)}
    </div>
}
 
export default GrillaPersonajes;