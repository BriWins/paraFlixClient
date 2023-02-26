export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Release Year: </span>
                <span>{movie.release}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    )
}