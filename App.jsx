import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div className="songs">
            <Card 
                song_cover_art="track_9_song_art.png" 
                song_title="Hell Of A Life"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Baroque Rap"
            />
            <Card
                song_cover_art="track_10_song_art.png" 
                song_title="Blame Game"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Baroque Rap"
            />
            <Card 
                song_cover_art="track_11_song_art.png" 
                song_title="Lost In The World"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Baroque Rap"
            />
            <Card 
                song_cover_art="track_12_song_art.png" 
                song_title="Who Will Survive In America?"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Baroque Rap"
            />
        </div>
    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

