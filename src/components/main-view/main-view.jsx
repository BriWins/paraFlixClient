import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        
        {
        id: 1,
        title:"The Sixth Sense",
        description:" A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png",
        release:"1999"
        },
        {
        id: 2,
        title:"The Sixth Sense",
        description:" A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png",
        release:"1999"
        },
        {
        id: 3,
        title:"The Sixth Sense",
        description:" A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png",
        release:"1999"
        }
    ]);

    const [ selectedMovie, setSelectedMovie ] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    }

  return (
    <div>
        {movies.map((movie) => (
            <MovieCard 
            key={movie.id} 
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
            }}
            />
        ))}
    </div>
  );
};
       
