import Number from "../home/Number";
import Client from "../home/Client";
import Hero from "../home/Hero";
import LogoCarousel from "../home/LogoCarousel";
export default function About() {
  const brass = [
    { name: "Olivia Harper", role: "Chief Executive Officer", img:"/images/PNS/Dlh.png" },
    { name: "Daniel Cruz", role: "Head of Engineering", img:"/images/PNS/Dlh.png"  },
    { name: "Sofia Bennett", role: "Solar Project Manager", img:"/images/PNS/Dlh.png"  },
    { name: "Sofia Bennett", role: "Solar Project Manager", img:"/images/PNS/Dlh.png"  },
    { name: "Sofia Bennett", role: "Solar Project Manager", img:"/images/PNS/Dlh.png"  },
  ];
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/images/Alat Berat.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
        className="text-white text-center"
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          About Us
        </h1>
        <a className="text-decoration-none" href="/">
          Home
        </a>
        <span> / About Us</span>
      </div>
      {/* owner */}
      <div className="container my-5 py-5">
        <div className="row align-items-center my-5">
          <div className="d-flex align-items-center">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 d-flex">
                <div
                  className="text-white"
                  style={{
                    backgroundColor: "#0d6dfc",
                    padding: "30px",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    width: "15rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="fw-bold" style={{ fontSize: "4rem" }}>
                    15+
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Tahun Pengalaman
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 pe-lg-5 text-center text-lg-start">
                <div
                  className="fw-semibold text-center text-lg-start"
                  style={{ fontSize: "3.5rem", marginRight: "11rem" }}
                >
                  Selalu Ada Selalu Bisa. <br className="d-lg-none" />
                  <span className="d-inline d-lg-block">
                    Solusiklik, Penyedia Terlengkap No. 1 di Indonesia.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-end">
            <img
              src="/images/Alat Berat.png"
              alt="Worker"
              className="img-fluid shadow"
              style={{ width: "25rem", height: "35rem" }}
            />
          </div>
          <div className="col-lg-6 ps-lg-5 mb-4">
            <div
              className="d-flex align-items-center mb-4"
              style={{ textAlign: "justify" }}
            >
              <div>
                <h5 className="fw-bold fs-3">Siapa Kami</h5>
                <p className="small text-muted lh-lg fs-6">
                  Solusiklik adalah penyedia barang dan jasa terlengkap No. 1 di
                  Indonesia yang berfokus pada platform E-Katalog LKPP untuk
                  menyederhanakan proses pengadaan bagi instansi pemerintah,
                  BUMN, dan korporasi. Berpegang pada semangat “Selalu Ada
                  Selalu Bisa”, kami menggabungkan kemudahan platform digital
                  yang transparan dengan keandalan tim ahli yang solutif,
                  memposisikan diri bukan hanya sebagai penjual, melainkan
                  sebagai mitra strategis tepercaya untuk menyukseskan setiap
                  kebutuhan Anda di seluruh Indonesia.
                </p>
                <h5 className="fw-bold fs-3">Misi Kami</h5>
                <p className="small text-muted lh-lg fs-6">
                  Misi kami adalah merevolusi dan menyederhanakan proses
                  pengadaan barang dan jasa bagi instansi pemerintah, BUMN, dan
                  korporasi di seluruh Indonesia melalui platform digital yang
                  terintegrasi, transparan, dan andal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* petinggi */}
      <div className="container py-5">
        <h1 className="fw-bold mb-5 d-flex justify-content-center">
          Konsultasi Dengan Tim Kami
        </h1>
        <div className="row text-center d-flex justify-content-center">
          {brass.map((person, idx) => (
            <div key={idx} className="col-md-2 mb-4">
              <img src={person.img} alt="person" className="img-fluid"/>
              <h5 className="fw-bold fs-1">{person.name}</h5>
              <p className="text-muted fw-semibold">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <LogoCarousel />
      <Hero />
      <Number />
      <Client />
    </div>
  );
}
