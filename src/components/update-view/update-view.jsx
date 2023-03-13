import { useState } from "react";
import { Button, Card, CardGroup, Col, Form, Row } from "react-bootstrap";

export const UpdateView = ({ user }) => {
    const storedToken = localStorage.getItem("token");
    const [ token ] = useState( storedToken ? storedToken : null);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthdate: birthdate
        };

        console.log(data);
        const updateUser = await fetch(`https://paraflix.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
        },
    }
);
    const response = await updateUser.json();
    console.log(response);
    if (response) {
        alert("Account successfully updated!");
        window.location.reload();
    } else {
        alert("Account update was not successful. Please try again!");
        window.location.reload();
        }
    };

    rturn (
        <Row>
            <Col md={4}>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <h2> {user.Username}'s Profile Information</h2>
                        <p> Please update appropriate profile information </p>
                        <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mt-3">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            minLength={5}
                            placeholder="Input your new username"
                            />
                            <Form.Text>
                                Username must be at least five characters long!
                            </Form.Text>{""}
                            </Form.Group>

                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Input your new password"
                            />
                            <Form.Text>
                                Password must be at least eight characters long!
                            </Form.Text>{""}
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Input your new email"
                            />
                             <Form.Text>
                                We'll never share your email with anyone else.
                            </Form.Text>{""}
                        </Form.Group>

                        <Form.Group controlId="formBirthdate" className="mt-3">
                            <Form.Label>Birthday: </Form.Label>
                            <Form.Control
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                            <Button variant="primary" type="submit" className="mt-3"> Update Profile</Button>
                            </Col>
                        </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </CardGroup>
            </Col>
        </Row>
    );
};