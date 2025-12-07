import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./Home";
import Error from "./Error";
import Projects from "./Projects";
import JSONTable from "./JSONTable";
import Navbar from "./components/Navbar";
import Connections from "./components/Connections";
import Privacy from "./Privacy";

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
        ),
        ErrorBoundary: () => (
            <>
                <Navbar />
                <Error />
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
    },
    {
        path: "/privacy",
        element: (
            <>
                <Navbar />
                <Privacy />
            </>
        )
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <>
        <RouterProvider router={router} />
        <Connections />
    </>
);
