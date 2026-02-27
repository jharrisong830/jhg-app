import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import projects from "../../util/projects";

export default function ProjectSpotlight() {
    return (
        <Grid container spacing={2}>
            {projects.slice(0, 2).map((project) => (
                <Grid key={project.title} size={{ xs: 12, md: 6 }}>
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </Grid>
    );
}
