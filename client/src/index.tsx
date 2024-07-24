import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
