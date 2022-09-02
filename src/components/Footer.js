import "./FooterStyles.css";

import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Mueng Chiang Mai,</p>
              <p>Chiang Mai</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              062 373 8214
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              inrongpon.phanupong2@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Phanupong, self-learner front-end developer. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
            <Link to="https://web.facebook.com/pphanupong.inrongpon/"><FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></Link>
          
          <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
          <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
