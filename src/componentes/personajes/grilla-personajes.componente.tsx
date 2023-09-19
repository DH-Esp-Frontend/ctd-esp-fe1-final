import {  useAppSelector } from '../../store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IGrillaPersonajes } from './personaje.interface';




/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({initialCharacters} : IGrillaPersonajes) => {
 
    const {isError, isLoading} = useAppSelector((state) => state.characters)

    
    return <div className="grilla-personajes">
      
         {isLoading ? <p>Loading...</p> :
       
           initialCharacters?.map(character =>
                <TarjetaPersonaje nombre={character.name} imagenUrl={character.image} key={character.id} id={character.id} esFavorito={character.esFavorito}/>
           )}
          {isError  && <h3>No se encontraron resultados</h3>} 
      
    </div>
}
 
export default GrillaPersonajes;