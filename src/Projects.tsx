import React, { useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import { type ProjectContent } from "./api/projects";
import { fetchAllProjects } from "./api/projects";

export default function Projects() {
    const [projectData, setProjectData] = useState<Array<ProjectContent>>([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            setProjectData(
                await fetchAllProjects(
                    "https://gist.githubusercontent.com/jharrisong830/e377cf7f875b7ecaf0fae7eb0fff66d4/raw/4ee174e0338bfd1c9e7b0c31c4b93e51d34cd7a0/projects.json"
                )
            );
        };
        asyncWrapper();
        return;
    });
    
    let children: Array<React.JSX.Element> = [];
    for (let i = 0; i < projectData.length; i++) {
        children.push(<ProjectCard project={projectData[i]} />);
    }

    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">Projects.</h1>
                <p className="lead">
                    Some of my personal and academic projects.
                </p>
            </div>

            <div className="container py-5">{children}</div>
        </main>
    );
}
