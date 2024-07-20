import React from "react";
import "./Hero.css";
import shoes from "../Images/s-l1600-Photoroom 1.png";
import rectangle from "../Images/Rectangle 4162.png";
import Footer from "../Footer/Footer";
import one from "../Images/01.png";
import airmax from "../Images/air-max-plus-shoes-Z0D37G-Photoroom 2.png";
import airjacket from "../Images/file 2.png";
import tshirt from "../Images/canva-black-white-typography-motivation-tshirt-WKRZLU21i2c-Photoroom 1.png";
import purse from "../Images/leather-purse-dark-brown-bag-tumbled-saddleback__59270-Photoroom 1.png";
import jacket from "../Images/s-l1200 (1)-Photoroom 1.png";
import like from "../Images/Group 60.png";
import apple from "../Images/Apple-Watch-Ultra-2-Alt-Gear-Photoroom 1.png";
import airpod from "../Images/istockphoto-1204039347-612x612-Photoroom 1.png";
import redjacket from "../Images/file 3.png";
import schoolbag from "../Images/high-quality-designer-trending-waterproof-school-bag-for-girls-original-imagyhy3k6zkrhhu-Photoroom 1.png";
import laptop from "../Images/file (1) 1 (1).png";
import vape from "../Images/elfbar-1024x763-Photoroom 1.png";
import tv from "../Images/samsung-lf27t350fhnxza-monitor-Photoroom 1.png";
const Hero = () => {
  return (
    <div className="homeelement">
      <div className="homeelementfirstcontainer">
        <div className="homefirst">
          <p className="homefirstlineone">25% OFF Holi Super Sale</p>
          <p className="homefirstlinetwo">
            Elevate Your Shopping Experience Today !
          </p>
          <p className="homefirstlinethree">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button className="homefirstbutton">Explore Now</button>
          <div className="homefirstimagecontainer">
            <div className="rectangleimg">
              <img src={one} className="oneimg" />
              <img src={shoes} className="shoesimg" />
              <button className="likeimg">
                <img src={like} className="likeimgs" />
              </button>
            </div>
            <div className="rectangleimg2">
              <img src={jacket} className="jacketimg" />
              <div className="homesecondcontainer">
                <button className="likeimg">
                  <img src={like} className="likeimgs" />
                </button>
                <img src={one} className="oneimgs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reason">
        <div className="homesecondpart">
          <div className="homesecondfirst">
            <div className="island">
              <p className="homesecondheadings">New Arrivals</p>
              <p className="homesecondparagraph">
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </p>
              <div className="homesecondpartimage">
                <div className="imagesofhomesecond">
                  <img src={apple} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={schoolbag} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={vape} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={airpod} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
              </div>
              <div className="homesecondpartimage2">
                <div className="imagesofhomesecond">
                  <img src={airjacket} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={tshirt} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={purse} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
                <div className="imagesofhomesecond">
                  {" "}
                  <img src={airmax} className="imageofapple" />
                  <p className="nameproduct">Watch</p>
                  <p className="priceproduct">Rs. 999</p>
                  <p className="slashprice">
                    <s>Rs.1000</s> <span className="rs">-50%</span>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homethird">
        <h1 className="homethirdheading">Popular Categories</h1>
        <div className="homethirdimages">
          <div className="imagethird">
            <img src={vape} className="thirdimage" />
            <p className="headingimagethird">Vape</p>
          </div>
          <div className="imagethird">
            <img src={airmax} className="thirdimage" />
            <p className="headingimagethird">Airmax</p>
          </div>
          <div className="imagethird">
            <img src={airpod} className="thirdimage" />
            <p className="headingimagethird">Airpod</p>
          </div>
          <div className="imagethird">
            <img src={jacket} className="thirdimage" />
            <p className="headingimagethird">Jacket</p>
          </div>
          <div className="imagethird">
            <img src={apple} className="thirdimage" />
            <p className="headingimagethird">Apple</p>
          </div>
        </div>
      </div>
      <div className="homefourth">
        <div className="homefourthcontainer">
          <div className="homefourthparagraph">
            <h1 className="homefourthheading">Mega Sales Extravaganza!</h1>
            <p className="homefourthparagraphs">
              Unbelievable Deals and Massive Discounts Awaits You At Our
              Babaldeals
            </p>
          </div>
          <div className="homefourthpromo">
            <p className="promo">Promo Code</p>
            <p className="dashain">Dashaindeal</p>
            <button className="shipping">Start Shipping</button>
          </div>
          <img src={laptop} classname="laptopfourth" />
        </div>
      </div>
      <div className="homefifth">
        <div className="homefifthfirst">
          <div className="homefifthfirstparagraph">
            <h1 className="homefifthheading">
              Summer Polyfiber Deneim Jackets 
            </h1>
            <p className="homefifthparagraphs">
              Get Ready for Unbeatable Deals and Discounts That Will Leave You
              Amazed
            </p>
            <button className="twenty">Upto 15% Off</button>
          </div>
          <div className="homefifthfirstimage">
            <img src={redjacket} className="redjacket" />
          </div>
        </div>
        <div className="homefifthsecond">
          <div className="homefifthfirstparagraph">
            <h1 className="homefifthheading">
              Summer Polyfiber Deneim Jackets 
            </h1>
            <p className="homefifthparagraphs">
              Get Ready for Unbeatable Deals and Discounts That Will Leave You
              Amazed
            </p>
            <button className="twenty">Upto 15% Off</button>
          </div>
          <div className="homefifthfirstimage">
            <img src={tv} className="redjacket" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
