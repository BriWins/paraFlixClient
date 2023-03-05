import { useEffect, useState } from "react";
import React from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../../signup-view/signup-view";
import { Row, Col } from "react-bootstrap/";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState(null);
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(null);


/* Retrieves database data through deployed app*/
    useEffect(() => {
        if (!token) {
            return;
        }

        fetch(`https://paraflix.herokuapp.com/movies`,{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then((movies) => {
            setMovies(movies);
            });
        }, [token]);
       
  return (
    <Row className="justify-content-md-center">
        { !user ? (
        <Col md={5} >
            <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token); 
            }} />
            <SignupView />
        </Col>
        ) : selectedMovie ? (
            <Col md={8} >
                <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
            </Col>
        ) : movies.length === 0 ? (
            <div>The list is empty!</div>
        ) : (
        <>
           {movies.map((movie) => (
            <Col  className="mb-5" key={movie.id} md={3}>
                <MovieCard movie={movie} onMovieClick={(movie) => { setSelectedMovie(movie); }} />
            </Col>
          ))}
      </>
    )}
     
        <button onClick={() => {setUser(null); setToken(null); localStorage.clear()}}></button>
    </Row>    
  );

};
       
