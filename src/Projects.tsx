import React, { useState, useEffect } from "react";
import ProjectArray from "./components/ProjectArray";
import { type ProjectContent } from "./api/projects";
import { fetchAllProjects } from "./api/projects";
import { Spinner } from "react-bootstrap";

export default function Projects() {
    const [projectData, setProjectData] = useState<Array<ProjectContent>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const asyncWrapper = async () => {
            setProjectData(
                await fetchAllProjects(
                    "https://gist.githubusercontent.com/jharrisong830/e377cf7f875b7ecaf0fae7eb0fff66d4/raw/projects.json"
                )
            );
        };
        asyncWrapper();
        return;
    }, []);

    useEffect(() => { // on change of projectData, switch loading based on array contents
        setIsLoading(projectData.length === 0);
    }, [projectData]);

    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">Projects.</h1>
                <p className="lead">
                    Some of my personal and academic projects.
                </p>
            </div>

            <div className="container py-5">
                {isLoading ? <Spinner /> : <ProjectArray projects={projectData} />}
            </div>
        </main>
    );
}
