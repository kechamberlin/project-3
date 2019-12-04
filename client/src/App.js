import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import AreasOfPractice from "./components/AreasOfPractice/AreasOfPractice";
import AssociateAttorneys from "./components/AssociateAttorneys/AssociateAttorneys";
import RecentCases from "./components/RecentCases/RecentCases";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";
import LawyerHeader from "./components/LawyerHeader/LawyerHeader";
import "./style.css";

function App() {
    useEffect(() => {
        API.getAttorneys().then(attorneys => {
            console.log(attorneys);
        })
    }, []);

    return (
        <div>
            <NavBar />
            <Jumbotron />
            <div className="content-container">
            <Card />
            <br></br>
            <AreasOfPractice />
            <br></br>
            <RecentCases />
            <br></br>
            <LawyerHeader />
            <AssociateAttorneys />
            <br></br>
            <Contact />
            <br></br>
            </div>
            <Footer />
        </div>
    );
}

export default App;