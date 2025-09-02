import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TextRotator() {
  const texts = [
    "Welcome our Monalisa",
    "Exhaustive Resource of Spa Treatments",
    "Give you unique experience",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // 3s por change hobe
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      data-stellar-background-ratio="0.3"
      id="home"
      className="youtube_bg"
      style={{
        backgroundImage: "url(assets/img/bg/rotator-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="home_text">
              <h2>
                <span className="rotate">{texts[index]}</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim. Aenean vitae metus in
                augue pretium ultrices. Duis dictum eget dolor vel blandit.
              </p>
              <Link
                data-scroll
                className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll"
                to="#about"
              >
                Learn More
              </Link>
              <Link
                data-scroll
                className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll"
                to="#"
              >
                Purchase now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
