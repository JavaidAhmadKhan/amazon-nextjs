import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="/src/assets/images/img3.jpg"
            alt="me"
            width="64"
            height="64"
          />
          {/* <img loading="lazy" src="https://links.papareact.com/gi1" alt="" /> */}
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
