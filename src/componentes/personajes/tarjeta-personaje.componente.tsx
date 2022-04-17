import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import React, { FC } from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector as useSelectorRedux } from 'react-redux';
import { IRootState } from '../../store/store';
import Personaje from '../../types/personaje.type';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const useSelector: TypedUseSelectorHook<IRootState> = useSelectorRedux;

interface TarjetaPersonajeProps {
    personaje: Personaje;
}

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({personaje}:TarjetaPersonajeProps) => {

    const {favoritos, favoritosId} = useSelector((state:IRootState) => state.personajes);
    const dispatch = useDispatch();
    const esFavorito = favoritosId.includes(personaje.id);
    const handleFavorito = () => {
        !esFavorito ? dispatch({type: 'AGREGAR_FAVORITO', personaje: personaje}) : dispatch({type: 'ELIMINAR_FAVORITO', personaje: personaje});
        console.log(favoritos);
    }

    return <div className="tarjeta-personaje" >
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito} onClick={handleFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;