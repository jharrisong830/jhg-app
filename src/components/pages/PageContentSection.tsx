import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const getRowDirection = (rowReverse: boolean) =>
    rowReverse ? "row-reverse" : "row";
const getTitleAlign = (rowReverse: boolean) => (rowReverse ? "end" : "start");
const getTextAlign = (rowReverse: boolean) => (rowReverse ? "end" : "start");

export default function PageContentSection({
    title,
    children,
    rowReverse = false
}: {
    title: string;
    children: React.ReactNode;
    rowReverse?: boolean;
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
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
            </Grid>
            <Grid
                textAlign={getTextAlign(rowReverse)}
                alignItems="center"
                size={{ xs: 12, md: 8 }}
            >
                {children}
            </Grid>
        </Grid>
    );
}
