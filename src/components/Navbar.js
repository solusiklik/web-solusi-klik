import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top px-4 py-2 custom-navbar ${scrolled ? "bg-white shadow-sm" : "bg-transparent"} transition-navbar`} style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container-fluid d-flex align-items-center justify-content-center gap-5">
        {/* Kiri: logo + nav */}
        <div className="d-flex align-items-center gap-5">
          <div className="d-flex align-items-center gap-3">
            <img src="images/2.png" alt="Logo 1" height="40" />
            <img src="images/3.png" alt="Logo 2" height="30" />
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="blur-box navbar-nav gap-4 align-items-center mb-0 fs-1">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Pengadaan
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      e-Katalog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Inaproc
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#article">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Kanan: toggler + store */}
        <div className="d-flex align-items-center gap-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-none d-lg-block">
            <a
              href="/store"
              className="btn btn-primary d-flex align-items-center gap-2 rounded-pill px-4 py-2"
            >
              Our Store{" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
