import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
    <section id="blog" className="our_blog section-padding">
			<div className="container">		
				<div className="row">
					<div className="section-title text-center wow zoomIn">
						<h2>Fresh <span>News</span></h2>
						<div className="line"></div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor sit amet.</p>
					</div>	
					<div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
						<div className="single-blog">
							<div className="single-img">
								<img src="assets/img/blog/blog-1.jpg" className="img-responsive" alt=""/>
								<div className="post-date">
									<h4>24 October, 2016</h4>
								</div>
								<div className="blog-social">
									<h4>Share On</h4>
									<ul>
										<li><Link to="#" className="social-link"><i className="fa fa-facebook facebook"></i></Link></li>
										<li><Link to="#"><i className="fa fa-twitter twitter"></i></Link></li>
										<li><Link to="#"><i className="fa fa-google-plus google"></i></Link></li>
										<li><Link to="#"><i className="fa fa-linkedin linkedin"></i></Link></li>
									</ul>	
								</div>									
							</div>	
							<div className="single_blog_dsc">
								<h3>Title goes here</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
								<Link to="#">Read More</Link>
							</div>
						</div>
					</div>{/* END COL */}					
					<div className="col-md-6 col-sm-6 col-xs-12 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
						<div className="single-blog">
							<div className="single-img">
								<img src="assets/img/blog/blog-2.jpg" className="img-responsive" alt=""/>
								<div className="post-date">
									<h4>25 October, 2016</h4>
								</div>
								<div className="blog-social">
									<h4>Share On</h4>
									<ul>
										<li><Link to=""><i className="fa fa-facebook facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-google-plus google"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin linkedin"></i></Link></li>
									</ul>	
								</div>								
							</div>							
							<div className="single_blog_dsc">
								<h3>Title goes here</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
								<Link to="#">Read More</Link>
							</div>
						</div>
					</div>{/* END COL */}			
				</div>{/* END ROW */}
			</div>{/* END CONTAINER */}
		</section>
    </>
  )
}
