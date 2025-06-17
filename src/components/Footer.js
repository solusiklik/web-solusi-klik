import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#071c2f",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
      className="pt-5"
    >
      {/* Newsletter */}
      <div className="container text-white mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold">Subscribe Our <br /> Newsletters</h2>
          </div>
<div className="d-flex justify-content-center my-5">
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "50px",
      padding: "5px",
      display: "flex",
      alignItems: "center",
      maxWidth: "700px",
      width: "100%",
    }}
  >
    <input
      type="email"
      placeholder="Enter your email here"
      className="form-control border-0 shadow-none"
      style={{
        borderRadius: "50px",
        padding: "1rem 1.5rem",
        fontSize: "1rem",
      }}
    />
    <button
      className="btn d-flex align-items-center justify-content-between"
      style={{
        backgroundColor: "#d3ff3f",
        borderRadius: "50px",
        padding: "0.75rem 1.5rem",
        fontWeight: "500",
        color: "#000",
        whiteSpace: "nowrap",
      }}
    >
      Subscribe Now
      <span className="ms-2">
        <i className="fa-regular fa-circle-right"></i>
      </span>
    </button>
  </div>
</div>

        </div>
      </div>

      <div className="container text-white pb-5 border-top border-secondary pt-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h3 className="fw-bold">
              <i className="fa-solid fa-sun me-2" style={{ color: "#d3ff3f" }}></i>Bavion
            </h3>
            <h6>Solar & Renewable Energy</h6>
            <p className="small">
              Lorem ipsum dolor sit amet co adipiscing elit ut elit tellus
              luctus nec ullamc pulvinar dapibus leo ipsum dolor.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark bg-light rounded-circle p-2">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-dark bg-light rounded-circle p-2">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-dark bg-light rounded-circle p-2">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled small">
              {["Home", "About Us", "Services", "Project", "Blog", "Contact Us"].map((item) => (
                <li key={item} className="mb-2">
                  <i className="fa-solid fa-circle-chevron-right text-success me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled small">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Solar Panel Installation",
                "Energy Storage Systems",
                "EV Charging Stations",
                "Off–Grid Solar Systems",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <i className="fa-solid fa-circle-chevron-right text-success me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold">Contact Information</h5>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start mb-3">
                <span className="bg-success text-dark p-2 rounded-circle me-3">
                  <i className="fa-solid fa-headset"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Phone</p>
                  <p className="mb-0">0761-8523-398</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="bg-success text-dark p-2 rounded-circle me-3">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Email</p>
                  <p className="mb-0">hello@domainsite.com</p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <span className="bg-success text-dark p-2 rounded-circle me-3">
                  <i className="fa-solid fa-user"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Address</p>
                  <p className="mb-0">KLLG st, No.99, Pku City, ID 28289</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-top border-secondary pt-3 mt-3">
          <div className="col-lg-6">
            <p className="small mb-0">© 2025 Krakenbox. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a href="#" className="text-white text-decoration-none me-3 small">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-decoration-none small">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
