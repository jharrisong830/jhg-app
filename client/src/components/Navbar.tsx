import React from "react";
import { Navbar as NB } from "react-bootstrap";
import Nav from "react-bootstrap/nav";
import Container from "react-bootstrap/container";

/**
 * returns true if the current path is the same as the target path (i.e. current path is active)
 *
 * @param {string} currPath
 * @param {string} target
 *
 * @returns {boolean}
 */
const isActive = (currPath: string, target: string): boolean => {
    return currPath === target;
};

export default function Navbar() {
    return (
        <NB expand="md" sticky="top" className="customNav px-1">
            <Container className="m-0" fluid>
                <NB.Brand
                    className="fw-bold"
                    href={isActive(window.location.href, "/") ? "#" : "/"}
                >
                    jhg.app
                </NB.Brand>
                <NB.Toggle aria-controls="basic-navbar-nav" />
                <NB.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            className={
                                "px-2 mx-2" +
                                (isActive(window.location.href, "/projects")
                                    ? " active"
                                    : "")
                            }
                            href={
                                isActive(window.location.href, "/projects")
                                    ? "#"
                                    : "/projects"
                            }
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            className={
                                "px-2 mx-2" +
                                (isActive(window.location.href, "/json-table")
                                    ? " active"
                                    : "")
                            }
                            href={
                                isActive(window.location.href, "/json-table")
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