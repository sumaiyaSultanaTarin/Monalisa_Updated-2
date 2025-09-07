import { Link } from "react-router-dom";

export default function HtmlVideo() {
		const goAbout = (e) => {
  e.preventDefault();
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
  return (
    <>
      <section id="home" className="html-video">
			<video className="video-bg" muted autoPlay loop playsInline>
				{/* WebM/VP8 for Firefox4, Opera, and Chrome */}
				<source type="video/webm" src="assets/videos/video.webm"/>
				{/* MP4 for Safari, IE9, iPhone, iPad, Android, and Windows Phone 7 */}
				<source type="video/mp4" src="assets/videos/video.mp4"/>
				Your browser does not support the video tag.
			</video> 
			<div  className="video-overlay"></div>
			<div className="home_text slider-caption text-center">
				  <h2 className="animated fadeInDownBig">Welcome our Monalisa</h2>
				  <p className="animated fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices. Duis dictum eget dolor vel blandit.</p>
				  <Link data-scroll className="btn btn-default btn-light-bg animated fadeInUpBig page-scroll" to="/HomeHtml5VideoL#about" onClick={goAbout}>Learn More</Link>
				  <Link data-scroll className="btn btn-default btn-light-bg-two animated fadeInRightBig page-scroll" to="#">Purchase now</Link>
			</div>										
		</section>
    </>
  )
}
