import { useSelector } from '../personajes/grilla-personajes.componente';
import './paginacion.css';
import { incrementarPagina, decrementarPagina } from '../../actions/pagina.action';
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
    const { pagina } = useSelector(state => state.pagina);
    const { personajes } = useSelector(state => state.personajes);
    const dispatch = useDispatch(); 
    return <div className="paginacion">
        <button disabled={pagina === 0} className={"primary"} onClick={()=> dispatch(decrementarPagina())}>Anterior</button>
        <button disabled={pagina === Object.keys(personajes).length -1} className={"primary"} onClick={()=> dispatch(incrementarPagina())}>Siguiente</button>
    </div>
}

export default Paginacion;