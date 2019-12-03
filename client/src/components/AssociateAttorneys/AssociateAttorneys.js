import React, { useState } from "react";
import Card from "react-bootstrap/Card";


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
            {/* ??? How to input this information into a React-Bootstrap Card ??? */}
                {attorneys.map(lawyer => {
                    return (
                        <Card>
                            <Card.Img variant="top" src="" alt="generic picture" />
                            <Card.Body>
                                <Card.Title>{lawyer.name}</Card.Title>
                                <Card.Text>
                                    Practice={lawyer.practice}  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
        </div>
    )
}

export default AssociateAttorneys;