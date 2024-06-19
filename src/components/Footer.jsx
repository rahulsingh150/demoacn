import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer-par">
      <div className="Footer-first-section">
        <div className="footer-logo-section">
          <img src="https://akucgs.vercel.app/images/logo.png" />
          <h1>
            आर्यभट्ट ज्ञान विश्वविद्यालय
            <br />
            Aryabhatta Knowledge University
          </h1>
        </div>
        <div className="footer-contact-section">
          <h1>Info line - 06122362270</h1>
          <h1>EMAIL :  akuacnn@gmail.com; info@acnn.akubihar.ac.in</h1>
        </div>
      </div>
      <div className="Footer-Second-section">
        <div className="Footer-Program-section">
          <h1>PROGRAMME</h1>
          <ul>
            <li>
              <Link to={"#"}>
              M.Sc. in Nano Science & Technology
              </Link>
            </li>
            <li>
              <Link to={"#"}>M.Tech. in Nano Science & Technology</Link>
            </li>
            <li>
              <Link to={"#"}>Ph.D. in Nano Science & Technology</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Social-section">
          <h1>Social Media</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/Centre-for-Geographical-Studies-Aku-Campus-Patna-101679478560391">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cgspatna1">Twitter</a>
            </li>
            <li>
              <a href="https://twitter.com/cgspatna1">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7277600.155241873!2d75.85494281808012!3d27.045465336231796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1714157026104!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
