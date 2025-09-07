import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Youtube() {
  	const goAbout = (e) => {
  e.preventDefault();
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
  const [showVideo, setShowVideo] = useState(false);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000); 

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
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",       
      height: "56.25vw",     
      minWidth: "177.78vh",  
      minHeight: "100vh",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/f7MskKkn2Jg?autoplay=1&mute=1&loop=1&playlist=f7MskKkn2Jg&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
             width: "100%", height: "100%", border: 0 
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
							  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="/HomeYoutubeL#about"
                onClick={goAbout}>Learn More</Link>
							  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
						</div>										
					</div>{/* END COL */}
				</div>{/* END ROW */}
			</div>{/* END CONTAINER */}
      </section>
    </>
  );
}