import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";
import JSONTable from "./JSONTable";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Home />
            </>
        )
    },
    {
        path: "/projects",
        element: (
            <>
                <Navbar />
                <Projects />
            </>
        )
    },
    {
        path: "/json-table",
        element: (
            <>
                <Navbar />
                <JSONTable />
            </>
        )
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
