import { useState } from "react";
import { Button, Card, Col, Row, Collapse } from "react-bootstrap";

export const UserView = ({ user }) => {
const [ editProfile, setEditProfile ] = useState(false);

const dateOfBirth = new Date(user.Birthdate);

const dobFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
});

const formattedBirthdate = dobFormatter.format(dateOfBirth);

return (
    <Card border="light" className="bg-light bg-opacity-75">
        <Card.Body className="p-3 p-md-5">
            <Card.Title>
                <Row className="d-flex flex-column flex-lg-row ms-2 text-lg-center mt-lg-3 mt-3">
                    <Col>Username: {user.Username} </Col>
                    <Col>Email: {user.Email}</Col>
                    <Col>Birthdate: {formattedBirthdate} </Col>
                    <Col> 
                    <Button
                        onClick={() => setEditProfile(!editProfile)}
                        aria-controls="collapse-form"
                        aria-expanded={editProfile}
                        variant="secondary"
                        className="text-shite ms-4"
                    >
                    Edit Profile
                    </Button>
                    </Col>
                </Row>
            </Card.Title>
            <Collapse in={open}>
                <div id="collapse-form"> 
                <UpdateView user={user} />
                </div>
            </Collapse>
        </Card.Body>
        <Card.Footer>
            <DeleteView user={user} />
        </Card.Footer>
    </Card>
    );

};