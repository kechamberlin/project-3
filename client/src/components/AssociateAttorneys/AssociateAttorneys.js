import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import API from "../../utils/API";
import "./Associates.css";

function AssociateAttorneys() {

    const [attorneys, setAttorneys] = useState([]);

    useEffect(() => {
        API.getAttorneys().then(dbAttorneys => {
            console.log(dbAttorneys);
            setAttorneys(dbAttorneys);
        })
    }, []);

    return (
        <div>
            {attorneys.map(lawyer => {
                return (
                    <div>
                        <div>
                            <>
                            <Card bg="light" style={{ width: '18rem' }}>
                                <Card.Header>Associate Lawyer</Card.Header>
                                <Card.Img variant="top" src="" alt="generic picture" />
                                <Card.Body>
                                <Card.Title>{lawyer.name}</Card.Title>
                                <Card.Text>
                                    {lawyer.practice}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </>

                        </div>
                        
                        <Card>
                            <Card.Img variant="top" src="" alt="generic picture" />
                            <Card.Body>
                                <Card.Title>{lawyer.name}</Card.Title>
                                <Card.Text>
                                    {lawyer.name} is an accomplished {lawyer.practice} attorney with several years of experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </div>
                    );
                })}
        </div>
    )
}

export default AssociateAttorneys;
