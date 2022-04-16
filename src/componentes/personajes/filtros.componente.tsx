import './filtros.css';
import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import {buscarPersonajesThunk} from '../../actions/personaje.actions';
import { resetearPagina } from '../../actions/pagina.action';

const Filtros:FC = () => {

    const dispatch = useDispatch(); 
    const onChange = (e: any) => {
        dispatch(buscarPersonajesThunk(e.target.value));
        dispatch(resetearPagina());
    }
    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => onChange(e)}/>
        </div>
    )
}

export default Filtros;