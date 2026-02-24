import Connections, { TestConnections } from "./Connections";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import CustomThemeProvider from "../CustomThemeProvider";
import Box from "@mui/material/Box";

export default function NavbarOutlet() {
    return (
        <CustomThemeProvider>
            <Box sx={{ color: "primary.contrastText", backgroundColor: "primary.main" }}>
                <Navbar />
                <Outlet />
                <TestConnections />
            </Box>
        </CustomThemeProvider>
    );
}
