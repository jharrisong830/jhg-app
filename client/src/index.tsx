import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./components/Navbar"

import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/json-table",
        element: <Home />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </React.StrictMode>
);
