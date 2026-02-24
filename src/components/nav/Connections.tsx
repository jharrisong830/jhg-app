import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import MergeIcon from "@mui/icons-material/Merge";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

export default function Connections() {
    return (
        <Grid container pb={2}>
            <Grid display="flex" justifyContent="center" alignItems="center" size={12} spacing={2} mb={2}>
                <Typography variant="h6" component="h6" sx={{ fontWeight: 600 }}>
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
                        size="large"
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
                        size="large"
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
                        size="large"
                        startIcon={<WorkIcon />}
                    >
                        LinkedIn
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
