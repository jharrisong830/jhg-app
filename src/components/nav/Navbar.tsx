import { useState } from "react";

import { Link, useLocation } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function Navbar() {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => setMenuAnchor(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: "inherit" }}>
                <Toolbar>
                    <Typography variant="h5" component={Link} sx={{ 
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none" ,
                        mr: 2
                    }} to="/">
                        jhg.app
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/projects"
                        >
                            Projects
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/json-table"
                        >
                            JSONTable
                        </Button>
                    </Box>

                    <Box justifyContent="flex-end" alignItems="flex-end" sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
                        <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={menuAnchor} open={menuAnchor !== null} onClose={handleCloseMenu}>
                            <MenuItem component={Link} to="/" onClick={handleCloseMenu}>
                                Home
                            </MenuItem>
                            <MenuItem component={Link} to="/projects" onClick={handleCloseMenu}>
                                Projects
                            </MenuItem>
                            <MenuItem component={Link} to="/json-table" onClick={handleCloseMenu}>
                                JSONTable
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
