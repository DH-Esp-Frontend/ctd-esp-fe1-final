import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useAppDispatch()
    const personaje= useAppSelector(state => state.personaje)
    const loading= useAppSelector(state=> state.personaje.loading)

    console.log(personaje.personajes)
    return (
        
    <div className="grilla-personajes">
    { personaje.personajes?.map((personaje)=>{
        return  <TarjetaPersonaje
         personaje= {personaje}
         key= {personaje.id}/>
    }
        )
    } 
            
    </div>
    )
}
 
export default GrillaPersonajes;