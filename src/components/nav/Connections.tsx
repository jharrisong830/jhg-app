import github from "../../assets/link_icons/github-mark.svg";
import atSymbol from "../../assets/link_icons/at.svg";
import linkedin from "../../assets/link_icons/LI-In-Bug.png";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import MergeIcon from "@mui/icons-material/Merge";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

export function TestConnections() {
    return (
        <Grid container>
            <Grid display="flex" justifyContent="center" alignItems="center" size={12}>
                <Typography variant="h6" component="p">
                    Connect with me!
                </Typography>
            </Grid>

            <Grid container display="flex" justifyContent="center" alignItems="center" size={12} spacing={2}>
                <Grid display="flex" justifyContent="center" alignItems="center" size="auto">
                    <Button 
                        href="https://github.com/jharrisong830" 
                        target="_blank"
                        rel="noreferrer"
                        variant="contained" 
                        startIcon={<MergeIcon />}
                    >
                        GitHub
                    </Button>
                </Grid>

                <Grid display="flex" justifyContent="center" alignItems="center" size="auto">
                    <Button 
                        href="mailto:john@jhg.app" 
                        target="_blank"
                        rel="noreferrer"
                        variant="contained" 
                        startIcon={<EmailIcon />}
                    >
                        Email
                    </Button>
                </Grid>

                <Grid display="flex" justifyContent="center" alignItems="center" size="auto">
                    <Button 
                        href="https://linkedin.com/in/johngraham830" 
                        target="_blank"
                        rel="noreferrer"
                        variant="contained" 
                        startIcon={<WorkIcon />}
                    >
                        LinkedIn
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default function Connections() {
    return (
        <div className="container text-center pt-4 pb-5">
            <p className="lead text-body-emphasis">Connect with me.</p>
            <div className="container flex-row align-items-center">
                <a
                    href="https://github.com/jharrisong830"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img className="bi" src={github} alt="GitHub logo" />
                    GitHub
                </a>
                <a
                    href="mailto:john@jhg.app"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img className="bi" src={atSymbol} alt="at symbol (@)" />
                    Email
                </a>
                <a
                    href="https://linkedin.com/in/johngraham830"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light btn-lg icon-link mx-2 my-2 my-md-0"
                >
                    <img className="bi" src={linkedin} alt="LinkedIn logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
