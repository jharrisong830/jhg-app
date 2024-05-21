"use client";

import { usePathname } from "next/navigation";

export function NavLinks({ currPath }: { currPath: string }) {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <a className="nav-link active" href={currPath === "/" ? "#" : "/"}>
                Home
            </a>
            <a className="nav-link" href={currPath === "/blog" ? "#" : "/blog"}>
                Blog
            </a>
            <a
                className="nav-link"
                href={currPath === "/roadmap" ? "#" : "/roadmap"}
            >
                Roadmap
            </a>
            <a
                className="nav-link"
                href={currPath === "/convert" ? "#" : "/convert"}
            >
                JSON Convert Tool
            </a>
        </div>
    );
}

export default function Navbar() {
    const currPath = usePathname();

    return (
        <nav className="navbar sticky-top navbar-expand-md">
            <div className="container-fluid">
                <a
                    className="navbar-brand fw-bold technicolor"
                    href={currPath === "/" ? "#" : "/"}
                >
                    jhg.app
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <NavLinks currPath={currPath} />
                </div>
            </div>
        </nav>
    );
}
