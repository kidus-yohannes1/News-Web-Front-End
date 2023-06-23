import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";
interface FooterProps {}
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-body-1">
          <h3>Hagere News</h3>
          <p>
            Hagere News is a leading news site that operates in Ethiopia,
            providing up-to-date news and information on a wide range of topics,
            including politics, business, sports, entertainment, and more.
          </p>
        </div>
        <div className="footer-body-2">
          <ul>
            <li>
              {" "}
              <h3>About</h3>
            </li>
            <li>
              {" "}
              <h3>Contact us</h3>
            </li>
            <li>
              <h3>Donate Hagere news</h3>
            </li>
          </ul>
        </div>
        <div className="footer-body-3">
          <h3>
            <PhoneOutlined /> 0943304205
          </h3>
          <h3>
            <MailOutlined /> hagere.news@gmail.com
          </h3>
          <h3>
            <HomeOutlined /> 6 killo,Addis Ababa,Ethiopia
          </h3>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>Copyright © 2023 kidus Yohannes. All rights reserved.</h3>
      </div>
    </div>
  );
};
export default Footer;
