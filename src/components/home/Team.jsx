import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
    <section id="team" className="our_team section-padding">
			<div className="container">		
				<div className="row text-center">
					<div className="section-title wow zoomIn">
						<h2>Monalisa <span>Lovely</span> Team</h2>
						<div className="line"></div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor sit amet.</p>
					</div>				
					<div className="col-md-3 col-sm-6">
						<div className="single_team">
							<div className="img_wrap">
								<img src="assets/img/team/team-1.jpg" className="img-responsive" alt="" />
								<div className="social_link">
									<div className="social_table">
										<ul className="list-inline">
											<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
											<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
											<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<h3>Joe S. Sloat</h3>
							<h4>Beauty Expert</h4>							
						</div>
					</div>{/* END COL */}					
					<div className="col-md-3 col-sm-6">
						<div className="single_team">
							<div className="img_wrap">
								<img src="assets/img/team/team-2.jpg" className="img-responsive" alt="" />
								<div className="social_link">
									<div className="social_table">
										<ul className="list-inline">
											<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
											<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
											<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<h3>Myron J. Baxter</h3>
							<h4>Spa Expert</h4>							
						</div>
					</div>{/* END COL */}					
					<div className="col-md-3 col-sm-6">
						<div className="single_team">
							<div className="img_wrap">
								<img src="assets/img/team/team-3.jpg" className="img-responsive" alt="" />
								<div className="social_link">
									<div className="social_table">
										<ul className="list-inline">
											<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
											<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
											<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>								
							</div>
							<h3>Keith W. Nelson</h3>
							<h4>Beauty Expert</h4>							
						</div>
					</div>{/* END COL */}		
					<div className="col-md-3 col-sm-6">
						<div className="single_team">
							<div className="img_wrap">
								<img src="assets/img/team/team-4.jpg" className="img-responsive" alt="" />
								<div className="social_link">
									<div className="social_table">
										<ul className="list-inline">
											<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
											<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
											<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<h3>Keith W. Nelson</h3>
							<h4>Messager</h4>							
						</div>
					</div>{/* END COL */}	
				</div>{/* END ROW  */}
			</div>{/* END CONTAINER  */}
		</section>
    </>
  )
}

