import Filtros from "../componentes/personajes/filtros.componente"

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    return <div className="container">
        <Filtros />
    </div>
}

export default PaginaInicio