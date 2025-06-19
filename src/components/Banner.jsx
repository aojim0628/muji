import "slick-carousel/slick/slick.css";
import '../css/slick-theme.css';
import Slider from "react-slick";
import image1 from '../images/banner1.jpg';
import image2 from '../images/banner2.jpg';
import image3 from '../images/banner3.jpg';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div style={{ margin: "0 auto" }}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Image 1" className="w-full h-auto" />
        </div>
        <div>
          <img src={image2} alt="Image 2" className="w-full h-auto" />
        </div>
        <div>
          <img src={image3} alt="Image 3" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
}
