
import './boton-favorito.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { ADD_FAVORITOS } from '../../store/characters/slice';
import { ICharacter } from '../../interfaces/character.interface';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
export interface IBotonFavorito {
    isFavorite: boolean;
    source: string
    id: number
}

const BotonFavorito = ({isFavorite,  id, name, image }: ICharacter) => {
    const dispatch = useAppDispatch()
    useAppSelector((state) => state.characters)
  

       
/**
 * Disparador de Agregar a favoritos
 * @author 'Carmen Vargas'
 * @return {Array} un array de favoritos
 */ 
    const addFavorito = () => {
        console.log('Botón Favorito ON CLICK');
        dispatch(ADD_FAVORITOS( {isFavorite,  id, name, image} ));
      }
      const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={addFavorito} />
    </div>
}

export default BotonFavorito;