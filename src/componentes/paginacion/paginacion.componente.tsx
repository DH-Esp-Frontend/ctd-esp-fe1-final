
import { IPagination } from '../../interfaces/interfaces';
import { DECREMENT_PAGE, INCREMENT_PAGE } from '../../store/slice/pagination/paginationSlice';
import { useAppDispatch } from '../../store/store';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({page}:IPagination) => {
    const dispatch = useAppDispatch();

    return <div className="paginacion">
        <button onClick={()=>dispatch(DECREMENT_PAGE())} className={"primary"}>Anterior</button>
        <button onClick={()=>dispatch(INCREMENT_PAGE())} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;