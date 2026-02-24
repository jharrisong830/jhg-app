import ProjectArray from "../components/projects/ProjectArray";
import projects from "../util/projects";
import PageHeader from "../components/pages/PageHeader";

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="Projects."
                subtitle="Some of my personal and academic projects."
            />

            <div className="container py-5">
                <ProjectArray projects={projects} />
            </div>
        </main>
    );
}
