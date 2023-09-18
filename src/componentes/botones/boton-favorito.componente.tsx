
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
    onClick?: ()=> void;
}
const BotonFavorito = ({esFavorito, onClick}:IBotonFavorito) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
    
      return (
        <div className="boton-favorito" onClick={handleClick}>
          <img src={src} alt="favorito" />
        </div>
      );
    };
    
    export default BotonFavorito;