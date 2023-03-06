import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./movie-view.scss";

export const MovieView = ({ movies }) => {
const { movieId } = useParams();

const movie = movies.find((m) => m.id === movieId)

    return (
        <Card className="w-100">
        <Card.Img variant="top" src={movie.image}/>
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Link to={`/`}>
                <Button className="back-button" style={{cursor: "pointer"}}>Back</Button>
            </Link>
        </Card.Body>
    </Card>
    )
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};