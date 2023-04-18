import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { busqueda, fetchCharacter, getCharacterByName } from '../slice/rickySlice';
import './paginacion.css';


/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const personaje= useAppSelector(state => state.personaje)
    const [page, setPage]= useState(1)
    const dispatch = useAppDispatch()
    const [buscarPersonaje, setBuscarPersonaje] = useState("")

    useEffect(() => {
        dispatch(fetchCharacter(page))
    }, [page])

    const cambiarPagina=()=>{
        setPage(page-1)
       /* dispatch(busqueda(personaje.busqueda))
        dispatch(getCharacterByName(personaje.busqueda)) */
    }

    return <div className="paginacion">
        <button disabled={page ===1? true:false} className={"primary"} onClick={cambiarPagina}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => setPage(page+1)}>Siguiente</button>
    </div>
}

export default Paginacion;