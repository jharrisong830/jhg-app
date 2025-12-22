import { type ProjectContent } from "../util/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectArray({
    projects
}: {
    projects: Array<ProjectContent>;
}) {
    const children: Array<React.JSX.Element> = [];

    for (let i = 0; i < projects.length; i++) {
        children.push(<ProjectCard key={i} project={projects[i]} />);
    }

    return <>{children}</>;
}
