import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


export default function Youtube() {
  return (
    <>
      <section id="home" className="youtube_bg" style={{
    backgroundImage: "url(assets/img/bg/youtube-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }}>
 {/* Background Video */}
      <ReactPlayer
        url="https://youtu.be/f7MskKkn2Jg"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: 0,
        }}
      />			<div className="container">
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
  )
}