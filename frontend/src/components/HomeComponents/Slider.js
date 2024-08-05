// src/components/Slider.js
import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: '/images/1.jpg', title: 'You are Magical', description: 'I was thinking about you today and couldn\'t help but smile. Your presence has a way of making everything better.' },
    { url: '/images/2.jpg', title: '"Your Eyes..."', description: 'Are you a magician? Because whenever I look at you, everyone else disappears. ✨' },
    { url: '/images/3.jpg', title: '"You are Always in my mind"', description: 'You\'re like a fine wine – you get better with time. 😍' },
    { url: '/images/4.jpg', title: '"When I Lost I find You..."', description: 'Do you have a map? Because I just keep getting lost in your eyes every time I see you. 🌟' },
    { url: '/images/5.jpg', title: '"You are cute .."', description: 'If you were a cat, you\'d purr-fectly steal my heart.' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <ul className="slider">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="slider-content">
              <h2 className="slider-title">{slide.title}</h2>
              <p className="slider-description">{slide.description}</p>
              <button className="slider-button">Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="slider-nav">
        <button className="slider-btn prev" onClick={prevSlide}>‹</button>
        <button className="slider-btn next" onClick={nextSlide}>›</button>
      </nav>
    </div>
  );
};

export default Slider;
