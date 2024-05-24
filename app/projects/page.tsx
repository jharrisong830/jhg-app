import ProjectCard from "@/app/ui/projectCard";
import projectData from "@/app/projects";

export default function Projects() {
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
