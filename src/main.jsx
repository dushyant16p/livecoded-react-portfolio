import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// main.jsx is the entry point.
// It takes the App component and renders it inside
// the <div id="root"> in index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
