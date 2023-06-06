import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Expriences = [
  {
    date: "2015 - Present",
    logo: "images/work/blue-anchor-logo1.png",
    position: "Founder",
    companyName: "Blue Anchor SEO",
    workFrom: "Shoreditch, London",
    details: "more information",
  },
  {
    date: "2014 - 2015",
    logo: "images/work/caliber-logo.png",
    position: "SEO Account Manager",
    companyName: "Caliber Interactive",
    workFrom: "Farringdon, London",
  },
  {
    date: "2012 - 2014",
    logo: "images/work/steak-logo.png",
    position: "Senior SEO Account Executive",
    companyName: "STEAK",
    workFrom: "Covent Garden, London",
  },
  {
    date: "2010 - 2012",
    logo: "images/work/minttwist-logo.jpg",
    position: "SEO Executive",
    companyName: "MintTwist",
    workFrom: "Old Street, London",
  },
];

const ExprienceSec = (props) => {
  return (
    <div className="wpo-work-area section-padding">
      <div className="container">
        <SectionTitle Title={"Experience Overview"} />
        <div className="wpo-work-wrap">
          {Expriences.map((exprience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{exprience.date}</li>
                <li className="logo">
                  <img src={exprience.logo} alt="" />
                </li>
                <li className="position">
                  {exprience.position}{" "}
                  <span>
                    {exprience.companyName} <span>{exprience.workFrom}</span>
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
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
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ExprienceSec;
