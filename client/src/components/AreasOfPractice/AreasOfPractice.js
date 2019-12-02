import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Accident from "./car-accident.jpeg";
import Academic from "./academic-law.jpeg";
import Addiction from "./addiction-law.jpg";
import Business from "./small-business.jpeg";
import Amusement from "./amusement-law.jpg";
import Administrative from "./administrative-law.jpeg";
import "./AreasOfPractice.css";


function AreasOfPractice() {
    return (
        <div>
            <Card.Header className="text-center practiceHeader textFont" as="h5"><strong>Areas of Practice</strong></Card.Header>
            <br></br>
            <CardDeck>
                
                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Accidents and Injuries</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Accident} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>Anthony will fight the insurance companies for you to secure
                            a settlement that fully compensates you for the personal injury
                            you suffered by the fault of another through:</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>Car Accidents</li>
                                <li>Motorcycle Accidents</li>
                                <li>Commercial Truck Accidents</li>
                                <li>Slip and Fall Accidents</li>
                                <li>Amusement Park Accidents</li>
                                <li>Premises Liability</li>
                                <li>Catastrophic Injuries</li>
                                <li>Dog Bites</li>
                                <li>Wrongful Death</li>
                                <li>Bad Faith Claims</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Education</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Academic} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>Anthony is a credentialed Substitute Teacher who taught
                            elementary and junior high school during law school and 
                            is now an Attorney practicing Education Law in Modesto and Stockton.
                            Anthony is committed to strengthening Public Education, 
                            Improving Student Success and Protecting Teachers and Staff by fighting for:</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>A Free and Appropriate Education in the Least Restrictive Environment</li>
                                <li>A Parent's Right to Participate</li>
                                <li>A student's right to be free from Bullying and Harassment</li>
                                <li>False accusations against Classified, Certified, and Administrative Personnel</li>
                                <li>Freedom of Speech in Public Education</li>
                                <li>Separation of Church and State in Public School</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Addiction</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Addiction} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>Anthony is personally committed to assisting alcoholic 
                            and chemically dependent and addicted persons to achieve 
                            sobriety and recovery, including physical, spiritual and legal.</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>DUI/DWI Defense</li>
                                <li>Drug Offenses</li>
                                <li>Theft Crimes</li>
                                <li>Driving on a Suspended License</li>
                                <li>Traffic Violations</li>
                                <li>Expungements</li>
                                <li>Parole Revocation</li>
                                <li>Juvenile Defense</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>

            <br></br>

            <CardDeck>
                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Family Business</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Business} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>With 30 years of practical operation  experience, 
                            Anthony wants to put his real world knowledge as 
                            a small business owner to help  you in your family business lawyer.</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>Sole Propreietorships</li>
                                <li>Partnerships</li>
                                <li>Corporations</li>
                                <li>LLC and LLP</li>
                                <li>Management Agreements</li>
                                <li>Partnership Agreements</li>
                                <li>Policy Manuals</li>
                                <li>Government Regulations</li>
                                <li>Contracts</li>
                                <li>Buy-Sell Agreements</li>
                                <li>Leases</li>
                                <li>Landlord and Tenant Issues</li>
                                <li>Exit Plans and Transitions</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Amusement Consulting</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Amusement} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>After 30 years of operating a "pocket" amusement park with multiple 
                            locations, Anthony is the one to help you plan, finance, design, locate, 
                            and to obtain governmental approval for your amusement park  or plan.</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>Writing Business Plans</li>
                                <li>Contract Writing and Review</li>
                                <li>Lease Agreements</li>
                                <li>Equipment Leases</li>
                                <li>Labor and Employee Relations</li>
                                <li>Government Relations</li>
                                <li>Regulatory Law</li>
                                <li>ADA Regulations</li>
                                <li>Wages and Hours Regulations</li>
                                <li>Amusement Ride Oversight</li>
                                <li>Corporations</li>
                                <li>Partnership Agreements</li>
                                <li>Management Agreements</li>
                                <li>Liability Prevention</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                <Card.Header as="h5" className="text-center textFont"><strong>Administration</strong></Card.Header>
                    <Card.Img className="practiceImage" variant="top" src={Administrative} />
                    <Card.Body>
                        <Card.Title className="cardTitle textFont">
                            <strong>The government regulates so much of our lives, from professional licensing 
                            to building permits to governmental benefits and more.  These governmental 
                            functions are what is called Administrative Law administered by the Executive 
                            Branch of the Federal, State, County, and City governments as well as  many other Special Districts. 
                            Administrative Law remedies must be exhausted before the matter may go to Court.  
                            Anthony is prepared to help you with your administrative law issues, too.</strong>
                        </Card.Title>
                        <Card.Text className="textFont">
                            <ul>
                                <li>Indian Tribes</li>
                                <li>EDD</li>
                                <li>Planning Commission</li>
                                <li>Air Pollution Districts</li>
                                <li>Professional Licensing</li>
                                <li>Consumer Oversight Boards</li>
                                <li>Governmental Benefits</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default AreasOfPractice;