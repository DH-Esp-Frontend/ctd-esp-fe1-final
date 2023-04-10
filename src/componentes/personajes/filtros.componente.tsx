import { useState } from 'react';
import './filtros.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { busqueda, getCharacterByName} from '../slice/rickySlice';

const Filtros = () => {

    const [buscarPersonaje, setBuscarPersonaje] = useState("")
    const dispatch= useAppDispatch()
    const inputValue= useAppSelector(state=> state.personaje.busqueda)

    const buscar=(e:{target:{value:string}})=>{
        dispatch(busqueda(e.target.value))
        dispatch(getCharacterByName(e.target.value))
        setBuscarPersonaje(e.target.value)
    }

    console.log(inputValue)
    return <div className="filtros">
        <label form="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={buscarPersonaje} onChange={buscar}/>
    </div>
}

export default Filtros;