import Stack from "@mui/material/Stack";

import ProjectCard from "../components/projects/ProjectCard";
import projects from "../util/projects";
import PageHeader from "../components/pages/PageHeader";

export default function Projects() {
    return (
        <main>
            <PageHeader
                title="Projects."
                subtitle="Some of my personal and academic projects."
            />

            <Stack spacing={2} p={4}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </Stack>
        </main>
    );
}
