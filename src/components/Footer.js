import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0761e6",
        color: "white",
        marginTop: "5rem",
        paddingTop: "11rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container text-white pb-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h3 className="fw-bold">
              <i
                className="fa-solid fa-sun me-2"
                style={{ color: "#d3ff3f" }}
              ></i>
              Solar & Renewable Energy
            </h3>
            <h6>Solar & Renewable Energy</h6>
            <p className="small">
              Lorem ipsum dolor sit amet co adipiscing elit ut elit tellus
              luctus nec ullamc pulvinar dapibus leo ipsum dolor.
            </p>
            {/* ICON SOSMED */}
            <div className="d-flex gap-3">
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center bg-light text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center bg-light text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center bg-light text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 mb-4 px-5">
            <h5 className="fw-bold">Quick Links</h5>
            <hr></hr>
            <ul className="list-unstyled small">
              {[
                "Home",
                "About Us",
                "Services",
                "Project",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <i
                    className="fa-solid fa-circle-chevron-right me-2"
                    style={{ color: "#d2ff40" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 mb-4 px-5">
            <h5 className="fw-bold">Services</h5>
            <hr></hr>
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
                  <i
                    className="fa-solid fa-circle-chevron-right me-2"
                    style={{ color: "#d2ff40" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT INFORMASI */}
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold">Contact Information</h5>
            <hr></hr>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start mb-3">
                <span
                  className="d-inline-flex align-items-center justify-content-center text-dark me-2"
                  style={{
                    backgroundColor: "#d2ff40",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa-solid fa-headset"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Phone</p>
                  <p className="mb-0">0761-8523-398</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <span
                  className="d-inline-flex align-items-center justify-content-center text-dark me-2"
                  style={{
                    backgroundColor: "#d2ff40",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Email</p>
                  <p className="mb-0">hello@domainsite.com</p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <span
                  className="d-inline-flex align-items-center justify-content-center text-dark me-2"
                  style={{
                    backgroundColor: "#d2ff40",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa-solid fa-user"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Address</p>
                  <p className="mb-0">KLLG st, No.99, Pku City, ID 28289</p>
                </div>
              </li>
            </ul>
            <h5 className="fw-bold mt-4">
              Subscribe Our <br /> Newsletters
            </h5>
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
                Subscribe
                <span className="ms-2">
                  <i className="fa-regular fa-circle-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="container text-white mb-5  border-top border-secondary pt-5">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <h2 className="fw-bold">
                Subscribe Our <br /> Newsletters
              </h2>
            </div>
            <div className="col-lg-9 d-flex justify-content-end my-5">
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
        </div> */}
        <hr></hr>
        <div className="row pt-3 mt-3">
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
