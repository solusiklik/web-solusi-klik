import 'bootstrap/dist/css/bootstrap.min.css';

function Why() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div
          className="col-md-6 text-white d-flex align-items-center"
          style={{
            backgroundImage: "url('/images/solar-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
            padding: "3rem"
          }}
        >
          <div>
            <h2 className="fw-bold" style={{ fontSize: "64px", color: "#d8fa52" }}>20+</h2>
            <h4 className="fw-bold mb-3">Years of Experience</h4>
            <h3 className="fw-bold text-white">
              Why Choose <span style={{ color: "#d8fa52" }}>Bavion?</span>
            </h3>
            <p style={{ maxWidth: "500px" }}>
              We go beyond just installing solar panels — we build lasting energy solutions
              that are efficient, affordable, and environmentally responsible.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 bg-white">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="border p-4 h-100 text-start">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                  style={{ width: "60px", height: "60px", backgroundColor: "#d8fa52" }}
                >
                  <i className="fa-solid fa-shield-halved fa-lg"></i>
                </div>
                <h5 className="fw-bold">Custom Solar Solutions</h5>
                <p className="text-muted">
                  Every system we build is tailored to your energy needs, location, & budget lorem ipsum dolor amet.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border p-4 h-100 text-start">
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                  style={{ width: "60px", height: "60px", backgroundColor: "#d8fa52" }}
                >
                  <i className="fa-solid fa-certificate fa-lg"></i>
                </div>
                <h5 className="fw-bold">Certified & Experienced</h5>
                <p className="text-muted">
                  Every system we build is tailored to your energy needs, location, & budget lorem ipsum dolor amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
