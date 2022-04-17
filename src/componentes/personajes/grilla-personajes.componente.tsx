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

interface GrillaProps {
    tipo: 'personajesPaginas' | 'favoritosPaginas';
}

const GrillaPersonajes: FC<GrillaProps>= ({tipo}: GrillaProps) => {

    const estado = useSelector(state => state.personajes);
    const {personajes,favoritos} = useSelector(state => state.pagina);

    const status = estado.status;
    const tipoPaginas = estado[tipo]

    if (status === 'LOADING') return <div>Cargando...</div>
    if (status === 'ERROR') return <div>Error en la carga de personajes.</div>

    if (!tipoPaginas || tipoPaginas.length === 0) return <div></div>
    
    const personajes_en_pagina = tipoPaginas.find((tipoPaginas) => tipoPaginas.id === (tipo === 'personajesPaginas' ? personajes : favoritos));
    return <div className="grilla-personajes">
       {personajes_en_pagina && personajes_en_pagina.personajesEnPagina.map((personaje) => <TarjetaPersonaje personaje={personaje}  key={'Personaje_' + personaje.id}/>)}
    </div>
}
 
export default GrillaPersonajes;