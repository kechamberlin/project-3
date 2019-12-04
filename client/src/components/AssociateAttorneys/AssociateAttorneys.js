import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import API from "../../utils/API";
import Picture from "./generic-profile-picture.jpg";
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
                        {/* {lawyer.name}
                        {lawyer.practice} */}

                        <Card className="text-center">
                            <Card.Title>{lawyer.name}</Card.Title>
                            <Card.Img className="generic-picture" variant="center" src={Picture} alt="generic picture" />
                            <Card.Body>
                                <Card.Text>
                                    {lawyer.name} is an accomplished {lawyer.practice} attorney with several years of experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                            <br></br>
                    </div>
                    );
                })}
        </div>
    )
}

export default AssociateAttorneys;
