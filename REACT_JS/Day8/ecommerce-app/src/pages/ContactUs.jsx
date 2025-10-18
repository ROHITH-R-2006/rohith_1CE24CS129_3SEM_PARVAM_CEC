import React from "react";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";

function ContactUs(){
  return (
    <div id="contact" className="py-5 ">
      <div className="container">
        <h2 className="mb-3 section-title text-secondary ">Get In Touch</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label ">Full name</label>
                <input className="form-control" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="btn btn-outline-secondary">Send message</button>
            </form>
          </div>
          <div className="col-md-6">
          <h5 className="text-center">Visit Us</h5>
          <div className="" >
            <p className="text-dark text-center">ZEXPR Premium Ecom</p>
            <p className="text-dark text-center">Mon–Sat: 10:30am – 11:00pm</p>
            <p className="text-dark text-center">Phone:+91 9987231009</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default ContactUs;
