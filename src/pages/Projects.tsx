import ProjectArray from "../components/projects/ProjectArray";
import projects from "../util/projects";

export default function Projects() {
    return (
        <main>
            <div className="px-4 py-5 text-center">
                <h1 className="display-3 fw-normal">Projects.</h1>
                <p className="lead">
                    Some of my personal and academic projects.
                </p>
            </div>

            <div className="container py-5">
                <ProjectArray projects={projects} />
            </div>
        </main>
    );
}
