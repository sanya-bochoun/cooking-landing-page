import React, { useState, useEffect } from 'react';
import BadgeImage from '../assets/images/Badge.png';
import MenuIcon from '../assets/icons/menu.png';
import ClockIcon from '../assets/icons/clock.png';
import ForkKnifeIcon from '../assets/icons/ForkKnife.png';
import EllipseIcon from '../assets/icons/Ellipse 2.png';
import PlayCircleIcon from '../assets/icons/PlayCircle.png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const heroData = [
    {
      id: 1,
      title: "Spicy delicious chicken wings",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim",
      category: "Hot Recipes",
      time: "30 Minutes",
      type: "Chicken",
      author: "John Smith",
      date: "15 March 2022",
      image: "/src/assets/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png",
      badge: "Hot Recipes"
    },
    {
      id: 2,
      title: "Fresh fruit salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim",
      category: "Healthy Recipes",
      time: "15 Minutes",
      type: "Fruits",
      author: "Jane Doe",
      date: "20 March 2022",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop",
      badge: "Healthy Recipes"
    },
    {
      id: 3,
      title: "Chocolate cake",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim",
      category: "Desserts",
      time: "45 Minutes",
      type: "Dessert",
      author: "Mike Johnson",
      date: "25 March 2022",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
      badge: "Desserts"
    }
  ];

  const totalSlides = heroData.length;

  // Auto slide function
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // หยุดการเลื่อนอัตโนมัติเมื่อผู้ใช้คลิก
    setTimeout(() => setIsAutoPlaying(true), 3000); // เริ่มใหม่หลังจาก 3 วินาที
  };

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 1) {
        return (prev + 1) % totalSlides;
      } else {
        return prev === 0 ? totalSlides - 1 : prev - 1;
      }
    });
    setIsAutoPlaying(false); // หยุดการเลื่อนอัตโนมัติเมื่อผู้ใช้คลิก
    setTimeout(() => setIsAutoPlaying(true), 3000); // เริ่มใหม่หลังจาก 3 วินาที
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };


  return (
    <div 
      className="hero-slider-container mt-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="slider-wrapper"
        style={{ transform: `translateX(calc(50% - 690px - ${currentSlide * (1380 + 40)}px))` }}
      >
        {heroData.map((item, index) => {
          return (
            <div key={item.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              {/* Left Content Panel */}
              <div className="slide-content-panel">
                <div className="content-badge">
                  <img src={MenuIcon} alt="Menu" className="menu-icon" />
                  <span>{item.badge}</span>
                </div>
                
                <h1 className="content-title">
                  {item.title}
                </h1>
                
                <p className="content-description">
                  {item.description}
                </p>
                
                <div className="content-meta">
                  <div className="meta-item">
                    <img src={ClockIcon} alt="Clock" className="clock-icon" />
                    <span>{item.time}</span>
                  </div>
                  <div className="meta-item">
                    <img src={ForkKnifeIcon} alt="Fork Knife" className="food-icon" />
                    <span>{item.type}</span>
                  </div>
                </div>
                
                <div className="author-section mt-12">
                  <div className="author-info">
                    <div className="author-avatar">
                      <img src={EllipseIcon} alt="Author" />
                    </div>
                    <div className="author-details">
                      <div className="author-name">{item.author}</div>
                      <div className="author-date">{item.date}</div>
                    </div>
                  </div>
                  
                  <button className="view-recipes-btn">
                    View Recipes
                    <img src={PlayCircleIcon} alt="Play" className="btn-arrow" />
                  </button>
                </div>
              </div>
              
              {/* Right Image Panel */}
              <div className="slide-image-panel">
                <img 
                  src={item.image} 
                  alt={item.title} 
                />
              </div>
              
              {/* Badge - วางไว้ในระดับ slide */}
              <div className="handpicked-badge">
                <img 
                  src={BadgeImage} 
                  alt="Handpicked Recipes Badge" 
                  className="badge-image"
                />
              </div>
            </div>
          );
        })}
      </div>


      {/* Navigation Buttons */}
      <button 
        className="slide-nav nav-prev" 
        onClick={() => changeSlide(-1)}
      >
        ‹
      </button>
      <button 
        className="slide-nav nav-next" 
        onClick={() => changeSlide(1)}
      >
        ›
      </button>

      {/* Indicators */}
      <div className="slide-indicators">
        {heroData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
