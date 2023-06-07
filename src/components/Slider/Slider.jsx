import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../assets/images/Component.png";
import slider2 from "../../assets/images/Component-2.png";
import slider3 from "../../assets/images/Component-3.png";
import slider4 from "../../assets/images/Component-4.png";
import slider5 from "../../assets/images/Component-5.png";
import slider6 from "../../assets/images/Component-6.png";
import "./slider.scss";
import { Carousel } from "react-responsive-carousel";
export const Slider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        useKeyboardArrows
        showStatus={false}
        showThumbs={false}
        interval={4000}
        centerMode
        centerSlidePercentage={34}
      >
        <div>
          <img src={slider1} alt="slider" />
        </div>
        <div>
          <img src={slider2} alt="slider" />
        </div>
        <div>
          <img src={slider3} alt="slider" />
        </div>
        <div>
          <img src={slider4} alt="slider" />
        </div>
        <div>
          <img src={slider5} alt="slider" />
        </div>
        <div>
          <img src={slider6} alt="slider" />
        </div>
        <div>
          <img src={slider4} alt="slider" />
        </div>
      </Carousel>
    </div>
  );
};
