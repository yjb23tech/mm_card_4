const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.song_cover_art}`} />
            <h3>{props.song_title}</h3>
            <div>
                <img src={`images/${props.album_icon}`} />
                <p>{props.album_name}</p>
            </div>
        </div>
    )
};

export default Card;