import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { ITarjetaPersonaje } from './personaje.interface';
import { ADD_FAVORITOS } from '../../store/characters/slice';
import { useAppDispatch } from '../../store';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje = ({nombre, imagenUrl, esFavorito, id }: ITarjetaPersonaje) => {
    const dispatch = useAppDispatch()

    const addFavorito = (id: number):void=> {
    dispatch(ADD_FAVORITOS(id))
  }
    return <div className="tarjeta-personaje">
        <img src={imagenUrl} alt={nombre}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito onClick={addFavorito} esFavorito={esFavorito} id={id}/>
        </div>
    </div>
}

export default TarjetaPersonaje;