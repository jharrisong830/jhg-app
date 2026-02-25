import ProjectCard from "./ProjectCard";
import projects from "../../util/projects";

export default function ProjectSpotlight() {
    const spotlightProjectData = projects.slice(0, 2);

    return (
        <div className="card-group my-4 pe-md-2">
            {spotlightProjectData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}
