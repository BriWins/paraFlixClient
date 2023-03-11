import { useEffect, useState } from "react";
import React from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col } from "react-bootstrap/";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
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
            const moviesFromAPI = movies.map((movie) => {
                return {
                    id: movie._id,
                    title: movie.Title,
                    description: movie.Description,
                    genre: movie.Genre,
                    director: movie.Director,
                    img: movie.ImagePath,
                    release: movie.ReleaseYear,
                    featured: movie.Featured
                }
            });
            setMovies(moviesFromAPI);
        });
        }, [token]);
       
  return (
    
    <BrowserRouter>
    <NavigationBar user={user} onLoggedOut={() => { setUser(null);}}/>
    <Row className="justify-content-md-center">
        <Routes>
        <Route 
            path="/signup"
            element={
                <>
                { user ? (
                    <Navigate to="/" />
                ): (
                    <Col md={5}>
                        <SignupView />
                    </Col>
                )}
                </>
            }
        />
        <Route 
            path="/login"
            element={
                <>
                { user ? (
                    <Navigate to="/" />
                ): (
                    <Col md={5}>
                        <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
                    </Col>
                )}
                </>
            }
        />
        <Route 
            path="/movies"
            element={
                <>
                {!user ? (
                    <Navigate to="/login" replace/>
                ): movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                ) : (
                    <Col md={8}>
                        <MovieView movies={movies} />
                    </Col>
                )}
            </>
            }
        />

        <Route 
            path="/"
            element = {
                <>
                {!user ? (
                    <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                ) : (
                    <>
                    {movies.map((movie) => (
                    <Col className="mb-4" key={movie.id} md={8}>
                        <MovieCard movie={movie} />
                    </Col>
                    ))}
                </>
                )}
                </>
            }
        />
        </Routes>
        </Row>
    </BrowserRouter>
  
  );

};
       
