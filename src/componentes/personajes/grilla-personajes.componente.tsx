import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, {FC} from 'react';
import { IRootState, useSelector } from '../../store/store';


export interface TipoPaginaProps {
    tipo: 'personajes' | 'favoritos';
}

/** 
 * Grilla de personajes para la pagina de inicio
 * Muestra una pagina de 9 personajes ya sea favoritos o pagina principal.
 * Se puede navegar entre las paginas con el componente Paginacion  
 * 
 * @param {'personajes' | 'favoritos'} tipo indica si se muestran los favoritos o la pagina principal
 * @returns un JSX element 
 */
const GrillaPersonajes: FC<TipoPaginaProps>= ({tipo}: TipoPaginaProps) => {
    // Accedo a variables del estado desde el store.
    const {status, favoritosPaginas, personajesPaginas} = useSelector((state:IRootState) => state.personajes);
    // Accedo al numero de pagina a mostrar para la pagina principal o favoritos.
    const {personajes,favoritos} = useSelector(state => state.pagina);

    const tipoPaginas = tipo === 'personajes' ? personajesPaginas : favoritosPaginas;

    if (status === 'LOADING') return <div>Cargando...</div>
    if (status === 'ERROR') return <div>Error en la carga de personajes.</div>
    if (!tipoPaginas || tipoPaginas.length === 0) return <div></div>
    
    // Accedo a los personajes correspondientes (favoritos o personajes) de la pagina actual.
    // Para esto, elijo la pagina del tipo que corresponda que tenga el id igual al numero de pagina actual.
    const personajes_en_pagina = tipoPaginas.find((tipoPaginas) => tipoPaginas.id === (tipo === 'personajes' ? personajes : favoritos));
    return <div className="grilla-personajes">
       {personajes_en_pagina && personajes_en_pagina.personajesEnPagina.map((personaje) => <TarjetaPersonaje personaje={personaje}  key={'Personaje_' + personaje.id}/>)}
    </div>
}
 
export default GrillaPersonajes;