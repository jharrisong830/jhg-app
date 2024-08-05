import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { ProjectContent } from "../api/projects";
import { fetchSpotlightProjects } from "../api/projects";


export default function ProjectSpotlight() {
    const [spotlightProjectData, setSpotlightProjectData] = useState<Array<ProjectContent>>([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            setSpotlightProjectData(
                await fetchSpotlightProjects(
                    "https://gist.githubusercontent.com/jharrisong830/e377cf7f875b7ecaf0fae7eb0fff66d4/raw/4ee174e0338bfd1c9e7b0c31c4b93e51d34cd7a0/projects.json"
                )
            );
        };
        asyncWrapper();
        return;
    });

    let children: Array<React.JSX.Element> = [];
    for (let i = 0; i < spotlightProjectData.length; i++) {
        children.push(<ProjectCard project={spotlightProjectData[i]} />);
    }
    
    return <div className="card-group my-4 pe-md-2">{children}</div>;
}
