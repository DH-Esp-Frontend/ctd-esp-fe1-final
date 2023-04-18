import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { fetchCharacter } from '../slice/rickySlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useState } from 'react';
import { agregaFavorito } from '../slice/rickySlice';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (props) => {
    const personaje= useAppSelector(state => state.personaje)
   /* const [favorito, setFavorito] = useState(false)*/
    const favorito = useAppSelector(state => state.personaje.favoritos)
    const dispatch= useAppDispatch();
       
    const isFavorite= favorito.find((item)=>item.id=== props.personaje.id)

    return (
    <div  className="tarjeta-personaje">
           
                    {
                        <div className="tarjeta-personaje">
                            <img src={props.personaje.image}/>
                            <div className="tarjeta-personaje-body">
                                <span>{props.personaje.name}</span>
                                <BotonFavorito 
                                    esFavorito={!isFavorite? false:true} 
                                    onClick={props.personaje}/>
                            </div>
                        </div>
                      
                  }
                    
                    
    </div>
    )
}


export default TarjetaPersonaje;