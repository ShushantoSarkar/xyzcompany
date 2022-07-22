import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";

function Home() {
  return (
    <div>
      <div className="component1">
        <div className="component1Text">
          <p>LOREM IPSUM</p>
          <h1>
            <span>LOREM IPSUM</span> IS SIMPLY DUMMY TEXT OF THE PRINTING
          </h1>
          <div className="component1TextFlex">
            <Link to="./Other/Other.jsx" className="component1Button LinkStyle">
              OUR SERVICES
            </Link>
            <div className="callButton">
              <img src="../Data/Group 105.svg" alt="" />
              <p>+1-00000-00000</p>
            </div>
          </div>
        </div>
        <div className="component1Img">
          <img src="../Data/Group 108.png" alt="" />
        </div>
      </div>

      <div className="component2 slideShow">
        <Slideshow />
      </div>

      <div className="component3">
        <img src="../Data/Group 9.jpg" alt="" />
        <div className="component3Text">
          <h1>
            THERE ARE MANY <span>VARIATIONS</span> OF PASSAGsES OF{" "}
            <span>LOREM IPSUM</span> AVAILABLE
          </h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.
          </p>
        </div>
      </div>

      <div className="component5">
        <h1>
          THERE ARE MANY <span>VARIATIONS</span> OF PASSAGES OF{" "}
          <span>LOREM IPSUM</span> AVAILABLE
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.
        </p>
      </div>

      <div className="component6">
        <div className="component6Background"></div>
        <form action="">
          <label htmlFor="Name">Name</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="Email">Email</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="Message">Message</label>
          <br />
          <input type="text" />
          <br />
          <input type="submit" />
        </form>
        <div className="component6Text">
          <h3>SIMPLY LOREM IPSUM IS DUMMY TEXT </h3>
          <div className="location component6TextItem">
            <img src="../Data/Group 109.svg" alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="call component6TextItem">
            <img src="../Data/Group 110.svg" alt="" />
            <p>+1-00000-00000</p>
          </div>
          <div className="email component6TextItem">
            <img src="../Data/Group 111.svg" alt="" />
            <p>email@domain.com</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerComponent1">
          <img src="../Data/Group 100.svg" alt="logo" className="desktop" />
          <img src="../Data/Logo.png" alt="" className="mobile footerLogo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="footerComponent2">
          <h4>QUICK LINKS</h4>
          <Link to="/" className="LinkStyle">
            About Us
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Services
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Blog
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Contact
          </Link>
        </div>
        <div className="footerComponent3">
          <h4>SERVICES</h4>
          <Link to="/" className="LinkStyle">
            Service 1
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Service 2
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Service 3
          </Link>
          <br />
          <Link to="/" className="LinkStyle">
            Service 4
          </Link>
        </div>
        <div className="footerComponent4">
          <h4>Follow us</h4>
          <a href="">
            <img src="../Data/Group 112.svg" alt="" />
          </a>
          <a href="">
            <img src="../Data/Group 113.svg" alt="" />
          </a>
          <a href="">
            <img src="../Data/Group 114.svg" alt="" />
          </a>
          <a href="">
            <img src="../Data/Group 115.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright © xyzcompany All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Home;
