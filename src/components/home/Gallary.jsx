import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Gallary() {
  function openLightbox(src, alt = "Preview") {
    Swal.fire({
      imageUrl: src,
      imageAlt: alt,
      showConfirmButton: false,
      showCloseButton: true,
      background: "transparent",
      width: "auto",
      padding: 0,
      customClass: {
        popup: "lightbox-popup",
      },
    });
  }
  return (
    <>
      <section id="gallery" className="works_area section-padding">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="section-title wow zoomIn">
              <h2>
                Monalisa <span>Gallery</span>
              </h2>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elitsed
                eiusmod tempor enim minim veniam quis notru exercit ation Lorem
                ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/1.jpg"
                    className="img-responsive"
                    alt="Body Massage"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/1.jpg", "Body Massage")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(
                          "assets/img/portfolio/1.jpg",
                          "Body Massage"
                        );
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/1.jpg",
                            "Body Massage"
                          );
                        }}
                      >
                        Body Message
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/2.jpg"
                    className="img-responsive"
                    alt="Body Massage"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/2.jpg", "Body Massage")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(
                          "assets/img/portfolio/2.jpg",
                          "Body Massage"
                        );
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/2.jpg",
                            "Body Massage"
                          );
                        }}
                      >
                        Body Message
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/3.jpg"
                    className="img-responsive"
                    alt="Body Massage"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/3.jpg", "Body Massage")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(
                          "assets/img/portfolio/3.jpg",
                          "Body Massage"
                        );
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/3.jpg",
                            "Body Massage"
                          );
                        }}
                      >
                        Body Message
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/4.jpg"
                    className="img-responsive"
                    alt="Skin Care"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/4.jpg", "Skin Care")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox("assets/img/portfolio/4.jpg", "Skin Care");
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/4.jpg",
                            "Skin Care"
                          );
                        }}
                      >
                        Skin Care
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/5.jpg"
                    className="img-responsive"
                    alt="Skin Care"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/5.jpg", "Skin Care")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox("assets/img/portfolio/5.jpg", "Skin Care");
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/5.jpg",
                            "Skin Care"
                          );
                        }}
                      >
                        Skin Care
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/6.jpg"
                    className="img-responsive"
                    alt="Skin Care"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/6.jpg", "Hair Cut")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox("assets/img/portfolio/6.jpg", "Hair Cut");
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/6.jpg",
                            "Hair Cut"
                          );
                        }}
                      >
                        Hair Cut
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/7.jpg"
                    className="img-responsive"
                    alt="Beauty Spa"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/7.jpg", "Beauty Spa")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(
                          "assets/img/portfolio/7.jpg",
                          "Beauty Spa"
                        );
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/7.jpg",
                            "Beauty Spa"
                          );
                        }}
                      >
                        Beauty Spa
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-md-3 col-sm-3 col-xs-12 no-padding">
              <div className="grid">
                <figure className="effect-apollo">
                  <img
                    src="assets/img/portfolio/8.jpg"
                    className="img-responsive"
                    alt="Nail Care"
                    onClick={() =>
                      openLightbox("assets/img/portfolio/8.jpg", "Nail Care")
                    }
                    style={{ cursor: "zoom-in" }}
                  />
                  <figcaption>
                    <Link
                      href="assets/img/portfolio/1.jpg"
                      className="image_zoom"
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox("assets/img/portfolio/8.jpg", "Nail Care");
                      }}
                    />
                    <p>
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openLightbox(
                            "assets/img/portfolio/8.jpg",
                            "Nail Care"
                          );
                        }}
                      >
                        Nail Care
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
          <div className="portfolio_btn text-center">
            <Link to="#" className="btn btn-default btn-portfolio-bg">
              See More Projects
            </Link>
          </div>
        </div>
        {/*- END CONTAINER-FLUID */}
      </section>
    </>
  );
}
