import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Youtube() {
  const [showVideo, setShowVideo] = useState(false);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    // Show video after image has been displayed for a few seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000); // Show image for 3 seconds before fading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section 
        id="home" 
        className={`youtube_bg ${bgImageLoaded ? 'loaded' : ''}`}
      >
        {/* Background Image */}
        <div 
          className="bg-image"
          style={{
            backgroundImage: "url(assets/img/bg/youtube-bg.jpg)",
            opacity: showVideo ? 0 : 1,
            visibility: showVideo ? "hidden" : "visible",
          }}
          onLoad={() => setBgImageLoaded(true)}
        />

        {/* Background Video*/}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            opacity: showVideo ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            overflow: "hidden"
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hS0YY1f50_c?autoplay=1&mute=1&loop=1&playlist=hS0YY1f50_c&controls=0&showinfo=0&rel=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              transform: "scale(1.1)", 
              transformOrigin: "center center",
            }}
           title="Monalisa background video"

          />
        </div>

        {/* Dark overlay */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            height: "100%",
            left: 0,
            opacity: 0.8,
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 2,
          }}
        />

      <div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="home_text">
							  <h2 className="animated fadeInDownBig">Welcome our Monalisa</h2>
							  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
							  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="#about">Learn More</Link>
							  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
						</div>										
					</div>{/* END COL */}
				</div>{/* END ROW */}
			</div>{/* END CONTAINER */}
      </section>
    </>
  );
}