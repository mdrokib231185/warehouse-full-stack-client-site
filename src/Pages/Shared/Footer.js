import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Our office</h4>
            <h1 className="list-unstyled">
              <li>Dinajpur</li>
              <li>Rangpur ,123 Streeet </li>
              <li>Dhaka Bangladesh</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>QUICK LINK</h4>
            <ui className="list-unstyled">
              <li>MAIN</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
              <li>SERVICES</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>NEWSLETTER</h4>
            <h5 >
              It is a long established fact that a reader will be distracted by
              the readable content
            </h5>
          </div>
        </div>
        <hr />
        <div className="row text-center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Motor Bike | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
