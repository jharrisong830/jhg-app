import { Link, useLocation } from "react-router";

import Button from "@mui/material/Button";

import PageHeader from "../components/pages/PageHeader";
import PageContentSection from "../components/pages/PageContentSection";

export default function Error() {
    const location = useLocation();

    return (
        <main>
            <PageHeader
                title="Error."
                subtitle="Something went wrong when trying to load this page."
            />

            <PageContentSection title="Page not found.">
                <p>
                    The page <code>{location.pathname}</code> doesn't exist. If
                    you think this is an issue, let me know!
                </p>
                <Button variant="contained" component={Link} to="/">
                    Back to Home
                </Button>
            </PageContentSection>
        </main>
    );
}
