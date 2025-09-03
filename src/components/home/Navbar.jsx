import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";

// constant sections list 
const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "feature", label: "Features" },
  { id: "team", label: "Team" },
  { id: "pricing", label: "Pricing" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // scrollspy logic
      let current = "#home";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop - 100; 
          if (window.scrollY >= offsetTop) {
            current = `#${section.id}`;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar navbar-default navbar-fixed-top menu-top ${
        scrolled ? "menu-shrink" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link smooth to="#home" className="navbar-brand">
            <img src="assets/img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-collapse collapse">
          <nav>
            <ul className="nav navbar-nav navbar-right">
              {sections.map((item, idx) => (
                <li
                  key={idx}
                  className={active === `#${item.id}` ? "active" : ""}
                >
                  <Link smooth className="page-scroll" to={`#${item.id}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
