import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCharacter } from "../componentes/slice/rickySlice";
import { busqueda, getCharacterByName} from '../componentes/slice/rickySlice';
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

  const personajes= useAppSelector(state => state.personaje.personajes)
  const [page, setPage]= useState(1)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchCharacter(page))
  }, [])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes personajes={personajes}/>
        <Paginacion />
    </div>
}

export default PaginaInicio