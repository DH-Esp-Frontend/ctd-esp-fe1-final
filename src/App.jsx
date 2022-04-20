import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalle/:id" element={<PaginaDetalle />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
