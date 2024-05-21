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
            </div>
        </nav>
    );
}
