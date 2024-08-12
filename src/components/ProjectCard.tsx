import React from "react";
import { Link } from "react-router-dom";

import { type ProjectContent } from "../api/projects";

export default function ProjectCard({ project }: { project: ProjectContent }) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title text-body-emphasis">
                    {project.title}
                </h5>
                <h6 className="card-subtitle mb-2">{project.subtitle}</h6>
                <p className="card-text text-body-emphasis">
                    {project.description}
                </p>
                <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light icon-link"
                >
                    <img
                        src={project.buttonImgPath}
                        alt={`link icon for ${project.title} project`}
                        width={24}
                        height={24}
                    />
                    {project.linkText}
                </Link>
            </div>
        </div>
    );
}
