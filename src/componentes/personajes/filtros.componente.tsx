import { useRef, useEffect } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../store';
import { IFiltros } from './personaje.interface';
import { GET_CHARACTERS, GET_CHARACTERS_FILTER } from '../../store/characters/thunk';



const Filtros = ({name, setName, urlBase}: IFiltros) => {
    const ref = useRef<HTMLInputElement| null>(null)
    const dispatch = useAppDispatch()

    const deleteFilter = ()=>{
        if (!ref.current) return
        ref.current.value = ''
        dispatch(GET_CHARACTERS(urlBase))
  
  }
     
         
      const filterByName  = ()  => {
        if (!ref.current) return
       setName(ref.current.value)
        if (name?.trim === null) {
          ref.current.value = '' 
          return
        }
       console.log(name)
      dispatch(GET_CHARACTERS_FILTER({name}))  
     
       }
      
       useEffect(() => {
       if(name === null){
        deleteFilter()
       } 
      }, [name]);
  
      return <div className="filtros">
          <label htmlFor="nombre">Filtrar por nombre:</label>
          <input type="text" ref={ref} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={filterByName}/>
      </div>
  }
  
  export default Filtros;