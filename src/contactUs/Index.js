import Carousel from "./Carousel"
import Map from "./Map"
import Contact from "./Contact"

export default function ContactUs() {

  return (
    <div>
      {/* banner */}
      <div
        style={{
          backgroundImage: 'url("/images/Alat Berat.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          // display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
        className="text-white text-center"
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          Contact Us
        </h1>
        <a className="text-decoration-none" href="/">
          Home
        </a>
        <span> / Contact Us</span>
      </div>
      <Contact/>
      <Map/>
      <Carousel/>
    </div>
  );
}
