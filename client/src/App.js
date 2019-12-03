import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import AreasOfPractice from "./components/AreasOfPractice/AreasOfPractice";
// Import Associate Attorneys and its MongoDB
import RecentCases from "./components/RecentCases/RecentCases";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";
import "./style.css";

function App() {
    useEffect(() => {
        API.getAttorneys().then(attorneys => {
            console.log(attorneys);
        })
    }, [])
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <div className="content-container">
            <Card />
            <br></br>
            <AreasOfPractice />
            <br></br>
            {/* Associate Attornyes will go here */}
            <RecentCases />
            <br></br>
            <Contact />
            <br></br>
            </div>
            <Footer />
        </div>
    );
}

export default App;