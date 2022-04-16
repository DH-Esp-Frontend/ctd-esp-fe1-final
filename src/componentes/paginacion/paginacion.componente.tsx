import { useSelector } from '../personajes/grilla-personajes.componente';
import './paginacion.css';
import { incrementarPagina, decrementarPagina } from '../../actions/pagina.action';
import { buscarProximaPaginaThunk } from '../../actions/personaje.actions';
import { useDispatch } from 'react-redux';
import Pagina from '../../types/pagina.type';
import { FC } from 'react';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

interface PaginacionProps  {
    tipoPagina: 'personajes' | 'favoritos';
}

const Paginacion: FC<PaginacionProps> = ({tipoPagina}: PaginacionProps) => {
    const personajeEstado = useSelector(state => state.personajes);
    const paginaState = useSelector(state => state.pagina);
    const dispatch = useDispatch(); 
    
    
    const siguientePagina = personajeEstado.siguientePagina;
    const paginas = personajeEstado[tipoPagina === 'personajes' ? 'personajesPaginas' : 'favoritosPaginas']; 
    const pagina = paginaState[tipoPagina === 'personajes' ? 'personajes' : 'favoritos'];

    /**
     * Función que se ejecuta al hacer click en el botón de siguiente
     * Para lograr un efecto similar al "scrolling infinito", cuando falten dos pagina para llegar al final, se recargaran nuevos personajes para la misma query, si es que hay más personajes.
     * 
     */
    const handleIncrementarPagina = () => {
        console.log(pagina, siguientePagina);
        if (pagina === Object.keys(paginas).length - 2 && siguientePagina !== "" && tipoPagina === 'personajes') {
            console.log("buscando proxima pagina");
            dispatch(buscarProximaPaginaThunk());
        }
        dispatch(incrementarPagina(tipoPagina));
    };

    return <div className="paginacion">
        {/* Para decrementar Pagina puedo optar por la solucion trivial ya que no necesito recargar nuevos personajes. */}
        <button disabled={pagina === 0} className={"primary"} onClick={()=> dispatch(decrementarPagina(tipoPagina))}>Anterior</button>
        <button disabled={pagina === Object.keys(paginas).length - 1 || Object.keys(paginas).length === 0} className={"primary"} onClick={()=> handleIncrementarPagina()}>Siguiente</button>
    </div>
}

export default Paginacion;