import React from "react";

export default function Connections() {
    return (
        <div className="container text-center pt-4 pb-5">
            <p className="lead text-body-emphasis">Connect with me.</p>
            <div className="container flex-row align-items-center">
                <a
                    href="https://github.com/jharrisong830"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img
                        className="bi"
                        src="/link_icons/github-mark.svg"
                        alt="GitHub logo"
                    />
                    GitHub
                </a>
                <a
                    href="mailto:john@jhg.app"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img className="bi" src="/link_icons/at.svg" alt="at symbol (@)" />
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/johngraham830"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img className="bi" src="/link_icons/LI-In-Bug.png" alt="LinkedIn logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
