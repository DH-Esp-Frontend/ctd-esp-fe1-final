
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
export interface IBotonFavorito {
    esFavorito: boolean;
    onClick: (id:number)=> void;
    id: number
}

const BotonFavorito = ({esFavorito, onClick, id}: IBotonFavorito) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={()=>onClick(id)} />
    </div>
}

export default BotonFavorito;