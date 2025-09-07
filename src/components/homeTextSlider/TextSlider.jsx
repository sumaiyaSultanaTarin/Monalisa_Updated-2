import { Link } from "react-router-dom";

export default function TextSlider() {
		const goAbout = (e) => {
  e.preventDefault();
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
  return (
    <>
    <section id="home" className="text_slider" style={{backgroundImage: "url(assets/img/bg/test_slider.jpg)", backgroundSize:"cover", backgroundPosition: "center center", backgroundAttachment:"fixed"}}>
			<div className="container">
				<div className="row">	
					<div className="col-md-12">
						<div id="team__carousel" className="carousel slide" data-ride="carousel" data-interval="9999999">
							<div className="carousel-inner text-center">							
							  {/* Item 1 */}
							  <div className="item active">
								<div className="cover-container">
									<div className="home_text">
										  <h2 className="animated fadeInDownBig">Welcome our Monalisa</h2>
										  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
										  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="/HomeTextSliderL#about"
                onClick={goAbout}>Learn More</Link>
										  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
									</div>
								</div>
							   </div>
							  {/* Item 2 */}
							  <div className="item">
								<div className="cover-container">							 
									<div className="home_text">
										  <h2 className="animated fadeInDownBig">Exhaustive Resource of Spa Treatments</h2>
										  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
										  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="/HomeTextSliderL#about"
                onClick={goAbout}>Learn More</Link>
										  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
									</div>
								</div>
							   </div>
							   {/* Item 3 */}
							  <div className="item">
								<div className="cover-container">							 
									<div className="home_text">
										  <h2 className="animated fadeInDownBig">Give you unique experience</h2>
										  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
										  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="/HomeTextSliderL#about"
                onClick={goAbout}>Learn More</Link>
										  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
									</div>
								</div>
							   </div>
							</div>
						</div>
					</div>{/*- END COL */}
				</div>{/*- END ROW */}
			</div>{/*- END CONTAINER */}
		</section>
    </>
  );
}
