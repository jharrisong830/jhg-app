import { useState, useEffect } from "react";
import ProjectArray from "./ProjectArray";
import type { ProjectContent } from "../api/projects";
import { fetchSpotlightProjects } from "../api/projects";
import { Spinner } from "react-bootstrap";

export default function ProjectSpotlight() {
    const [spotlightProjectData, setSpotlightProjectData] = useState<
        Array<ProjectContent>
    >([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const asyncWrapper = async () => {
            setSpotlightProjectData(
                await fetchSpotlightProjects(
                    "https://gist.githubusercontent.com/jharrisong830/e377cf7f875b7ecaf0fae7eb0fff66d4/raw/projects.json"
                )
            );
        };
        asyncWrapper();
        return;
    }, []);

    useEffect(() => {
        // on change of spotlightProjectData, switch loading based on array contents
        setIsLoading(spotlightProjectData.length === 0);
    }, [spotlightProjectData]);

    return (
        <div className="card-group my-4 pe-md-2">
            {isLoading ? (
                <Spinner />
            ) : (
                <ProjectArray projects={spotlightProjectData} />
            )}
        </div>
    );
}
