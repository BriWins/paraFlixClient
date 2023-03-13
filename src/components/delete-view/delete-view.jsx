import { Button, Col } from "react-bootstrap";

export const DeleteView = ({ token, user }) => {
    const deleteAccount = () => {
        const warningMessage = () => {
            confirm("This action is permanent and irreversible, if you deactivate your account it cannot be undone. Would you still like to proceed?");

            warningMessage === false
            ? alert("Thank you for your continued service with paraFlix!")
            : fetch(`https://paraflix.herokuapp.com/users/${user.Username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            }).then((response) => {
                if (response.ok) {
                    alert("Account successfully deleted");
                    localStorage.clear();
                    window.location.reload();
                } else {
                    alert("Unable to deactivate account. Please try again!")
                }
            });
        };
    };

    return (
        <Col md={3} className="float-end">
        <div>
            <Button
                onClick={() => deleteAccount(user)}
                className="button-delete"
                variant="danger"
            >
                Deactivate 
            </Button>
        </div>
        </Col>
    );
};