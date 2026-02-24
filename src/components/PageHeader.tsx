import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function PageHeader({
    title,
    subtitle,
    shouldEmphasizeTitle = false
}: {
    title: string;
    subtitle: string;
    shouldEmphasizeTitle?: boolean;
}) {
    return (
        <Grid container>
            <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                size={12}
                mb={1}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ fontWeight: shouldEmphasizeTitle ? 700 : 600 }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                size={12}
            >
                <Typography variant="h6" component="p" sx={{ fontWeight: 500 }}>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
}
