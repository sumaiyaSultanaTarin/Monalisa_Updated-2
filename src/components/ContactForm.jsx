import Swal from "sweetalert2";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Success popup
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <section id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title text-center wow zoomIn">
              <h2>
                Get in <span>Touch</span>
              </h2>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elitsed
                eiusmod tempor enim minim veniam quis notru exercit ation Lorem
                ipsum dolor sit amet.
              </p>
            </div>

            {/* Left side info */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div
                className="single-address wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <div className="media-body text-left">
                    <h2 className="media-heading">Our Location</h2>
                    <p>
                      3481 Melrose Place, Beverly Hills <br /> CA 90210
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="single-address wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="media-body text-left">
                    <h2 className="media-heading">Call us on</h2>
                    <p>
                      (+1) 517 397 7100 <br /> (+1) 517 397 7100
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="single-address mb-none wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
              >
                <div className="media">
                  <div className="media-left">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="media-body text-left">
                    <h2 className="media-heading">Email Address</h2>
                    <p>
                      info@monalisa.com
                      <br />
                      admin@monalisa.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="col-md-8 col-sm-8 col-xs-12 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.1s"
            >
              <div className="contact">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="first-name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group description col-md-12 mbnone">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        id="description"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <div className="actions">
                        <input
                          type="submit"
                          value="Send message"
                          name="submit"
                          className="btn btn-lg btn-contact-bg"
                          title="Submit Your Message!"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
