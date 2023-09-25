import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { ICharacter } from '../../interfaces/character.interface';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
* @returns un JSX element 
 */

const TarjetaPersonaje = ({name, image, esFavorito, id}: ICharacter) => {  
    return <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={esFavorito} id={id} name={name} image={image}/>
        </div>
    </div>
}

export default TarjetaPersonaje;