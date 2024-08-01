import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-content">
          <h1 className="title">
          Share and Support:
           
            Food for All, Individuals and Organizations
          </h1>
          <p className="description">
          Join ShareMeal to connect surplus food with those in need. Individuals and organizations alike can easily share and collect meals, helping to reduce food waste and support the community. Start making a difference today!
          </p>
          <div className="button-group">
            <button className="btn primary-btn">Donate</button>
            <Link to = "/homepage">
            <button className="btn secondary-btn">Collect</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            className="hero-image"
            alt="hero"
            src="/images/heroImage.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
