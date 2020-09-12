import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              phebeyawson.com
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a href="https://www.amazon.com/She-Cried-Wolf-Phebe-Yawson-ebook/dp/B07WVQGFXJ/ref=sr_1_1?crid=125VXZBNBWW1&keywords=she+cried+wolf+phebe+yawson&qid=1568994090&sprefix=she+cried+wolf+p%2Caps%2C136&sr=8-1" rel="noopener noreferrer"
                  target="_blank" className="page-scroll">
                  Buy Now
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  She Cried Wolf
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About Me
                </a>

              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Social
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
