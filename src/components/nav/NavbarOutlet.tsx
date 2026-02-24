import Connections, { TestConnections } from "./Connections";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import CustomThemeProvider from "../CustomThemeProvider";
import Container from "@mui/material/Container";

export default function NavbarOutlet() {
    return (
        <CustomThemeProvider>
            <Container sx={{ color: "primary.contrastText", backgroundColor: "primary.main" }}>
                <Navbar />
                <Outlet />
                <TestConnections />
            </Container>
        </CustomThemeProvider>
    );
}
