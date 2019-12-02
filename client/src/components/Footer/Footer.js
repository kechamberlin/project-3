import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            {/* Social Media Links */}
            <div className="footerSocial">
                <p>
                    <a href="https://www.facebook.com/AGLAW209/" class="fa fa-facebook"> </a>
                    <span> </span>
                    <a href="https://twitter.com/aglawmodesto" class="fa fa-twitter"> </a>
                </p>
            </div>

            {/* Footer */}
            <div className="footer">
                <p>
                    © Copyright 2019 AG Law Modesto and Stockton - All Rights Reserved.
                </p>
                <p>
                    Disclaimer: Prior results do not guarantee similar future outcomes.
                </p>
                
            </div>
        </div>
    );
}

export default Footer;