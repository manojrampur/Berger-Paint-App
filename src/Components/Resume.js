import React, { Component } from "react";
import "./Resume.css"; // Import custom CSS for card styles

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.generateCards(),
      popup: {
        visible: false,
        content: {},
      },
    };
  }

  // Generate cards with service names and images
  generateCards() {
    const services = [
      {
        title: "Home Painting Services",
        image: "https://picsum.photos/seed/image1/300/200.jpg",
        details: [
          "Interior Painting",
          "Exterior Painting",
          "Texture Painting",
          "Stencil Painting",
          "Wood Coating",
          "Metal Painting",
        ],
      },
      {
        title: "Water Proofing Solutions",
        image: "https://picsum.photos/seed/image2/300/200.jpg",
        details: [
          "Roof Waterproofing",
          "Bathroom Waterproofing",
          "Basement Waterproofing",
          "Wall Waterproofing",
        ],
      },
      {
        title: "Interior Design Services",
        image: "https://picsum.photos/seed/image3/300/200.jpg",
        details: ["Colour Consultancy", "Interior Design Consultation"],
      },
      {
        title: "Express Painting",
        image: "https://picsum.photos/seed/image4/300/200.jpg",
        details: ["Quick and efficient painting service using advanced tools"],
      },
      {
        title: "Project Management Services",
        image: "https://picsum.photos/seed/image5/300/200.jpg",
        details: [
          "Large-Scale Projects",
          "Professional management services for large-scale projects",
        ],
      },
      {
        title: "Sanitization Services",
        image: "https://picsum.photos/seed/image6/300/200.jpg",
        details: [
          "Sanitization of Premises",
          "Disinfection and sanitization services for homes and offices",
        ],
      },
      {
        title: "Free Delivery All Over Bagalkot",
        image: "https://picsum.photos/seed/image8/300/200.jpg",
        details: [
          "Automotive Coatings",
          "Protective Coatings",
          "High-performance industrial coatings",
        ],
      },
      {
        title: "Customer Care Support",
        image: "https://picsum.photos/seed/image8/300/200.jpg",
        details: [
          "Automotive Coatings",
          "Protective Coatings",
          "High-performance industrial coatings",
        ],
      },
    ];

    return services.map((service, index) => ({
      id: index,
      ...service,
    }));
  }

  // Open popup with selected card details
  openPopup = (card) => {
    this.setState({
      popup: {
        visible: true,
        content: card,
      },
    });
  };

  // Close popup
  closePopup = () => {
    this.setState({
      popup: {
        visible: false,
        content: {},
      },
    });
  };

  render() {
    const { popup } = this.state;

    return (
      <section id="services">
        {/* Cards Section */}
        <div className="row cards">
          <div className="twelve columns">
            <h1>
              <span>Services</span>
            </h1>
            <div className="card-container">
              {this.state.cards.map((card) => (
                <div
                  key={card.id}
                  className="card"
                  onClick={() => this.openPopup(card)}
                >
                  <img src={card.image} alt={card.title} />
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup */}
        {popup.visible && (
          <div className="popup-overlay" onClick={this.closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="popup-close" onClick={this.closePopup}>
                &times;
              </span>
              <img src={popup.content.image} alt={popup.content.title} />
              <h3 style={{fontSize: '10px'}}>{popup.content.title}</h3>
              <ul>
                {popup.content.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Resume;
