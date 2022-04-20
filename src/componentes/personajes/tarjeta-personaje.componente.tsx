import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import React, { FC } from 'react';
import { useDispatch} from 'react-redux';
import { IRootState,  useSelector } from '../../store/store';
import Personaje from '../../types/personaje.type';
import { useNavigate } from 'react-router-dom';
import { agregarFavorito, buscarPersonajePorIdThunk, eliminarFavorito } from '../../actions/personaje.actions';
import { decrementarPagina } from '../../actions/pagina.action';


interface TarjetaPersonajeProps {
    personaje: Personaje;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * @param {Personaje} personaje: Personaje que sera mostrado en la tarjeta.
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({personaje}:TarjetaPersonajeProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Accedo al store para traer el numero de Pagina actual de la parte de Favoritos. (Uso para decrementar la pagina en caso de que sea necesario)
    const {favoritos: favPagina} = useSelector((state:IRootState) => state.pagina);
    // Accedo al store para traer la lista de IDs de personajes favoritos, y el total de paginas de favoritos. 
    const {favoritosId,favoritosPaginas} = useSelector((state:IRootState) => state.personajes);
    
    const esFavorito = favoritosId.includes(personaje.id);
    
    /**
     * Funcion para agregar o eliminar un personaje de favoritos.
     * Se encarga de validar si la pagina actual de favoritos queda vacia al eliminar un personaje de favoritos. De ser asi, se decrementa la pagina actual.
     * @returns void
    */
    const handleFavorito = () => {
        !esFavorito ? dispatch(agregarFavorito(personaje)) : dispatch(eliminarFavorito(personaje));
        // Validacion que modifica la pagina de Favoritos en caso de que se elimine el ultimo favorito de la pagina
        if (favPagina !== 0 && esFavorito && favoritosPaginas.find((pagina) => pagina.id === favPagina)?.personajesEnPagina.length === 1) {
            dispatch(decrementarPagina('favoritos'));
        }
    }

    const handleClick = () => {
        dispatch(buscarPersonajePorIdThunk(personaje.id));
        navigate('/detalle/' + personaje.id)
    }
    
    return <div className="tarjeta-personaje" >
        <img src={personaje.image} alt={personaje.name} onClick={handleClick}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito esFavorito={esFavorito} onClick={handleFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;