import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import "./contact.css";

function Contact() {
    return (
        <div>
            <Card className="text-center">
                <Card.Header className="contactHeader contactFont"><strong>Contact</strong></Card.Header>
                <br></br>
                <Card.Body>
                    <Card.Title className="contactFont"><strong>Car Accident? DUI? Let AG Law Work for YOU!</strong></Card.Title>
                    <br></br>
                    <Card.Text>
                        <Form className="contact contactFont">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="First and Last Name" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="phone" placeholder="Phone Number" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="5" placeholder="Tell us what happened:" />
                            </Form.Group>
                            {['checkbox'].map(type => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`Sign up to receive updates, promotions, and more.`}
                                    />
                                </div>
                            ))}
                        </Form>
                    </Card.Text>
                    <Button className="contactButton contactFont" variant="warning"><strong>Submit</strong></Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Contact;