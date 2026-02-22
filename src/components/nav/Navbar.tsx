import { Link, useLocation } from "react-router";
import { Navbar as NB, Nav, Container } from "react-bootstrap";

/**
 * returns true if the current path is the same as the target path (i.e. current path is active)
 *
 * @param {string} currPath
 * @param {string} target
 *
 * @returns {boolean}
 */
const isActive = (currPath: string, target: string): boolean => {
    if (currPath.endsWith("/") && currPath.length !== 1)
        currPath = currPath.slice(0, currPath.length - 1);
    return currPath === target; // check for trailing
};

export default function Navbar() {
    const location = useLocation();

    return (
        <NB expand="md" sticky="top" className="customNav px-1">
            <Container className="m-0" fluid>
                <NB.Brand
                    as={Link}
                    className="fw-bold"
                    to={isActive(location.pathname, "/") ? "#" : "/"}
                >
                    jhg.app
                </NB.Brand>
                <NB.Toggle aria-controls="basic-navbar-nav" />
                <NB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            className={
                                "px-2 mx-2" +
                                (isActive(location.pathname, "/projects")
                                    ? " active"
                                    : "")
                            }
                            to={
                                isActive(location.pathname, "/projects")
                                    ? "#"
                                    : "/projects"
                            }
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            className={
                                "px-2 mx-2" +
                                (isActive(
                                    location.pathname,
                                    "/json-table"
                                )
                                    ? " active"
                                    : "")
                            }
                            to={
                                isActive(
                                    location.pathname,
                                    "/json-table"
                                )
                                    ? "#"
                                    : "/json-table"
                            }
                        >
                            JSONTable
                        </Nav.Link>
                    </Nav>
                </NB.Collapse>
            </Container>
        </NB>
    );
}
