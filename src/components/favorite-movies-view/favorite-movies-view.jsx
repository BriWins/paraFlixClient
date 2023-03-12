import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Row, Col, Card } from 'react-bootstrap';

export const FavoriteMoviesView = ({ userFavMovies, user}) => {

    const favoriteMovies = userFavMovies.map((movie) => {
        return {
            id: movie._id,
            title: movie.Title,
            description: movie.Description,
            genre: movie.Genre,
            director: movie.Director,
            img: movie.ImagePath,
            release: movie.ReleaseYear,
            featured: movie.Featured
        };
    });

    if (favoriteMovies.length === 0) {
        return <Col>You have not added any favorite movies yet!</Col>;
    }

    return (
        <Card>
            <Card.Title>
                <Card.Body>
                    <Row>
                        {favoriteMovies.map((movie) => (
                            <Col key={movie.id}>
                                <MovieCard movie={movie} user={user}/>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card.Title>
        </Card>
    );
};