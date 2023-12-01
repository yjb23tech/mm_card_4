const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.song_cover_art}`} />
        </div>
    )
};

export default Card;