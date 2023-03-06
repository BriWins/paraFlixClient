import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut}) => {
    return (
        <Navbar bg="light" expland="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"> paraFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};