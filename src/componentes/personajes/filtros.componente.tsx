import './filtros.css';
import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import {buscarPersonajesThunk} from '../../actions/personaje.actions';

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const Filtros = () => {

    const dispatch = useDispatch(); 
    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => dispatch(buscarPersonajesThunk(e.target.value))}/>
        </div>
    )
}

export default Filtros;