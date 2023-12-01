import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Above It All</h1>
            <Card 
                song_cover_art="track_10_song_art.png" 
                song_title="Blame Game"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
            />
        </div>
    )
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

