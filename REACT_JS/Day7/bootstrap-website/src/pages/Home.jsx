import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function Home() {
    return (
        <div className="text-center">
            <h1 className="text-danger">Home Page</h1>
            <Hero 
                textColor = "dark"
                paraSize = "font-size-4"
            />
            <h2 className="text-danger">Our Services</h2>
            <div className="row my-3">
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "ERP"
                    cardTitle = "Enterprise Resource Planning"
                    titleColor = "danger"
                    textColor = "dark"
                    cardText = "ERP is used to manage the enterprise resources in the efficient manner."
                    textSize = "font-size-2"
                    linkContent = "Read More"
                    buttonColor = "outline-dark"
                    />
                </div>
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "CRM"
                    cardTitle = "Customer Relationship Management"
                    titleColor = "danger"
                    textColor = "dark"
                    cardText = "CRM is a system that helps to manage interactions with customers and prospects to improve relationships."
                    textSize = "font-size-2"
                    linkContent = "Know More"
                    buttonColor = "outline-dark"
                    />
                </div>
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "Websites"
                    cardTitle = "Customized Websites"
                    titleColor = "danger"
                    textColor = "dark"
                    cardText = "We provide highly responsive website with all the industry standard design."
                    textSize = "font-size-2"
                    linkContent = "Request Quote"
                    buttonColor = "outline-dark"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;