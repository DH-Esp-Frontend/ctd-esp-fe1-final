import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../store";
import { GET_CHARACTERS } from "../store/characters/thunk";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const { listFavoritos, urlBase} = useAppSelector((state) => state.characters)
    useEffect(() => {
        dispatch(GET_CHARACTERS(urlBase))
    
      .then((response) => {
        // Handle a successful API request here
        console.log("Characters fetched successfully:", response);
      })
      .catch((error) => {
        // Handle API request errors here
        console.error("Error fetching characters:", error);
      });
  }, [dispatch,urlBase]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(GET_CHARACTERS(urlBase));
        // Handle a successful API request here
        console.log("Characters fetched successfully:", response);
      } catch (error) {
        // Handle API request errors here
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, [dispatch,urlBase]);



    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes initialCharacters={listFavoritos}/> 
    </div>
}

export default PaginaFavoritos