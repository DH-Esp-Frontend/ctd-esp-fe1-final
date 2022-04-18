import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { IRootState,useSelector } from "../store/store";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { buscarPersonajePorIdAPI } from "../services/personaje.services";
import { FC } from "react";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * Se modificó el componente para que se pueda acceder a los datos del personaje a traves de la URL.
 * La url sera del tipo: /detalle/:id, donde :id es el id del personaje.
 * 
 * Se hace uso de reactQuery para hacer la consulta al API de la informacion del personaje, evitando guardar en el store mucha información acerca de capítulos y personajes que solo será usada aquí.
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */

const PaginaDetalle: FC = () => {
    // Accedo al id del personaje a traves de la URL
    const {id} = useParams();
    const dispatch = useDispatch();
    
    // Uso reactQuery para hacer la consulta al API de la informacion del personaje. Con el fin de poder mostrar como quedaría la página al cargar, se hace uso de initialData, cumpliendo el rol de Skeleton.
    const {data, isLoading, error} = useQuery(['personaje',id], () => buscarPersonajePorIdAPI(id), {
        initialData: {
            id: 999999,
            name: 'Cargando...',
            species: 'Cargando...',
            status: 'Cargando...',
            gender: '',
            episode: ['mock1','mock2','mock3'],
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhIPDxISDw8PFRUPDw8QEBUPDw8PFRcWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0LEg8PFisZExkrKysrKystLSsrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAHhABAQEAAQQDAAAAAAAAAAAAAAEREgIxkfAhUYH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOvraiqgAAGmgFKAYioCxMNIAqACpFAEIBhCUAlWpACqgCpaaAFKmg1+DOgKqVbQEWUlATVNAgSkoAQASVQEUNBBTQSEosoJKqQ0FEigBCUBFASLgAYACaKoMigFKAEAgJCAALCAgQADFyAkWEgCGqkAlVMXATVTFAKJoKaaaAABBFAIkWQAIAqEhQEWoDRU0oAAJFE0FipKASggLBNWAixFgAAGmpFBfkTQE1U1QRYEoCkIDOigIsgkBUWAESEAVJSACyooBUpQIqABAlBViAJqooIIAtUAKYAECGgi/aRQEgQFCEBICgIqALEhAWwxFBFiLoBgAuENATSJFAGAG9E0BQ8gGmiAQpI1IDNJFIBhIqQEUAAgB73RUwBUANVKUFXWVwDRMXAFZxZAQXiAhF1AUTVAxFARYgCmCQFhCAIqQBUwgBSAAFANMAFEWAqACVYlAXBMACKAmroSgBAEVTQSJGkgAIBi4mroBE1QMTFSgKkAVBYCVUxQMVEBoQAEACKAVFASCwoAGAYFhgEISAJq6igAAJViaBRUgKkUBBSQEwxbCgCEgAgDeJIAIqGgRTQAkDACAAEAAAAwARUwFQAWKgC0iAGGCAEAFwTQFAtBIKAIqARUxYCRYJAWBhgBiKBgYAIqAClAwVNARrUBAAUEgIKAoSJgBCEAABRCwBQwBDDAMVJFA97oKBEIAKUoKIAqEADSGAixDAOYyA1AhoLCIvSAEMAwwAFQ0FiGoC4JAFEUBABRAFiUhoEixmrAaxMCgmLEUDBOQBFACpABSgARQFSgDJAAigBAAKlAFhQBIADPUsAG4igIKAyAD//Z',
            origin: {
                name: 'Cargando...',
                url: '...'
            }
        }
    });
    
    // Accedo a las variables del store
    const {favoritosId} = useSelector((state: IRootState)  => state.personajes)
    const esFavorito = (id && favoritosId.includes(parseInt(id))) ? true : false;

    // Defino la funcion que se ejecuta al hacer click en el boton de favorito.
    const handleFavorito = () => {
        !esFavorito ? dispatch({type: 'AGREGAR_FAVORITO', personaje: data}) : dispatch({type: 'ELIMINAR_FAVORITO', personajeDetalle: data});
    }

    // Retornos en caso de error y carga
    if (error) return <p className="error-texto">Error Buscando Personaje Seleccionado </p>
    if (isLoading) return <p className="error-texto">Cargando Personajes </p>
    
    // Retorno del componente 
    return <div className="container">
                <h3>{data?.name}</h3>
                <div className={"detalle"}>
                    <div className={"detalle-header"}>
                        <img src={data?.image} alt="Rick Sanchez"/>
                        <div className={"detalle-header-texto"}>
                            <p>{data?.name}</p>
                            <p>Planeta: {data?.origin.name}</p>
                            <p>Genero: {data?.gender}</p>
                        </div>
                        <BotonFavorito esFavorito={esFavorito} onClick={handleFavorito} />
                    </div>
                </div>
                <h4>Lista de episodios donde apareció el personaje</h4>
                <div className={"episodios-grilla"}>
                    {
                        data?.episode.map((e:string) => <TarjetaEpisodio episodio = {e} key={e}/>)
                    }
                </div>
            </div>
}

export default PaginaDetalle