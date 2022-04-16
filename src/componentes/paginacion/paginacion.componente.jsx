import { useSelector } from '../personajes/grilla-personajes.componente';
import './paginacion.css';
import { incrementarPagina, decrementarPagina } from '../../actions/pagina.action';
import { buscarProximaPaginaThunk } from '../../actions/personaje.actions';
import { useDispatch } from 'react-redux';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const { paginas, siguientePagina } = useSelector(state => state.personajes);
    
    const { pagina } = useSelector(state => state.pagina);
    const dispatch = useDispatch(); 
    /**
     * Función que se ejecuta al hacer click en el botón de siguiente
     * Para lograr un efecto similar al "scrolling infinito", cuando falten dos pagina para llegar al final, se recargaran nuevos personajes para la misma query, si es que hay más personajes.
     * 
     */
    const handleIncrementarPagina = () => {
        if (pagina === Object.keys(paginas).length - 2 && siguientePagina !== "") {
            console.log("buscando proxima pagina");
            dispatch(buscarProximaPaginaThunk(siguientePagina));
        }
        dispatch(incrementarPagina());
    };

    return <div className="paginacion">
        {/* Para decrementar Pagina puedo optar por la solucion trivial ya que no necesito recargar nuevos personajes. */}
        <button disabled={pagina === 0} className={"primary"} onClick={()=> dispatch(decrementarPagina())}>Anterior</button>
        <button disabled={pagina === Object.keys(paginas).length -1} className={"primary"} onClick={()=> handleIncrementarPagina()}>Siguiente</button>
    </div>
}

export default Paginacion;