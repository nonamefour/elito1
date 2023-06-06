import React, { useState } from "react";
import Slider from "react-slick";

const testimonial = [
  {
    id: "01",
    tImg: "images/testimonial/tom-gregan.jfif",
    Des: "We've worked with several agencies to improve our offsite, none of which have been as effective as the team at Blue Anchor.",
    Title: "Money Supermarket",
    Sub: "Tom Gregan",
  },
  {
    id: "02",
    tImg: "images/testimonial/ilayda-karakas.jfif",
    Des: "Blue Anchor has created an incredibly professional, flexible and modular SEO offering that aligns perfectly with our needs and proven to deliver results.",
    Title: "CMC Markets",
    Sub: "Ilayda Karakas",
  },
  {
    id: "03",
    tImg: "images/testimonial/ali-nickson.jfif",
    Des: "Their ability to distill complex concepts into an easy to understand and actionable format is second to none in my experience.",
    Title: "Tesco Bank",
    Sub: "Ali Nickson",
  },
  {
    id: "04",
    tImg: "images/testimonial/george.jfif",
    Des: "Tom's creative thinking, expertise, positive can-do attitude and drive as a SEO professional made him an absolute pleasure to work with. He continually delivers results regardless of tight deadlines and working under pressure.",
    Title: "Visibility IQ",
    Sub: "George Prodromou",
  },
  {
    id: "05",
    tImg: "images/testimonial/john-fegan.jfif",
    Des: "Tom is an enthusiastic, very technically strong SEO with a consistent standard of client facing work well above what is suggested by his experience. As he performs equally well either in strategic and technical SEO or when dealing with clients I have no doubt Tom will go far",
    Title: "Caliber Interactive",
    Sub: "John Fegan",
  },
];

const Testimonial = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className="wpo-testimonial-section section-padding">
      <div className="container">
        <div className="wpo-testimonial-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="testimonial-left">
                <div className="testimonial-left-inner">
                  <div className="slider-for">
                    <Slider
                      asNavFor={nav2}
                      ref={(slider1) => setNav1(slider1)}
                      dots={false}
                      arrows={false}
                      fade={true}
                    >
                      {testimonial.map((tesmnl, tsm) => (
                        <div className="testimonial-img" key={tsm}>
                          <img src={tesmnl.tImg} alt="" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="side-img-1">
                    <img src="images/testimonial/tom-gregan.jfif" alt="" />
                  </div>
                  <div className="side-img-2">
                    <img src="images/testimonial/george.jfif" alt="" />
                  </div>
                  <div className="side-img-3">
                    <img src="images/testimonial/john-fegan.jfif" alt="" />
                  </div>
                  <div className="side-img-4">
                    <img src="images/testimonial/ali-nickson.jfif" alt="" />
                  </div>
                  <div className="side-img-5">
                    <img src="images/testimonial/ilayda-karakas.jfif" alt="" />
                  </div>
                  <div className="border-s1"></div>
                  <div className="border-s2"></div>
                  <div className="border-s3"></div>
                </div>
                <div className="shape-t">
                  <svg
                    width="750"
                    height="750"
                    viewBox="0 0 750 750"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_39_4154)">
                      <circle
                        r="125"
                        transform="matrix(-1 0 0 1 375 375)"
                        fillOpacity="0.4"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_39_4154"
                        x="0"
                        y="0"
                        width="750"
                        height="750"
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
                          stdDeviation="125"
                          result="effect1_foregroundBlur_39_4154"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="wpo-testimonial-items">
                <div className="slider-nav">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={1}
                    dots={true}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {testimonial.map((tesmnl, tsm) => (
                      <div className="wpo-testimonial-item" key={tsm}>
                        <div className="wpo-testimonial-text">
                          <h4>{tesmnl.tTitle}</h4>
                          <p>{tesmnl.Des}</p>
                          <div className="wpo-testimonial-text-btm">
                            <h3>
                              {tesmnl.Title}, <span>{tesmnl.Sub}</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-shape"></div>
      <div className="right-shape">
        <img src="images/testimonial/shape.png" alt="" />
      </div>
    </section>
  );
};

export default Testimonial;
