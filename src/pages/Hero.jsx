import React, { useState, useEffect, useCallback } from "react";
import slider4 from "../asset/slider-4.webp";
import slider5 from "../asset/slider-5.jpg";
import slider6 from "../asset/slider-6.jpg";

const Hero = () => {
  const sliders = [slider4, slider5, slider6];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const showNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
  }, [sliders.length]);

  const showPrevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliders.length) % sliders.length
    );
  }, [sliders.length]);

  const handleNextClick = () => {
    showNextSlide();
    setAutoplay(false);
  };

  const handlePrevClick = () => {
    showPrevSlide();
    setAutoplay(false);
  };

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(showNextSlide, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [showNextSlide, autoplay]);

  return (
    <section className="main_slider_area relative">
      <div className="video_boxes relative">
        <div className="container relative">
          <div
            className="video_boxs relative bg-cover bg-center h-[60vh] md:h-screen flex items-center justify-center  bg-opacity-75 "
            style={{ backgroundImage: `url(${sliders[currentSlide]})` }}
            onClick={() => setAutoplay(!autoplay)}
          >
            <button
              onClick={handlePrevClick}
              className="text-2xl slider-button previous-button absolute left-2 transform -translate-y-1/2 translate-x-1/2 top-1/2 hover:scale-120 hover:shadow-md transition-transform duration-300"
            >
              {"<"}
            </button>
            <div className="absolute bottom-0 ml-2 md:ml-20 md:left-20 p-4 text-center bg-opacity-30 md:backdrop-blur-md">
              <h1 className="md:text-6xl text-xl font-bold text-white">
                Helping <br /> Businesses <br /> Every Day
              </h1>
            </div>
            <div className="md:p-12 text-gray-800 md:mr-11 md:mt-32">
              <h1 className="text-xl md:text-4xl font-bold ml-28 md:ml-56">
                Reinventing Companies for{" "}
                <span className="text-white">a digital future</span>
              </h1>
              <p className="ml-8 text-sm md:text-xl mt-4 text-white">
                Endive Media is one of the world’s top business consulting
                firms. We help global leaders with their organization's most
                critical issues & opportunities.
              </p>
            </div>
            <button
              onClick={handleNextClick}
              className="text-2xl slider-button next-button absolute right-2 transform -translate-y-1/2 translate-x-1/2 top-1/2 hover:scale-120 hover:shadow-md transition-transform duration-300"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;