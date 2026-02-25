import { createBrowserRouter, RouterProvider } from "react-router";

import NavbarOutlet from "./components/nav/NavbarOutlet";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarOutlet />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/privacy",
                element: <Privacy />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
