import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../actions/personaje.actions";
import { resetearPagina } from "../actions/pagina.action";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */


const PaginaInicio: FC = () => {
    // Carga incial de personajes
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(buscarPersonajesThunk(''));
        dispatch(resetearPagina())
    }, []);


    // Genero referencia al input de la barra de busqueda y comportamiento del onCLick de Reset 
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
            dispatch(buscarPersonajesThunk(''));
        }
    };

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleClick}>Limpiar Filtros</button>
        </div>
        <Filtros inputRef = {inputRef}/>
        <Paginacion tipoPagina= "personajes"/>
        <GrillaPersonajes tipo="personajesPaginas"/>
        <Paginacion tipoPagina= "personajes"/>
    </div>
}

export default PaginaInicio