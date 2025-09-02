import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title text-center wow zoomIn">
          <h2>
            Our <span>Clients</span> Say
          </h2>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor
            sit amet.
          </p>
        </div>

        <Slider {...settings}>
          <div className="testi-slider-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              consequat nibh. Praesent sodales enim facilisis accumsan rhoncus.
            </p>
            <img src="assets/img/testimonial/1.jpg" alt="client1" />
            <h6>
              John Doe - <span className="colored-text">Monalisa Inc.</span>
            </h6>
          </div>

          <div className="testi-slider-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              consequat nibh. Praesent sodales enim facilisis accumsan rhoncus.
            </p>
            <img src="assets/img/testimonial/2.jpg" alt="client2" />
            <h6>
              John Doe - <span className="colored-text">Monalisa Inc.</span>
            </h6>
          </div>

          <div className="testi-slider-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              consequat nibh. Praesent sodales enim facilisis accumsan rhoncus.
            </p>
            <img src="assets/img/testimonial/3.jpg" alt="client3" />
            <h6>
              Emma Doe - <span className="colored-text">Monalisa Inc.</span>
            </h6>
          </div>
        </Slider>
      </div>
    </section>
  );
}
