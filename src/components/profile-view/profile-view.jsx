import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FavoriteMoviesView } from "../favorite-movies-view/favorite-movies-view";
import { UserView } from "../user-view/user-view";


export const ProfileView = ({ user }) => {
const storedToken = localStorage.getItem("token");
const [token] = useState( storedToken ? storedToken : null );
const [favoriteMovies, setFavoriteMovies ] = useState([]);

const getUser = (token) => {
    fetch(`https://paraflix.herokuapp.com/users/${user.Username}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
    })
    .then((response) => response.json())
    .then((response) => {
        setFavoriteMovies(response.FavoriteMovies);
    });
    };

    useEffect(() => {
        getUser(token);
    }, []);

    return (
        <Container>
            <UserView token={token} user={user} />
            <FavoriteMoviesView userFavMovies={favoriteMovies} />
        </Container>
    );
};