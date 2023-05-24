import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";
import { BrowserRouter } from 'react-router-dom';
import ResultContextProvide from "./contexts/ResultContextProvide";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvide>
  </React.StrictMode>
);
 