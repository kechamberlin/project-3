import React from "react";
import Card from "react-bootstrap/Card";
import Portrait from "./anthony-portrait.jpg";
import "./Card.css";

function MyCard() {
    return (
        <Card className="text-center">
        <Card.Header className="header" as="h5"><strong>About Me</strong></Card.Header>
        <Card.Body>
            <Card.Title>Anthony C. Gonsalves, Esquire</Card.Title>
            <Card.Text>
            <img className="portrait" src={Portrait} alt="Portrait of Anthony" />
            <p className="cardText">Anthony was born and raised in Modesto where he attended local public schools including Prescott Junior High School, Grace M. Davis High School and Modesto Junior College.
                Anthony graduated from UC Berkeley with a BA in Political Science.
                After graduating in 1989, Anthony married, raised two children, Andrew and Aleah, and founded and operated FUNWORKS! Family Fun Company.
            </p>
            <p className="cardText">Anthony is  a fifth generation Modestan whose family has lived in Stanislaus County since the 1850s.
                Anthony's great-grandfather, Edgar Annear, served as the Stanislaus County Civil Engineer and was charged with engineering the historic Modesto 9th Street Lion Bridge.
                Anthony's great-grandmother, Margeret Annear, was the first female Superintendent of Schools in California when she became the Superintendent of Stanislaus County Office of Education.
                Anthony's father Manuel Gonsalves, was one of the first totally blind persons to teach sighted students in a public school in California, where he taught government and history at Modesto High School from 1963 to 2000.
            </p>
            <p className="cardText">In 1989, Anthony joined efforts with a local businessman to create, develop and operate a privately owned amusement park that came to be known as FUNWORKS! Family Fun Company whose stated purpose was to provide clean wholesome family fun for families of the Central Valley.
                Between 1989 and 2013, Anthony served as a shareholder, director, Vice-President, and General Manager of FUNWORKS!, were he hired, trained, mentored and coached thousands of entry level employees to provide a quality customer experience to hundreds of thousands of families that visited one of the FUNWORKS! locations each year.
                Anthony was even named International Manager of the Year for Putt-Putt Golf Courses of America in 1997.
                Anthony sold his interest in FUNWORKS! in 2013 to fulfill his childhood dream of becoming a lawyer.
            </p>
            </Card.Text>
        </Card.Body>
    </Card>
    );
}

export default MyCard;