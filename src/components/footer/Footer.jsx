import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <ul className="flex terms">
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>
              © 2023 FIDIJA. All Rights Reserved. The videos and shows featured
              on this platform are trademarks of FIDIJA Inc. All related images
              and content are the exclusive property of FIDIJA Inc. Duplication
              and reproduction of this material are strictly prohibited. All
              rights reserved.
            </p>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <div className="box">
            <h3>Fidija App</h3>
            <div className="img flexSB">
              <img
                src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"
                alt="apple"
              />
              <span>App Store</span>
              <img
                src="https://img.icons8.com/fluency/48/000000/google-play.png"
                alt="google"
              />
              <span>Google Play Store</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
