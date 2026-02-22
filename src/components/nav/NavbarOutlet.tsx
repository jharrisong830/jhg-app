import Connections from "./Connections";
import Navbar, { TestNavbar } from "./Navbar";
import { Outlet } from "react-router";

export default function NavbarOutlet() {
    return (
        <>
            <TestNavbar />
            <Outlet />
            <Connections />
        </>
    );
}
