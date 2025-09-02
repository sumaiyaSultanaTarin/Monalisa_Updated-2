import { Link } from "react-router-dom";
import Preloader from '../components/home/Preloader';


export default function Monalisa() {
  return (
    <>
    <Preloader/>
     {/* START  HOME DESIGN */}
		<header id="home" className="hero">
			<div className="container">
				<div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
					<div className="hero-text">
						<img src="../../public/Demo/img/logo.png" alt="" />
						<h1>Health & Beauti HTML Template</h1>
					</div>{/*//.HERO-TEXT */}
				</div>
			</div>
		</header>	
		{/*END  HOME DESIGN */}	

		{/*START DEMO*/}
		<section className="demo">
			<div className="container">
				<div className="row text-center">
					<h2 className="version_title">Light Version</h2>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="/src/pages/light/HomeDefaultL" target="_blank">
								<img src="../../public/Demo/img/1.png" className="img-responsive" alt="" />
								<h3>Home Default</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./light/HomeParallaxL.jsx" target="_blank">
								<img src="../../public/Demo/img/2.png" className="img-responsive"  alt="" />
								<h3>Home Parallax</h3>
							</Link>
						</div>
					</div>				
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./light/HomeTextSliderL.jsx" target="_blank">
								<img src="../../public/Demo/img/3.png" className="img-responsive"  alt="" />
								<h3>Home Text Slider</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./light/HomeTextRotatorL.jsx" target="_blank">
								<img src="../../public/Demo/img/4.png" className="img-responsive"  alt="" />
								<h3>Home Text Rotator</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./light/HomeHtml5VideoL.jsx" target="_blank">
								<img src="../../public/Demo/img/5.png" className="img-responsive"  alt="" />
								<h3>Home HTML5 Video</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./light/HomeYoutubeL.jsx" target="_blank">
								<img src="../../public/Demo/img/6.png" className="img-responsive"  alt="" />
								<h3>Home Youtube</h3>
							</Link>
						</div>
					</div>
				</div>
				<div className="row text-center">
					<h2 className="version_title version_title_dark">Dark Version</h2>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeDefault.jsx" target="_blank">
								<img src="../../public/Demo/img/1.png" className="img-responsive" alt="" />
								<h3>Home Default</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeParallax.jsx" target="_blank">
								<img src="../../public/Demo/img/2.png" className="img-responsive"  alt="" />
								<h3>Home Parallax</h3>
							</Link>
						</div>
					</div>				
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeTextSlider.jsx" target="_blank">
								<img src="../../public/Demo/img/3.png" className="img-responsive"  alt="" />
								<h3>Home Text Slider</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeTextRotator.jsx" target="_blank">
								<img src="../../public/Demo/img/4.png" className="img-responsive"  alt="" />
								<h3>Home Text Rotator</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeHtml5Video.jsx" target="_blank">
								<img src="../../public/Demo/img/5.png" className="img-responsive"  alt="" />
								<h3>Home HTML5 Video</h3>
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
						<div className="demo_img">
							<Link to="./HomeYoutube.jsx" target="_blank">
								<img src="../../public/Demo/img/6.png" className="img-responsive"  alt="" />
								<h3>Home Youtube</h3>
							</Link>
						</div>
					</div>
				</div>
				
				<div className="row text-center">
					<div className="col-md-12">
						<div className="thankyou_message">
							<img src="../../public/Demo/img/rating.png" className="img-responsive" alt="" />
							<h3>Rate 5 Star If you like this template</h3>
							<h3><strong>Thank You!</strong></h3>
						</div>
							
					</div>
				</div>
			</div>
		</section>
		{/*END DEMO */}
				
		{/*START FOOTER */}
		<footer>
			<div className="text-center">
				<p className="copyright">
					Monalisa &copy; 2016. All Rights Reserved.
				</p>
			</div>
		</footer>
		{/*END FOOTER */}
    </>
  )
}
