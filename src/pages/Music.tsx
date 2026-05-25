import PageHeader from "@/components/pages/PageHeader";
import PageContentSection from "@/components/pages/PageContentSection";
import PlaylistEmbed from "@/components/misc/PlaylistEmbed";

import playlistEmbeds from "@/util/music";

/**
 * showcase for my (questionable) music taste
 */
export default function Music() {
    return (
        <main>
            <PageHeader
                title="Music."
                subtitle="Playlists, albums, and artists that I'm into."
            />

            {playlistEmbeds.map((playlist, idx) => (
                <PageContentSection
                    key={playlist.pageContentTitle}
                    title={playlist.pageContentTitle}
                    rowReverse={idx % 2 === 1}
                    description={playlist.pageContnetDescription}
                >
                    <PlaylistEmbed src={playlist.src} />
                </PageContentSection>
            ))}
        </main>
    );
}
