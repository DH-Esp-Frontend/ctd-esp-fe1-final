import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import React, { FC } from 'react';
import { useDispatch} from 'react-redux';
import { IRootState,  useSelector } from '../../store/store';
import Personaje from '../../types/personaje.type';
import { useNavigate } from 'react-router-dom';
import { verDetalleAction } from '../../actions/personaje.actions';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */


interface TarjetaPersonajeProps {
    personaje: Personaje;
}

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({personaje}:TarjetaPersonajeProps) => {
    
    const navigate = useNavigate();
    const {favoritos, favoritosId} = useSelector((state:IRootState) => state.personajes);
    const dispatch = useDispatch();
    const esFavorito = favoritosId.includes(personaje.id);
    const handleFavorito = () => {
        !esFavorito ? dispatch({type: 'AGREGAR_FAVORITO', personaje: personaje}) : dispatch({type: 'ELIMINAR_FAVORITO', personaje: personaje});
    }

    const handleSelect = () => {
        dispatch(verDetalleAction(personaje))
        navigate('/detalle/' + personaje.id);
    }

    return <div className="tarjeta-personaje" >
        <img src={personaje.image} alt={personaje.name} onClick={handleSelect}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito} onClick={handleFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;