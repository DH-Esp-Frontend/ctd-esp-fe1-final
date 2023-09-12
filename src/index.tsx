import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import App from "./App";



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();