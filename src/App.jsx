import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <div className="App">
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalle" element={
            <QueryClientProvider client={queryClient}>
              <PaginaDetalle />
            </QueryClientProvider>
          } />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
