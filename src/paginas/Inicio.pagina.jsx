import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCharacter } from "../componentes/slice/rickySlice";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const [page, setPage]= useState(1)
  const dispatch = useAppDispatch()
  const personaje= useAppSelector(state => state.personaje)

  useEffect(() => {
    dispatch(fetchCharacter(page))
  }, [])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes/>
        <Paginacion />
    </div>
}

export default PaginaInicio