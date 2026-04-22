import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography, { type TypographyProps } from "@mui/material/Typography";

const getContentAlign = (rowReverse: boolean) =>
    rowReverse ? "end" : "start";

export default function PageContentSection({
    title,
    children,
    rowReverse = false,
    titleProps
}: {
    title: string;
    children: React.ReactNode;
    rowReverse?: boolean;
    titleProps?: TypographyProps;
}) {
    return (
        <Grid container direction={rowReverse ? "row-reverse" : "row"} sx={{ p: 4 }}>
            <Grid
                size={{ xs: 12, md: 4 }}
                sx={{ display: "flex", textAlign: getContentAlign(rowReverse), justifyContent: getContentAlign(rowReverse), alignItems: "center", pb: { xs: 2, md: 0 } }}
            >
                <Typography
                    variant="h4"
                    {...titleProps}
                    sx={{ fontWeight: 700, ...titleProps?.sx }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ alignItems: "center" }}>
                <Stack spacing={2}>{children}</Stack>
            </Grid>
        </Grid>
    );
}
