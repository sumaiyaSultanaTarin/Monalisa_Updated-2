import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <>
		<section id="home">
			<div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
				<div className="carousel-inner">
				  <div className="item active" style={{backgroundImage: "url(assets/img/bg/slider-1.jpg)"}}>
					<div className="caption">
					  <h2 className="animated fadeInDownBig">Welcome our Monalisa</h2>
					  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
					  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="#about"> 
						<span>Learn More</span>
					  </Link>
					  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
					</div>
				  </div>
				  <div className="item" style={{backgroundImage: "url(assets/img/bg/youtube-bg.jpg)"}}>
					<div className="caption">
					  <h2 className="animated fadeInDownBig">Exhaustive Resource of Spa Treatments</h2>
					  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
					  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="#about"><span>Learn More</span></Link>
					  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
					</div>
				  </div>
				  <div className="item" style={{backgroundImage: "url(assets/img/bg/slider03.jpg)"}}>
					<div className="caption">
					  <h2 className="animated fadeInDownBig">Give you unique experience</h2>
					  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
					  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="#about"><span>Learn More</span></Link>
					  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
					</div>
				  </div>
				</div>
				<Link className="left-control" to="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></Link>
				<Link className="right-control" to="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></Link>
			</div>
		 </section> 
	</>
  );
}
