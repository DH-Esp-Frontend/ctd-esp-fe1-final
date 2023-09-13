export interface IFiltros{
    name: string | null,
    setName: (name: string | null  )=> void
    urlBase: string
  }

  export interface ITarjetaPersonaje {
    id: number
    nombre: string;
    imagenUrl: string;
    esFavorito: boolean
  }