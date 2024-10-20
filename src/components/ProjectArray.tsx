import { type ProjectContent } from "../api/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectArray({
    projects
}: {
    projects: Array<ProjectContent>;
}) {
    let children: Array<React.JSX.Element> = [];

    for (let i = 0; i < projects.length; i++) {
        children.push(<ProjectCard key={i} project={projects[i]} />);
    }

    return <>{children}</>;
}
