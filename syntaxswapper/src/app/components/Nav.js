"use client"
import React from 'react';
import './styles.css';

export const FontAwesomeScript = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/628c8d2499.js';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return null;
};

export const Navigation = () => {
  return (
    <nav id="menu">
      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
            <div className="text">
              <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
            <div className="text">
              <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-bomb"></i></div>
            <div className="text">
              <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Remove mass from any object.</div>
            </div>
          </div>
        </div>
      </div>


      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
            <div className="text">
              <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
            <div className="text">
              <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-bomb"></i></div>
            <div className="text">
              <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Remove mass from any object.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
            <div className="text">
              <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
            <div className="text">
              <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-bomb"></i></div>
            <div className="text">
              <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Remove mass from any object.</div>
            </div>
          </div>
        </div>
      </div>
       <div className="menu-item">
        <div className="menu-text">
          <a href="#">Products</a>
        </div>
        <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-wind-turbine"></i></div>
            <div className="text">
              <div className="title">Turbo Editor <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Edit your code while slowing down time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-lightbulb-on"></i></div>
            <div className="text">
              <div className="title">Idea Creator <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Think of an idea, and have an AI create it.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-bomb"></i></div>
            <div className="text">
              <div className="title">Super Collider <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Remove mass from any object.</div>
            </div>
          </div>
        </div>
      </div>
      
    </nav>
  );
};