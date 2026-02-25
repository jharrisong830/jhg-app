import { Link } from "react-router";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { type ProjectContent } from "../../util/projects";

export default function ProjectCard({ project }: { project: ProjectContent }) {
    return (
        <Card variant="outlined" sx={{ color: "primary.contrastText", backgroundColor: "#484261", height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h5" component="div">
                    {project.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    {project.subtitle}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
                <Button 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                >
                    {project.linkText}
                </Button>
            </CardActions>
        </Card>
    );

    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title text-body-emphasis">
                    {project.title}
                </h5>
                <h6 className="card-subtitle mb-2">{project.subtitle}</h6>
                <p className="card-text text-body-emphasis">
                    {project.description}
                </p>
                <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light icon-link"
                >
                    <img
                        src={project.buttonImgPath}
                        alt={`link icon for ${project.title} project`}
                        width={24}
                        height={24}
                    />
                    {project.linkText}
                </Link>
            </div>
        </div>
    );
}
