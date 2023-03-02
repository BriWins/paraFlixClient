import { useState } from "react";

export const SignupView = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const handleSubmit = (event) => {};

    return (
        <form onSubmit={handleSubmit}>
        <label> Username: 
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </label>
        <label> Password:
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </label>
        <label> Email:
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </label>
        <label> Password:
            <input type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required />
        </label>
        <button type="submit">Submit</button>
    </form>
    );
};