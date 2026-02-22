import Connections from "./Connections";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function NavbarOutlet() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Connections />
        </>
    );
}
