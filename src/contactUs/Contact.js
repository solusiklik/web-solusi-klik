export default function Contact() {
  return (
      <div className="container mt-5 py-5">
        <div className="row g-5">
          <div className="col-lg-5 p-4">
            <h2 className="fw-semibold mb-4" style={{ fontSize: "3rem" }}>
              Get in Touch
            </h2>
            <p className="text-muted mb-4 lh-lg" style={{ textAlign: "justify" }}>
              Apakah Anda ingin berkonsultasi mengenai kebutuhan pengadaan,
              mencari produk tertentu untuk instansi, atau butuh informasi lebih
              lanjut tentang layanan kami? Tim Solusi Klik siap membantu Anda
              dalam setiap tahapan proses pengadaan. Segera hubungi kami untuk
              solusi pengadaan yang efektif, transparan, dan akuntabel.
            </p>

            <div className="d-flex align-items-start mb-3">
              <div
                className="text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="ms-3">
                <div className="text-muted">Phone</div>
                <div className="fw-semibold">0813-6100-9799</div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div
                className="text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="ms-3">
                <div className="text-muted">Email</div>
                <div className="fw-semibold">sales@solusiklik.co.id</div>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div
                className="text-white rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "60px",
                  height: "40px",
                  backgroundColor: "#0d6dfc",
                }}
              >
                <i class="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="ms-3">
                <div className="text-muted">Address</div>
                <div className="fw-semibold">
                  Karawaci Office Park, Blok D No.3, Panunggangan Bar., Kec.
                  Cibodas, Kota Tangerang, Banten 15138
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="col-lg-7 p-5 border border-light"
            style={{ backgroundColor: "#f9ffec" }}
          >
            <h3 className="fw-semibold mb-5 fs-1">Send us a Message</h3>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-pill fw-semibold"
                    placeholder="Full Name"
                    style={{
                      height: "3rem",
                      fontSize: "12px",
                      borderColor: "transparant",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control rounded-pill fw-semibold"
                    placeholder="Email Address"
                    style={{ height: "3rem", fontSize: "12px" }}
                  />
                </div>
                <div className="col-md-6 d-flex">
                  <span
                    className="text-white d-flex align-items-center justify-content-center px-3"
                    style={{
                      backgroundColor: "#0d6dfc",
                      borderTopLeftRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      border: "1px solid #ced4da",
                      fontWeight: "500",
                    }}
                  >
                    <img
                      src="https://flagcdn.com/w40/id.png"
                      alt="Indonesian Flag"
                      style={{
                        width: "24px",
                        height: "16px",
                        marginRight: "8px",
                      }}
                    />
                    <span>+62</span>
                  </span>
                  <div className="d-flex align-items-center"></div>
                  <input
                    type="text"
                    className="form-control rounded-end-pill fw-semibold"
                    placeholder="Phone Number"
                    style={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      height: "3rem",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control rounded-pill fw-semibold"
                    placeholder="Subject"
                    style={{ height: "3rem", fontSize: "12px" }}
                  />
                </div>
                <div className="col-12 p-1">
                  <textarea
                    className="form-control fw-semibold p-3"
                    rows="4"
                    placeholder="Message"
                    style={{
                      height: "8rem",
                      fontSize: "12px",
                      borderRadius: "1.5rem",
                    }}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="text-white btn text-dark rounded-pill px-4"
                    style={{
                      height: "3.5rem",
                      backgroundColor: "#0d6dfc",
                      fontWeight: 500,
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
