import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { fetchCharacter } from '../slice/rickySlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (props) => {
    /*const personaje= useAppSelector(state => state.personaje)*/
    return (
    <div  className="tarjeta-personaje">
           
                    {
                        <div className="tarjeta-personaje">
                            <img src={props.personaje.image}/>
                            <div className="tarjeta-personaje-body">
                                <span>{props.personaje.name}</span>
                                <BotonFavorito esFavorito={false} />
                            </div>
                        </div>
                      
                  }
                    
                    
    </div>
    )
}


export default TarjetaPersonaje;