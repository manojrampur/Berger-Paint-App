import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var firstName = this.props.data.firstName;
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home" style={{ position: "relative" }}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Image at the top left corner */}
        <img
          src={'https://d3f1ozwy5sre8y.cloudfront.net/2024-02/navbigimg.png?VersionId=lQFTRMXtRcYK_zH1EO7i2qKpRkKOd56f&format=webp&width=640&quality=75'}
          alt="Berger Logo"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100px", // Default size for larger screens
            height: "auto",
          }}
        />

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline" style={{ fontSize: "70px" }}>
              {name}
              <span style={{ color: "#d1002b" }}></span>
            </h1>
            <h3>
              <span>Bring your Home and Office to Lovely Colours</span>
            </h3>
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>

        {/* Media query for mobile screen sizes */}
        <style>
          {`
            @media only screen and (max-width: 700px) {
              img[alt="Berger Logo"] {
                width: 50px; /* Smaller size for mobile screens */
                top: 10px;
                left: 10px;
              }
              .banner-text h1 {
                font-size: 40px; /* Adjusted font size for mobile */
              }
            }
          `}
        </style>
      </header>
    );
  }
}

export default Header;
