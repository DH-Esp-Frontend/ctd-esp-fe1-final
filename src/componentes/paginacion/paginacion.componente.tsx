import './paginacion.css';
import { incrementarPagina, decrementarPagina } from '../../actions/pagina.action';
import { buscarProximaPaginaThunk } from '../../actions/personaje.actions';
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { IRootState,useSelector } from '../../store/store';

interface PaginacionProps  {
    tipoPagina: 'personajes' | 'favoritos';
}

/**
 * Componente que contiene los botones para paginar
 * Gestiona el estado del número de página. Tanto de favoritos como de la página principal.
 * 
 * 
 * @param {'personajes' | 'favoritos'} tipoPagina Declara el contexto en el que tiene que modificar las paginas, ya sea la pagina de favoritos o la principal.  
 * @returns un JSX element 
 */
const Paginacion: FC<PaginacionProps> = ({tipoPagina}: PaginacionProps) => {
    const dispatch = useDispatch(); 
    
    // Accedo a las variables del estado desde el Store con useSelector. 
    const {siguientePagina, personajesPaginas, favoritosPaginas} = useSelector((state:IRootState) => state.personajes);
    const {personajes,favoritos} = useSelector((state:IRootState) => state.pagina);
    
    // Guardo en una variable el tipo de página que se está gestionando (personajes o favoritos).
    const paginas = tipoPagina === 'personajes' ? personajesPaginas : favoritosPaginas; 
    const numPagina = tipoPagina === 'personajes' ? personajes : favoritos;

    /**
     * Función que se ejecuta al hacer click en el botón de siguiente
     * Para lograr un efecto similar al "scrolling infinito", cuando falten dos pagina para llegar al final, se recargaran nuevos personajes para la misma query, si es que hay más personajes.
     */
    const handleIncrementarPagina = () => {
        if (numPagina === Object.keys(paginas).length - 2 && siguientePagina !== "" && tipoPagina === 'personajes') {
            dispatch(buscarProximaPaginaThunk());
        }
        dispatch(incrementarPagina(tipoPagina));
    };

    return <div className="paginacion">
        <button disabled={numPagina === 0} className={"primary"} onClick={()=> dispatch(decrementarPagina(tipoPagina))}>Anterior</button>
        <button disabled={numPagina === Object.keys(paginas).length - 1 || Object.keys(paginas).length === 0} className={"primary"} onClick={()=> handleIncrementarPagina()}>Siguiente</button>
    </div>
}

export default Paginacion;