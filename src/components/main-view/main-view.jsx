import { useEffect, useState } from "react";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState(null);
    const [ user, setUser ] = useState(null);

/* Retrieves database data through deployed app*/
    useEffect(() => {
        fetch(`https://paraflix.herokuapp.com/movies`)
        .then((response) => response.json())
        .then((data) => {
            const moviesFromApi = data.map((movie) => {
                return {
                    id: movie._id,
                    title: movie.Title,
                    image: movie.ImagePath,
                    description: movie.Description
                }
            });
            setMovies(moviesFromApi);
        });
    }, []);
       
/* Return user login form if no user is authenticated */
    if (!user) {
        return <LoginView onLoggedIn={(user) => setUser(user)}/>
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
    </div>
  );
};
       
