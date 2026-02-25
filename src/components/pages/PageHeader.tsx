import Typography, { type TypographyProps } from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function PageHeader({
    title,
    subtitle,
    shouldEmphasizeTitle = false,
    titleProps,
    subtitleProps
}: {
    title: string;
    subtitle: string;
    shouldEmphasizeTitle?: boolean;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
}) {
    return (
        <Grid container p={4}>
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
                    {...titleProps}
                    sx={{
                        fontWeight: shouldEmphasizeTitle ? 700 : 500,
                        ...titleProps?.sx
                    }}
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
                <Typography
                    variant="h6"
                    component="p"
                    {...subtitleProps}
                    sx={{ fontWeight: 500, ...subtitleProps?.sx }}
                >
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
}
