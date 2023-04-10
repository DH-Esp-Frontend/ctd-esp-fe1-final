import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCharacter } from '../slice/rickySlice';
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

    const [page, setPage]= useState(1)
    const dispatch = useAppDispatch()
  
    useEffect(() => {
        dispatch(fetchCharacter(page))
    }, [page])

    return <div className="paginacion">
        <button disabled={page ===1? true:false} className={"primary"} onClick={() => setPage(page-1)}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => setPage(page+1)}>Siguiente</button>
    </div>
}

export default Paginacion;