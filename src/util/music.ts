export interface PlaylistEmbedData {
    pageContentTitle: string;
    src: string;
}

export const currentFavorites: PlaylistEmbedData = {
    pageContentTitle: "What I'm listening to.",
    src: "https://embed.music.apple.com/us/playlist/current-favorites/pl.u-leyl2zYfMVW3VWM"
};

const playlistEmbeds: Array<PlaylistEmbedData> = [
    {
        pageContentTitle: "Current favorites.",
        src: "https://embed.music.apple.com/us/playlist/current-favorites/pl.u-leyl2zYfMVW3VWM"
    }
];

export default playlistEmbeds;
