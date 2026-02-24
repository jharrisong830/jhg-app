import Connections from "./Connections";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import CustomThemeProvider from "../CustomThemeProvider";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export default function NavbarOutlet() {
    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    minHeight: "100vh"
                }}
            >
                <Navbar />
                <Outlet />
                <Connections />
            </Container>
        </CustomThemeProvider>
    );
}
