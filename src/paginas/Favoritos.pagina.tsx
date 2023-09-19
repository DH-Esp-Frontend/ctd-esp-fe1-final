import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { GET_CHARACTERS } from "../store/characters/thunk";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const { listFavoritos, urlBase, esfavorito} = useAppSelector((state) => state.characters)
    useEffect(() => {
        dispatch(GET_CHARACTERS(urlBase));
      }, [])
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes initialCharacters={listFavoritos}/> 
    </div>
}

export default PaginaFavoritos