import { useEffect, useState } from "react";
import React from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { SignupView } from "../../signup-view/signup-view";

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
       
/* Return user login form if no user is authenticated */
    if (!user) {
        return (
        <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token); 
        }} />
        <SignupView/>
        </>
    );
}

/* Displays all details for a single movie upon click*/
    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    }

/* No movies are returned if list is empty*/
    if (movies.length === 0) {
        return <div>The list is empty!</div>
    }

  return (
    <div>
        {movies.map((movie) => (
            <MovieCard 
            key={movie.id} 
            movie={movie}
            onMovieClick={(movie) => {
                setSelectedMovie(movie);
            }}
            />
        ))}
        <button onClick={() => {setUser(null); setToken(null); localStorage.clear()}}></button>
    </div>    
  );

};
       
