import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/Alat Berat.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-white text-center"
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>About Us</h1>
      </section>

      {/* Experience + Mission */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4">
            <h2 className="fw-bold mb-3">
              Driving the Global Shift to Clean Energy Through Innovative,
              Scalable, and Sustainable Solar Solutions
            </h2>
            <div className="d-flex align-items-center mb-4">
              <div
                className="text-center me-4"
                style={{
                  backgroundColor: "#f5ff00",
                  padding: "20px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                20+ <br />
                <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                  Years of Experience
                </span>
              </div>
              <div>
                <h5 className="fw-bold">Who We Are</h5>
                <p className="small text-muted mb-2">
                  We are more than just a solar energy company—we are
                  changemakers. Our solutions empower organizations to reduce
                  energy costs while contributing to a cleaner planet.
                </p>
                <h5 className="fw-bold">Our Mission</h5>
                <p className="small text-muted">
                  Our mission is to lead the world in the transition to
                  renewable energy through sustainable solutions that are both
                  innovative and economically viable.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/images/Alat Berat.png"
              alt="Worker"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-4" style={{ backgroundColor: "#06212c" }}>
        <div className="container d-flex justify-content-between flex-wrap text-white py-3">
          {["crown", "orbit", "roots", "griffin", "carbon"].map((logo, idx) => (
            <img
              key={idx}
              src={`/images/Alat Berat.png`}
              alt={logo}
              style={{ height: "40px", margin: "10px" }}
            />
          ))}
        </div>
      </section>

      {/* Trusted Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">
              Your Trusted Partner in Solar & Renewable Solutions.
            </h3>
            <p className="text-muted mb-3">
              Bavion is a trusted solar and renewable energy company driven to
              accelerate a green transition, and efficient solar panel use.
            </p>
            <p className="text-muted mb-4">
              Our team of the best engineers and trusted professionals help our
              clients with affordable, energy-efficient, and sustainable
              solutions.
            </p>
            <button className="btn btn-dark rounded-pill px-4 py-2">
              Clean. Reliable. Renewable. <i className="fa-solid fa-arrow-right ms-2" />
            </button>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="/images/Alat Berat.png"
              alt="Worker"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Heading (tanpa slider) */}
      <section
        className="text-white text-center py-5"
        style={{ backgroundColor: "#06212c" }}
      >
        <h3 className="fw-bold">What Our Clients Say About Going Solar With Bavion</h3>
        {/* Slider section bisa ditambahkan jika ingin */}
      </section>

      {/* Experts Section */}
      <section className="container py-5">
        <h3 className="fw-bold mb-5">
          Meet the Experts Powering Tomorrow’s Energy Solutions
        </h3>
        <div className="row text-center">
          {[
            { name: "Olivia Harper", role: "Chief Executive Officer" },
            { name: "Daniel Cruz", role: "Head of Engineering" },
            { name: "Sofia Bennett", role: "Solar Project Manager" },
          ].map((person, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <h5 className="fw-bold">{person.name}</h5>
              <p className="text-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
