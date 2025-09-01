import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <footer className="footer section-padding">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-12 col-sm-12 col-xs-12 wow zoomIn">
						<Link to="index.html" className="footer-logo"><img src="assets/img/logo.png" alt="logo"/></Link>
						<div className="footer_social">
							<ul>
								<li><Link className="footer_facebook  wow bounceInDown" data-wow-delay=".1s" to="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></Link></li>
								<li><Link className="footer_twitter wow bounceInDown" data-wow-delay=".2s" to="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></Link></li>
								<li><Link className="footer_google wow bounceInDown" data-wow-delay=".3s" to="#" data-toggle="tooltip" data-placement="top" title="Google Plus"><i className="fa fa-google-plus"></i></Link></li>
								<li><Link className="footer_linkedin wow bounceInDown" data-wow-delay=".4s" to="#" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"></i></Link></li>
								<li><Link className="footer_youtube wow bounceInDown" data-wow-delay=".5s" to="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="fa fa-youtube"></i></Link></li>
								<li><Link className="footer_skype wow bounceInDown" data-wow-delay=".6s" to="#" data-toggle="tooltip" data-placement="top" title="Skype"><i className="fa fa-skype"></i></Link></li>
							</ul>
						</div>	
						<p className="footer_copyright">Monalisa &copy; 2016 All Rights Reserved.</p>							
					</div>{/*- END COL */}
				</div>{/*- END ROW */}
			</div>{/*- END CONTAINER */}
		</footer>
    </>
  )
}
