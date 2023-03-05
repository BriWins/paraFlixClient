import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <Card className="w-100">
        <Card.Img variant="top" src={movie.image}/>
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Button onClick={onBackClick} 
            className="back-button"
            style={{cursor: "pointer"}}>Back</Button>
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