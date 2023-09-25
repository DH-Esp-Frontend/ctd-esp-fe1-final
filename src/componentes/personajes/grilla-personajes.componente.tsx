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
 
     const {isError, isLoading, listFavoritos} = useAppSelector((state) => state.characters)
     // Crea una copia de la lista de favoritos con los IDs de los personajes
     const favoritosIds = listFavoritos.map(character => character.id);
 
     // Mapea los personajes iniciales y establece esFavorito en true si están en la lista de favoritos
     const charactersWithFavoritos = initialCharacters.map(character => ({
       ...character,
       esFavorito: favoritosIds.includes(character.id),
     }));
     
     return <div className="grilla-personajes">
      
          {isLoading ? <p>Loading...</p> :
        
        charactersWithFavoritos?.map(character =>
                
                 <TarjetaPersonaje name={character.name} image={character.image} key={character.id} id={character.id} esFavorito={character.esFavorito} />
            )}
                   { isError && <p>{isError}</p>}
       
     </div>
 }
  
 export default GrillaPersonajes;