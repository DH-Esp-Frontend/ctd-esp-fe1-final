import './paginacion.css';
import { incrementarPagina, decrementarPagina } from '../../actions/pagina.action';
import { buscarProximaPaginaThunk } from '../../actions/personaje.actions';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { IRootState,useSelector } from '../../store/store';

/**
 * Componente que contiene los botones para paginar
 * Gestiona el estado del número de página. Tanto de favoritos como de la página principal.
 * 
 * @param {string} tipoPagina Declara el contexto en el que tiene que modificar las paginas, ya sea la pagina de favoritos o la principal.  
 * 
 * @returns un JSX element 
 */

interface PaginacionProps  {
    tipoPagina: 'personajes' | 'favoritos';
}

const Paginacion: FC<PaginacionProps> = ({tipoPagina}: PaginacionProps) => {
    // Accedo al estado entero del Store con useSelector, para poder acceder dinamicamente a las propiedades del mismo
    const personajeEstado = useSelector((state:IRootState) => state.personajes);
    const paginaState = useSelector((state:IRootState) => state.pagina);
    const dispatch = useDispatch(); 
    
    
    const siguientePagina = personajeEstado.siguientePagina;
    const paginas = personajeEstado[tipoPagina === 'personajes' ? 'personajesPaginas' : 'favoritosPaginas']; 
    const pagina = paginaState[tipoPagina === 'personajes' ? 'personajes' : 'favoritos'];

    /**
     * Función que se ejecuta al hacer click en el botón de siguiente
     * Para lograr un efecto similar al "scrolling infinito", cuando falten dos pagina para llegar al final, se recargaran nuevos personajes para la misma query, si es que hay más personajes.
     */
    const handleIncrementarPagina = () => {
        if (pagina === Object.keys(paginas).length - 2 && siguientePagina !== "" && tipoPagina === 'personajes') {
            dispatch(buscarProximaPaginaThunk());
        }
        dispatch(incrementarPagina(tipoPagina));
    };

    return <div className="paginacion">
        <button disabled={pagina === 0} className={"primary"} onClick={()=> dispatch(decrementarPagina(tipoPagina))}>Anterior</button>
        <button disabled={pagina === Object.keys(paginas).length - 1 || Object.keys(paginas).length === 0} className={"primary"} onClick={()=> handleIncrementarPagina()}>Siguiente</button>
    </div>
}

export default Paginacion;