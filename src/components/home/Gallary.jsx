import { Link } from "react-router-dom";

export default function Gallary() {
  return (
    <>
     <section id="gallery" className="works_area section-padding">		
			<div className="container-fluid">
				<div className="row text-center">
					<div className="section-title wow zoomIn">
						<h2>Monalisa <span>Gallery</span></h2>
						<div className="line"></div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/1.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/1.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Body Message</Link></p>
								</figcaption>
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/2.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/2.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Body Message</Link></p>
								</figcaption>	
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/3.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/3.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Body Message</Link></p>
								</figcaption>	
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/4.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/4.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Skin care</Link></p>
								</figcaption>	
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/5.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/5.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Skin care</Link></p>
								</figcaption>
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/6.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/6.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Hair Cut</Link></p>
								</figcaption>	
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/7.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/7.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Beauty Spa</Link></p>
								</figcaption>	
							</figure>
						</div>
					</div>{/*- END COL */}
					<div className="col-md-3 col-sm-3 col-xs-12 no-padding">
						<div className="grid">
							<figure className="effect-apollo">
								<img src="assets/img/portfolio/8.jpg" className="img-responsive" alt=""/>
								<figcaption>
									<Link className="prettyPhoto image_zoom" to="assets/img/portfolio/8.jpg"></Link>
									<p><Link to="single_project.html" data-toggle="modal" data-target="#projectModal">Nail Care</Link></p>
								</figcaption>		
							</figure>
						</div>
					</div>{/*- END COL */}
				</div>{/*- END ROW */}
				<div className="portfolio_btn text-center">
					<Link to="#" className="btn btn-default btn-portfolio-bg">See More Projects</Link>
				</div>
			</div>{/*- END CONTAINER-FLUID */}			
		</section> 
    </>
  )
}
