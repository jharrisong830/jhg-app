import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import PageWithNavbar from "./components/PageWithNavbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";
import JSONTable from "./pages/JSONTable";
import Connections from "./components/Connections";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageWithNavbar>
                <Home />
            </PageWithNavbar>
        )
    },
    {
        path: "/privacy",
        element: (
            <PageWithNavbar>
                <Privacy />
            </PageWithNavbar>
        )
    },
    {
        path: "/projects",
        element: (
            <PageWithNavbar>
                <Projects />
            </PageWithNavbar>
        )
    },
    {
        path: "json-table",
        element: (
            <PageWithNavbar>
                <JSONTable />
            </PageWithNavbar>
        )
    },
    {
        path: "*",
        element: (
            <PageWithNavbar>
                <Error />
            </PageWithNavbar>
        )
    }
]);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Connections />
        </>
    );
}
