import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0c232b",
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
              <img
                className="w-100"
                src="/images/Logo Solusi Klik (White).png"
              />
              Selalu Ada Selalu Bisa
            </h3>
            <p className="medium">
              Penyedia terlengkap no.1 di Indonesia. Pengiriman cepat, produk
              berkualitas.
            </p>
            {/* ICON SOSMED */}
            <div className="d-flex gap-3">
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="d-inline-flex align-items-center justify-content-center text-dark"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  fontSize: "15px",
                  textDecoration: "none",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 mb-4 px-5">
            <h5 className="fw-bold">Quick Links</h5>
            <hr />
            <ul className="list-unstyled small">
              {[
                "Home",
                "Produk",
                "Tentang Kami",
                "Projek",
                "Blog",
                "Kontak Kami",
              ].map((item) => (
                <li key={item} className="mb-2 d-flex">
                  <div
                    className="d-flex justify-content-center align-items-center me-2"
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "2px solid #0d6dfc",
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      color: "#0d6dfc",
                    }}
                  >
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "7px" }}
                    ></i>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 mb-4 px-5">
            <h5 className="fw-bold">Cabang Kami</h5>
            <hr></hr>
            <ul className="list-unstyled small">
              {[
                "SOLUSI KLIK AGENG PRADIKSA",
                "SOLUSI KLIK MEDAN JAYA",
                "SOLUSI KLIK GLOBAL",
                "SOLUSI KLIK TANJUNG PURA",
                "SOLUSI KLIK CERDAS INOVASI",
                "SOLUSI KLIK SUROBOYO MANDIRI",
              ].map((item) => (
                <li key={item} className="mb-2 d-flex">
                  <div
                    className="d-flex justify-content-center align-items-center me-2"
                    style={{
                      width: "15px",
                      height: "15px",
                      border: "2px solid #0d6dfc",
                      borderRadius: "50%",
                      backgroundColor: "transparent",
                      color: "#0d6dfc",
                    }}
                  >
                    <i
                      className="fa-solid fa-chevron-right"
                      style={{ fontSize: "7px" }}
                    ></i>
                  </div>
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
                    backgroundColor: "#0d6dfc",
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
                  <p className="mb-0">62813-6100-9799</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-3">
                <span
                  className="d-inline-flex align-items-center justify-content-center text-dark me-2"
                  style={{
                    backgroundColor: "#0d6dfc",
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
                  <p className="mb-0">Sales@solusiklik.co.id</p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <span
                  className="d-inline-flex align-items-center justify-content-center text-dark me-2"
                  style={{
                    backgroundColor: "#0d6dfc",
                    width: "100px",
                    height: "40px",
                    borderRadius: "50%",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa-solid fa-user"></i>
                </span>
                <div>
                  <p className="mb-1 fw-bold">Alamat</p>
                  <p className="mb-0">Karawaci Office Park, Blok D No.3, Panunggangan Bar., Kec. Cibodas, Kota Tangerang, Banten 15138</p>
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
                  backgroundColor: "#0d6dfc",
                  borderRadius: "50px",
                  padding: "0.75rem 1.5rem",
                  fontWeight: "500",
                  color: "#fff",
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
            <p className="small mb-0">© 2025 Solusi Klik. All Rights Reserved.</p>
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
