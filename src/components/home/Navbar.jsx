
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
 

  return (
   <div className="navbar navbar-default navbar-fixed-top menu-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
					<Link to="/" className="navbar-brand"><img src="assets/img/logo.png" alt="logo"/></Link>
                </div>
                <div className="navbar-collapse collapse">
					<nav>
						<ul className="nav navbar-nav navbar-right">
							<li><Link className="page-scroll" smooth to="#home">Home</Link></li>
							<li><Link className="page-scroll" smooth to="#about">About</Link></li>							
							<li><Link className="page-scroll" smooth to="#gallery">Gallery</Link></li>
							<li><Link className="page-scroll" smooth to="#feature">Features</Link></li>
							<li><Link className="page-scroll" smooth to="#team">Team</Link></li>
							<li><Link className="page-scroll" smooth to="#pricing">Pricing</Link></li>						
							<li><Link className="page-scroll" smooth to="#blog">Blog</Link></li>			
							<li><Link className="page-scroll" smooth to="#contact">Contact</Link></li>
						</ul>
					</nav>
                </div> 
            </div>
        </div> 
  );
}
