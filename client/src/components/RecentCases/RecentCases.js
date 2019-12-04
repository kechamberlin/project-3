import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";
import Injury from "./hurt-leg.jpg";
import Sidewalk from "./icy-sidewalk.jpg";
import Accident from "./rear-end-accident.jpg";
import "./RecentCases.css";

function RecentCases() {
    return (
        <div>
            <Card.Header as="h5" className="text-center caseHeader">
                <strong>Recent Cases</strong>
            </Card.Header>

            <br></br>

            <Carousel className="caseText">

                <Carousel.Item>
                    <img
                        className="d-block w-100 caseImages"
                        src={Injury}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caseText">
                        <h1><strong>$150,000</strong></h1>
                        <p>for a driver who broke her leg in an auto collision.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 caseImages"
                        src={Sidewalk}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caseText">
                        <h1><strong>$350,000</strong></h1>
                        <p>
                            for a pedestrian who slipped on a sidewalk at her apartment after the
                            landlord left the sprinklers on at night in below freezing temperatures.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 caseImages"
                        src={Accident}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caseText">
                        <h1><strong>$150,000</strong></h1>
                        <p>
                            for a driver who was rear-ended while stopped at a red light on the SR-99 offramp.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default RecentCases;