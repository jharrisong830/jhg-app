import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import projects from "../../util/projects";

export default function ProjectSpotlight() {
    const spotlightProjectData = projects.slice(0, 2);

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <ProjectCard project={spotlightProjectData[0]!} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <ProjectCard project={spotlightProjectData[1]!} />
            </Grid>
        </Grid>
    );
}
