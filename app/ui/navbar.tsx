"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

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
    const currPath = usePathname();

    return (
        <nav className="navbar sticky-top navbar-expand-md">
            <div className="container-fluid">
                <Link
                    className="navbar-brand fw-bold"
                    href={isActive(currPath, "/") ? "#" : "/"}
                >
                    jhg.app
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link
                            className={
                                "nav-link px-2 mx-2" +
                                (isActive(currPath, "/projects")
                                    ? " active"
                                    : "")
                            }
                            href={
                                isActive(currPath, "/projects")
                                    ? "#"
                                    : "/projects"
                            }
                        >
                            Projects
                        </Link>
                        <Link
                            className={
                                "nav-link px-2 mx-2" +
                                (isActive(currPath, "/json-table")
                                    ? " active"
                                    : "")
                            }
                            href={
                                isActive(currPath, "/json-table")
                                    ? "#"
                                    : "/json-table"
                            }
                        >
                            JSONTable
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
