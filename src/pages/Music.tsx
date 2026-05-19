import Typography from "@mui/material/Typography";

import PageHeader from "@/components/pages/PageHeader";
import PageContentSection from "@/components/pages/PageContentSection";
import CurrentFavoriteMusic from "@/components/misc/CurrentFavoriteMusic";

export default function Music() {
    return (
        <main>
            <PageHeader
                title="Music."
                subtitle="More of what I'm listening to."
            />

            <PageContentSection title="What I'm listening to.">
                <CurrentFavoriteMusic />
            </PageContentSection>
        </main>
    );
}
