import ProjectArray from "./ProjectArray";
import projects from "../../util/projects";

export default function ProjectSpotlight() {
    const spotlightProjectData = projects.slice(0, 2);

    return (
        <div className="card-group my-4 pe-md-2">
            <ProjectArray projects={spotlightProjectData} />
        </div>
    );
}
