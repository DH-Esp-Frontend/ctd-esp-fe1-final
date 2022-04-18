import React , { FC } from 'react';
import './boton-favorito.css';

interface BotonFavoritoProps {
    esFavorito: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}


/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {boolean} esFavorito indica si el elemento es favorito o no
 * @param {React.MouseEventHandler<HTMLDivElement>} onClick funcion que se ejecuta al hacer click en el boton
 * 
 * @returns un JSX element 
 */
const BotonFavorito: FC<BotonFavoritoProps> = ({esFavorito, onClick}: BotonFavoritoProps) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;