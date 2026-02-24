import { useState } from "react";

import { Link } from "react-router";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
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
        <Grid container>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Grid
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        size="auto"
                        mr={2}
                    >
                        <Typography
                            variant="h5"
                            component={Link}
                            sx={{
                                color: "inherit",
                                fontWeight: 700,
                                textDecoration: "none"
                            }}
                            to="/"
                        >
                            jhg.app
                        </Typography>
                    </Grid>

                    <Grid
                        display={{ xs: "none", sm: "flex" }}
                        justifyContent="flex-start"
                        alignItems="center"
                        size="grow"
                    >
                        <Button color="inherit" component={Link} to="/projects">
                            Projects
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/json-table"
                        >
                            JSONTable
                        </Button>
                    </Grid>

                    <Grid
                        display={{ xs: "flex", sm: "none" }}
                        justifyContent="flex-end"
                        alignItems="center"
                        size="grow"
                    >
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleOpenMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor}
                            open={menuAnchor !== null}
                            onClose={handleCloseMenu}
                        >
                            <MenuItem
                                component={Link}
                                to="/"
                                onClick={handleCloseMenu}
                            >
                                Home
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/projects"
                                onClick={handleCloseMenu}
                            >
                                Projects
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/json-table"
                                onClick={handleCloseMenu}
                            >
                                JSONTable
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}
