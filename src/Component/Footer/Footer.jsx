import React from "react";
import "../Footer/Footer.css";
import firstwhatspp from "../Images/WhatsApp Image 2024-05-03 at 05.06 1.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerfirst">
        <img src={firstwhatspp} className="footerfirstimage" />
        <p className="footerparagraph">Curate Your Own Happiness</p>
      </div>
      <div className="footersecond">
        <h1 className="footersecondh1">Help</h1>
        <div className="footersecondparagraph">
          <p className="footersecondp1">Help center</p>
          <p className="footersecondp1">Deliveries and return policies</p>
          <p className="footersecondp1">Terms & conditions</p>
          <p className="footersecondp1">FAQs</p>
        </div>
      </div>
      <div className="footerthird"></div>
      <div className="footerfourth"></div>
      <div className="footerfifth"></div>
      <div className="footersixth"></div>
    </div>
  );
};

export default Footer;
