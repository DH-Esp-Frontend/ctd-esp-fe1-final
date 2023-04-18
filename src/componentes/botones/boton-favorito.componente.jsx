import { useAppDispatch } from '../../redux/hooks';
import { agregaFavorito } from '../slice/rickySlice';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick}) => {

    const dispatch= useAppDispatch();
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    
    const handleClick=(personaje)=>{
       dispatch(agregaFavorito(personaje))
    }

    return <div className="boton-favorito" onClick={()=>handleClick(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;