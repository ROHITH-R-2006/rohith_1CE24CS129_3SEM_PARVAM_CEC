import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function ContactUs() {
    const handleCall = () => {
        alert("Calling ParvaM Support Team...");
    };
    return (
        <div className="text-center">
            <h1 className="text-success">Contact Us Page</h1>
            <Hero 
            title = "Welcome to Contact Us Page"
            buttonText = "Call Us"
            buttonColor = "success"
            onButtonClick = {handleCall}
            paraSize = "font-size-3"
            />
            <div className="row my-3">
                <div className="col-md-4">
                    <Cards
                    cardHeading = "CONTACT NUMBER"
                    cardTitle = "Here's what you are looking for"
                    titleColor = "success"
                    textColor = "dark"
                    cardText = "Contact Number : +919087658721."
                    textSize = "font-size-2"
                    linkContent = "Read More"
                    buttonColor = "outline-primary"
                    />
                </div>
                <div className="col-md-4">
                    <Cards
                    cardHeading = "EMAIL-ADDRESS"
                    cardTitle = "Here's what you are looking for"
                    titleColor = "success"
                    textColor = "dark"
                    cardText = "Email-Address : rohith.r@gmail.com."
                    textSize = "font-size-2"
                    linkContent = "Read More"
                    buttonColor = "outline-primary"
                    />
                </div>
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "SOCIAL APPS"
                    cardTitle = "Here's what you are looking for"
                    titleColor = "success"
                    textColor = "dark"
                    cardText = "You can reach out by following us on nav@cec."
                    textSize = "font-size-2"
                    linkContent = "Read More"
                    buttonColor = "outline-primary"
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;