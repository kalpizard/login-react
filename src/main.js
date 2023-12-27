// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ajusta la ruta según la estructura de tu proyecto
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// Cambia de createRoot a render si estás usando React 17 o inferior
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
