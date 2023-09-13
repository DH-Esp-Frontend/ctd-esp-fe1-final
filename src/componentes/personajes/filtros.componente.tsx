import { useRef } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../store';
import { IFiltros } from './personaje.interface';


const Filtros = ({name, setName, urlBase}: IFiltros) => {
    const ref = useRef<HTMLInputElement| null>(null)
    const dispatch = useAppDispatch()

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" ref={ref} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;