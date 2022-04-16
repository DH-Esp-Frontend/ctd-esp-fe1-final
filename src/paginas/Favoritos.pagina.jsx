import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {React} from 'react';
import Paginacion from "../componentes/paginacion/paginacion.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <Paginacion tipoPagina = 'paginaFav'/>
        <GrillaPersonajes tipo="favoritosPaginas"/>
    </div>
}

export default PaginaFavoritos