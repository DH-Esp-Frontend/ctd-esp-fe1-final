import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../store/store";
import { GET_CHARACTERS } from "../store/slice/character/thunksCharacter";
import { useEffect } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const{value:pageValue} = useAppSelector((state) => state.pages)
    const{dataCharacter} = useAppSelector((state) => state.characters)

    useEffect(() => {
        dispatch(GET_CHARACTERS({data:pageValue, parameter: 'page'}))
    },[pageValue])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion page={pageValue} />
        <GrillaPersonajes />
        <Paginacion page={pageValue}/>
    </div>
}

export default PaginaInicio