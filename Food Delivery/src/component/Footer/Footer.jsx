import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/src/assets/foodLogo.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam
            minus, a fuga id aut odio nostrum, dolorem ea laboriosam tenetur
            praesentium. Vero quibusdam, blanditiis est pariatur accusantium qui
            quisquam?
          </p>
          <div className="footer-social-icons">
            <img src="/src/assets/facebook.png" alt="" />
            <img src="/src/assets/twitter.png" alt="" />
            <img src="/src/assets/linkedn.png" alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privaty Policty</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+ 123 44 44 44</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="">CopiRight 2024@ Tomato.com - AllRight Reserved</p>
    </div>
  );
}

export default Footer;
