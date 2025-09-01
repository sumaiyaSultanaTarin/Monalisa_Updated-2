import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  useEffect(() => {
    const collapse = document.querySelector(".navbar-collapse");

    const handleLinkClick = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" &&
        !target.classList.contains("dropdown-toggle")
      ) {
        collapse?.classList.remove("in", "show"); 
        collapse?.classList.add("collapse");
      }
    };

    collapse?.addEventListener("click", handleLinkClick);

    return () => {
      collapse?.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <div className="navbar navbar-default navbar-fixed-top menu-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link to="/#home" className="navbar-brand">
            <img src="assets/img/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="navbar-collapse collapse">
          <nav>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link smooth to="/#home">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="/#about">
                  About
                </Link>
              </li>
              <li>
                <Link smooth to="/#gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link smooth to="/#feature">
                  Features
                </Link>
              </li>
              <li>
                <Link smooth to="/#team">
                  Team
                </Link>
              </li>
              <li>
                <Link smooth to="/#pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link smooth to="/#blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link smooth to="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
