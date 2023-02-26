import React from "react";
import { useState } from "react";

export const LoginView = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();  //prevents default behavior of the form which reloads the page

        const data = {
            Username: username,
            Password: password
        };

        fetch(`https://paraflix.herokuapp.com/login`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label> Username: 
                <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label> Password:
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};