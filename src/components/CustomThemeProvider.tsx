import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#253863",
            contrastText: "#F2E2D2"
        }
    },
    typography: {
        fontFamily: [
            "-apple-system", 
            "BlinkMacSystemFont", 
            "Segoe UI", 
            "Roboto", 
            "Oxygen",
            "Ubuntu", 
            "Cantarell", 
            "Fira Sans", 
            "Droid Sans", 
            "Helvetica Neue", 
            "sans-serif"
        ].join(",")
    }
});

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
