import './filtros.css';
import React, {FC, RefObject} from 'react';
import { useDispatch } from 'react-redux';
import {buscarPersonajesThunk} from '../../actions/personaje.actions';
import { resetearPagina } from '../../actions/pagina.action';


interface filtrosProps {
    inputRef : RefObject<HTMLInputElement>;
}

/**
 * Barra de busqueda que permite filtrar los personajes. Desde el componente se puede resetear el valor de la barra. 
 * @param inputRef  referencia a la barra de busqueda. Esto nos permite reiniciar los valores en el onCLick del boton de reseteo
 * @returns <FC>
 */
const Filtros:FC<filtrosProps> = ({inputRef}: filtrosProps) => {

    const dispatch = useDispatch(); 
    const onChange = (e: any) => {
        dispatch(buscarPersonajesThunk(e.target.value));
        dispatch(resetearPagina());
    }

    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input id={'filtroNombre'} ref = {inputRef} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => onChange(e)}/>
        </div>
    )
}

export default Filtros;