import { Link } from "react-router-dom";

export default function Youtube() {
  return (
    <>
      <section id="home" className="youtube_bg" style={{
    backgroundImage: "url(assets/img/bg/youtube-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }}>
			{/* <Link className="player" data-property="{videoURL:'https://youtu.be/f7MskKkn2Jg',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></a>  */}
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
  )
}
