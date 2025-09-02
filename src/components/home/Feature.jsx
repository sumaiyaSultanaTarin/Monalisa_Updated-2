import { Link } from "react-router-dom";
export default function Feature() {
  return (
    <>
       {/* START FEATURE */}
		<section id="feature" className="our_offer section-padding">
			<div className="container">
				<div className="row text-center">
					<div className="section-title">
						<h2>Monalisa <span>Features</span></h2>
						<div className="line"></div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12">
						<div className="single_offer">
							<div className="single_offer_img">
								<img src="assets/img/service_1.jpg" className="img-responsive" alt="" />
							</div>
							<h4>Stone Message</h4>
							<h5>$100</h5>
							<Link className="btn btn-default btn-feature-bg" to="#">Read More</Link>
						</div>	
					</div>{/* END COL */}
					<div className="col-md-4 col-sm-4 col-xs-12">
						<div className="single_offer">
							<div className="single_offer_img">
								<img src="assets/img/service_2.jpg" className="img-responsive" alt="" />
							</div>
							<h4>Body Message</h4>
							<h5>$100</h5>
							<Link className="btn btn-default btn-feature-bg" to="#">Read More</Link>
						</div>	
					</div>{/* END COL */}
					<div className="col-md-4 col-sm-4 col-xs-12">
						<div className="single_offer">
							<div className="single_offer_img">
								<img src="assets/img/service_3.jpg" className="img-responsive" alt="" />
							</div>
							<h4>Face Treatment</h4>
							<h5>$100</h5>
							<Link className="btn btn-default btn-feature-bg" to="#">Read More</Link>
						</div>	
					</div>{/* END COL */}
				</div>{/* END ROW */}
			</div>{/* END CONTAINER */}
		</section>
		{/* END FEATURE */} 
    </>
  )
}

