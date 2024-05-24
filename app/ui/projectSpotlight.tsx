import type { ProjectContent } from "@/app/types";
import ProjectCard from "@/app/ui/projectCard";

export default function ProjectSpotlight({
    projs
}: {
    projs: Array<ProjectContent>;
}) {
    let children: Array<React.JSX.Element> = [];
    for (let i = 0; i < projs.length; i++) {
        children.push(<ProjectCard project={projs[i]} />);
    }
    return <div className="card-group my-4 pe-md-2">{children}</div>;
}
