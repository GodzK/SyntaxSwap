"use client";
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
          <a href="http://localhost:3000/">Swap Syntax</a>
        </div>
        {/* <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-exchange-alt"></i></div>
            <div className="text">
              <div className="title">Convert Code <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Easily convert syntax between languages.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-code-branch"></i></div>
            <div className="text">
              <div className="title">Customize Conversion <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Adjust syntax rules to your needs.</div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="menu-item">
        <div className="menu-text">
          <a href="/support">Supported Languages</a>
        </div>
        {/* <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-language"></i></div>
            <div className="text">
              <div className="title">Popular Languages <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">JavaScript, Python, Java, and more.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-plus-circle"></i></div>
            <div className="text">
              <div className="title">Request a Language <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Let us know what to add next.</div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="menu-item">
        <div className="menu-text">
          <a href="/example">Examples</a>
        </div>
        {/* <div className="sub-menu">
          <div className="icon-box">
            <div className="icon"><i className="fal fa-book-open"></i></div>
            <div className="text">
              <div className="title">Code Snippets <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">See how conversion works in real-time.</div>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon"><i className="fal fa-code"></i></div>
            <div className="text">
              <div className="title">Common Patterns <i className="far fa-arrow-right"></i></div>
              <div className="sub-text">Compare patterns across languages.</div>
            </div>
          </div>
        </div> */}
      </div>
      
    </nav>
  );
};
