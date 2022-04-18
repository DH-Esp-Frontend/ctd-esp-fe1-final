import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import React, {FC} from 'react';
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch} from "react-redux";
import { resetearPagina } from "../actions/pagina.action";
import { limpiarFavoritos } from "../actions/personaje.actions";
import { IRootState,useSelector } from "../store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
    
    const {favoritosId} = useSelector((state:IRootState) => state.personajes);
    const dispatch = useDispatch();
    const handleLimpiar = () => {
        dispatch(limpiarFavoritos())
        dispatch(resetearPagina())
    }
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className={(favoritosId.length === 0)? "primary" : "danger"} disabled={(favoritosId.length === 0)} onClick={handleLimpiar}>Limpiar Favoritos</button>
        </div>
        <Paginacion tipo = 'favoritos'/>
        <GrillaPersonajes tipo="favoritos"/>
    </div>
}

export default PaginaFavoritos