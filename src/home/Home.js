import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/Home.module.css";
import { useEffect, useState } from "react";
import Why from "./Why";
import Number from "./Number";
import Experience from "./Experience";
import Service from "./Service";
import Slider from "./Slider";
import Innovation from "./Innovation";
import Hero from "./Hero";
import GreenPower from "./GreenPower";
import Banner from "./Banner";
import Client from "./Client";
import LogoCarousel from "./LogoCarousel";
import HeavyEquipment from "../procurement/HeavyEquipment";

const images = [
  "/images/Alat Berat.png",
  "/images/Alat IT.png",
  "/images/alat kesehatan.png",
  "/images/alat laboratorium.png",
  "/images/Kendaraan.png",
  "/images/Mobil.png",
  "/images/Perkakas.png",
];

function Home() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Konten Kiri */}
          <div className="col-lg-6">
            <div className="p-5 p-md-5 ms-5">
              <div className="text-md-start text-center">
                <p className={`${styles["title"]}`}>
                  Penyedia <span style={{ color: "red"}}>E-katalog Inaproc</span> Terlengkap & Terpercaya Nomor 1 di
                  Indonesia
                </p>
                <p className="text-muted" style={{ lineHeight: 2 }}>
                  Solusi Klik menyediakan berbagai macam produk berkualitas
                  mulai dari Alat Berat, Elektronik, Furniture, Alat Kesehatan,
                  dan masih banyak lagi! Mau pengadaan barang di{" "}
                  <b>eKatalog LKPP</b>? Ya
                  <b> Solusi Klik</b> jawabannya!!
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center my-4">
                  <a
                    className="btn btn-primary d-flex align-items-center justify-content-center"
                    style={{
                      borderRadius: "3rem",
                      fontSize: "14px",
                      fontWeight: "500",
                      gap: "10px",
                      width: "12rem",
                    }}
                  >
                    Hubungi Kami
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{
                        color: "white",
                        padding: "10px",
                        fontSize: "20px",
                      }}
                    ></i>
                  </a>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <h5 className="fw-bold">Our Client</h5>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                      {/* Avatar 1 */}
                      <img
                        src="/images/bnn.png"
                        alt="User 1"
                        className="rounded-circle border border-4 border-white"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          marginLeft: "-10px",
                          zIndex: 3,
                        }}
                      />
                      {/* Avatar 2 */}
                      <img
                        src="/images/kemenhan.png"
                        alt="User 2"
                        className="rounded-circle border border-4 border-white"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          marginLeft: "-10px",
                          zIndex: 2,
                        }}
                      />
                      {/* Avatar 3 */}
                      <img
                        src="/images/pupr.jpg"
                        alt="User 3"
                        className="rounded-circle border border-4 border-white"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          marginLeft: "-10px",
                          zIndex: 1,
                        }}
                      />
                      {/* Plus Button */}
                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#eee",
                          marginLeft: "-10px",
                          zIndex: 0,
                        }}
                      >
                        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star-half-alt text-warning"></i>
                      <span className="ms-2 fw-bold" style={{ color: "#222" }}>
                        (4.5/5)
                      </span>
                    </div>
                    {/* <p className="fw-medium me-3 mb-0">(4.5/5)</p> */}
                    <div className="d-flex align-items-center mt-4">
                      <h1 className="mb-0 me-2">4.5+</h1>
                      <p className="mb-0 me-5" style={{ fontSize: "15px" }}>
                        Review Positif Dari Instansi Pemerintah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gambar Kanan */}
          <div className="col-lg-6 p-0">
            <div
              className={`${styles["image-container"]}`}
              style={{ height: "100vh", width: "100%" }}
            >
              <img
                key={index}
                src={images[index]}
                alt="Slideshow"
                className={`${styles["slideshow-image"]} ${
                  fade ? styles["fade-in"] : styles["fade-out"]
                }`}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Number />
      <Experience />
      <Client />
      <Service />
      <Innovation />
      <Hero />
      <GreenPower />
      <Slider />
      <HeavyEquipment />
      <LogoCarousel />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Banner />
      </div>
      {/* <Why /> */}
    </div>
  );
}

export default Home;
