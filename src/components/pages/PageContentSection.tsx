import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography, { type TypographyProps } from "@mui/material/Typography";

const getRowDirection = (rowReverse: boolean) =>
    rowReverse ? "row-reverse" : "row";
const getTitleAlign = (rowReverse: boolean) => (rowReverse ? "end" : "start");
const getTextAlign = (rowReverse: boolean) => (rowReverse ? "end" : "start");

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
        <Grid container direction={getRowDirection(rowReverse)} p={4}>
            <Grid
                display="flex"
                textAlign={getTextAlign(rowReverse)}
                justifyContent={getTitleAlign(rowReverse)}
                alignItems="center"
                size={{ xs: 12, md: 4 }}
            >
                <Typography
                    variant="h4"
                    {...titleProps}
                    sx={{ fontWeight: 700, ...titleProps?.sx }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid alignItems="center" size={{ xs: 12, md: 8 }}>
                <Stack spacing={2}>{children}</Stack>
            </Grid>
        </Grid>
    );
}
