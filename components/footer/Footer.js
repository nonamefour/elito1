import React from "react";
import { Link } from "react-scroll";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shape">
          <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
            <g filter="url(#filter0_f_39_3833)">
              <circle
                cx="803"
                cy="803"
                r="303"
                fill="#59C378"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_39_3833"
                x="0"
                y="0"
                width="1606"
                height="1606"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_3832"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <p className="copyright">
              Copyright &copy; 2023 Tom Dawkins All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
