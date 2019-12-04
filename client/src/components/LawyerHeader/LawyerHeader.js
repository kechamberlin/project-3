import React from "react";
import Card from "react-bootstrap/Card";
import "./LawyerHeader.css";

function LawyerHeader() {
    return (
        <Card>
            <Card.Header className="lawyerHeader">
                <strong>Associate Attorneys</strong>
            </Card.Header>
        </Card>
    );
}

export default LawyerHeader;