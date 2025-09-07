import { Link } from "react-router-dom";
import Preloader from '../components/home/Preloader';
import '../assets/css/style.css';


export default function Monalisa() {
return (
<>
    <Preloader />
    {/* START HOME DESIGN */}
    <header id="home" className="hero">
        <div className="container">
            <div className="col-md-10 col-md-offset-1 col-xs-12 text-center">
                <div className="hero-text">
                    <img src="demo/img/logo.png" alt="" />
                    <h1>Health & Beauti HTML Template</h1>
                </div>{/*//.HERO-TEXT */}
            </div>
        </div>
    </header>
    {/*END HOME DESIGN */}

    {/*START DEMO*/}
    <section className="demo">
        <div className="container">
            <div className="row text-center">
                <h2 className="version_title">Light Version</h2>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeDefaultL" target="_blank">
                        <img src="demo/img/1.png" className="img-responsive" alt="" />
                        <h3>Home Default</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeParallaxL" target="_blank">
                        <img src="demo/img/2.png" className="img-responsive" alt="" />
                        <h3>Home Parallax</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeTextSliderL" target="_blank">
                        <img src="demo/img/3.png" className="img-responsive" alt="" />
                        <h3>Home Text Slider</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeTextRotatorL" target="_blank">
                        <img src="demo/img/4.png" className="img-responsive" alt="" />
                        <h3>Home Text Rotator</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeHtml5VideoL" target="_blank">
                        <img src="demo/img/5.png" className="img-responsive" alt="" />
                        <h3>Home HTML5 Video</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeYoutubeL" target="_blank">
                        <img src="demo/img/6.png" className="img-responsive" alt="" />
                        <h3>Home Youtube</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <h2 className="version_title version_title_dark">Dark Version</h2>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeDefault" target="_blank">
                        <img src="demo/img/1.png" className="img-responsive" alt="" />
                        <h3>Home Default</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeParallax" target="_blank">
                        <img src="demo/img/2.png" className="img-responsive" alt="" />
                        <h3>Home Parallax</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeTextSlider" target="_blank">
                        <img src="demo/img/3.png" className="img-responsive" alt="" />
                        <h3>Home Text Slider</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeTextRotator" target="_blank">
                        <img src="demo/img/4.png" className="img-responsive" alt="" />
                        <h3>Home Text Rotator</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeHtml5Video" target="_blank">
                        <img src="demo/img/5.png" className="img-responsive" alt="" />
                        <h3>Home HTML5 Video</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 wow zoomIn">
                    <div className="demo_img">
                        <Link to="/HomeYoutube" target="_blank">
                        <img src="demo/img/6.png" className="img-responsive" alt="" />
                        <h3>Home Youtube</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-md-12">
                    <div className="thankyou_message">
                        <img src="demo/img/rating.png" className="img-responsive" alt="" />
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
                Monalisa &copy; 2025. All Rights Reserved by Nanosoft.
            </p>
        </div>
    </footer>
    {/*END FOOTER */}

    <style>
        {
            ` body {
                background: #f1f1f1;
                font-family: "Montserrat", sans-serif;
                color: #444;
                background: url(../img/bg.jpg)no-repeat;
                background-attachment: fixed;
                background-size: cover;
                position: relative;
                z-index: 0;
            }

            body::before {
                background: rgba(0, 0, 0, 0.9);
                content: "";
                position: fixed;
                height: 100%;
                left: 0;
                top: 0;
                width: 100%;
                z-index: -1;
            }

            a {
                color: #444;
                outline: none;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }

            a:hover,
            a:focus {
                outline: none;
                text-decoration: none;
                color: #8bc34a;
            }

            /*START BTN*/
            .btn-light-bg {
                border: 2px solid #fff;
                color: #fff;
                padding: 12px 30px;
                text-transform: uppercase;
                transition: all 0.4s ease 0s;
            }

            .btn-light-bg:hover,
            .btn-light-bg:focus {
                background: #fff;
                border: 2px solid #fff;
                color: #333;
            }

            /*END BTN*/
            .hero-text img {
                margin-bottom: 10px;
                padding-top: 140px;
                width: 300px;
            }

            .hero-text h1 {
                color: #fff;
                font-weight: 700;
                margin: 0;
                overflow: hidden;
                text-transform: uppercase;

                text-transform: uppercase;
            }

            @media only screen and (max-width:480px) {
                .hero-text h1 {
                    font-size: 30px;
                    line-height: 40px;
                }
            }

            .version_title {
                background: #fff none repeat scroll 0 0;
                border: 4px double #333;
                color: #333;
                font-size: 28px;
                margin: auto auto 20px;
                padding: 10px;
                position: relative;
                text-transform: uppercase;
                width: 300px;
            }

            .version_title_dark {
                background: #000 none repeat scroll 0 0;
                border: 4px double #333;
                color: #fff;
                margin : 40px auto 20px;
            }

            .demo {
                padding-top: 60px;
            }

            .demo_img {
                margin-bottom: 60px;
            }

            .demo_img h3 {
                color: #fff;
                font-size: 22px;
                font-weight: 700;
                margin: 20px 0;
                text-transform: uppercase;
                transition: all 0.4s ease 0s;
            }

            .demo_img:hover h3 {
                color: #8bc34a;
                -webkit-transition: all 0.4s ease 0s;
                transition: all 0.4s ease 0s;
            }

            .thankyou_message {
                background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;
                border-radius: 3px;
                margin: 70px 0;
                padding: 40px 15px;
            }

            .thankyou_message img {
                display: inline;
                width: 250px;
            }

            .thankyou_message h3 {
                color: #fff;
                letter-spacing: 0;
                margin: 20px 0 15px;
                text-transform: uppercase;
            }

            .copyright {
                border-top: 1px solid #333;
                color: #fff;
                font-weight: 700;
                margin-bottom: 0;
                padding: 30px 0;
                position: relative;
            }

            `
        }
    </style>
</>
)
}
