export default function WhyChooseUs() {
  return (
    <>
      <section className="why_choose_us section-padding">
			<div className="container">
				<div className="row">
					<div className="section-title text-center wow zoomIn">
						<h2>Why Choose <span>Monalisa</span></h2>
						<div className="line"></div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam quis notru exercit ation Lorem ipsum dolor sit amet.</p>
					</div>					
					<div className="col-md-6 col-sm-6 col-xs-12">
						<div id="why_choose">
							{/* Wrapper for slides */}
							<div className="row ">	
								<div className="col-sm-6">
									<div className="single_feature">
										<i className="fa fa-leaf"></i>
										<h3>Natural Atmosphere</h3>
										<span></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. </p>	
									</div>
								</div>{/* END col-sm-6 */}									
								<div className="col-sm-6">
									<div className="single_feature">
										<i className="fa fa-heart-o"></i>
										<h3>Beautiful &amp; Sexy life</h3>
										<span></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. </p>	
									</div>
								</div>{/* END col-sm-6 */}								
								<div className="col-sm-6">
									<div className="single_feature">
										<i className="fa fa-spinner"></i>
										<h3>Cost effectiveness</h3>
										<span></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. </p>
									</div>
								</div>{/* END col-sm-6 */}								
								<div className="col-sm-6">
									<div className="single_feature">
										<i className="fa fa-lemon-o"></i>
										<h3>Xoss Environment</h3>
										<span></span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum ante vel aliquet euismod. </p>
									</div>
								</div>{/* END col-sm-6 */}
							</div>{/* END CAROUSEL INNER */}
						</div>{/* END CAROUSEL SLIDE */}				
					</div>{/*- END COL */}
					<div className="col-md-6 col-sm-6 col-xs-12"> 
						<div className="feature_img">
							<img src="assets/img/man.jpg" alt="" />
						</div>
					</div>{/*- END COL */}						
				</div>{/*- END ROW */}			
			</div>{/*- END CONTAINER */}		
		</section>
    </>
  )
}
