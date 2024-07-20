import React from "react";
import "./Header.css";
import shoppingbag from "../Images/Shopping bag.png";
import searchlight from "../Images/Search_light (4).png";
import userlight from "../Images/User_alt_light (2).png";
import basketlight from "../Images/Basket_alt_3_light (2).png";
import { useState } from "react";
import { useRef } from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="headerfirst">
        <div className="headerfirstcontainer">
          <div className="headerfirstcontaineritem">
            <img src={shoppingbag} className="imagefirstcontainer"></img>
            <h1 className="firstcontainerheading">babbaldeals</h1>
          </div>
        </div>
        <div className="headersecondcontainer">
          <img src={searchlight} className="headersecondimage" />
          <form>
            <input
              type="text"
              className="secondcontainerinput"
              placeholder="Search for product, brands and more"
            />
          </form>
        </div>
        <div className="headerthirdcontainer">
          <button className="headerthirdfirstitem">Home</button>
          <div className="headerthirdseconditem">
            <button className="headerthirdsecondbutton">
              <img src={userlight} className="userlighty" />
              <p className="ron">Login</p>
            </button>
          </div>
          <button className="headerthirdthirditem">
            <img src={basketlight} className="basket" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
