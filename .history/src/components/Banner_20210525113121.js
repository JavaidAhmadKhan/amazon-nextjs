import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}></Carousel>
    </div>
  );
}

export default Banner;
