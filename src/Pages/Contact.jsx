import React from "react";
import "../Styles/Contact.css";
function Contact() {
  return (
    <div className="Contact-box">
      <div>
        <p className="Heading-contact">Contact Us</p>
        <div className="Text-Box">
          <div>
            <h4>First Name</h4>
            <input type="text" name="Name" id="" placeholder="First Name"/>
          </div>
          <div>
            <h4>Last Name</h4>
            <input type="text" name="Name" id="" placeholder="Last Name"/>
          </div>
        </div>
        <div className="Text-Box">
          <div>
            <h4>Email</h4>
            <input type="email" name="Name" id="" placeholder="Email"/>
          </div>
          <div>
            <h4>Phone Number</h4>
            <input type="number" name="Name" id="" placeholder="Phone Number"/>
          </div>
        </div>

        <div className="textarea-box">
          <h4>Your Message</h4>
          <input type="text" name="" id="" />
        </div>
        <button className="btn-submit">Submit</button>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7369481.266118341!2d85.134929!3d25.592302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1716946990588!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
