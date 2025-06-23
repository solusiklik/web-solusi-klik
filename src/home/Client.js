import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dinas Lingkungan Hidup",
    role: "Kab. Gresik. Jawa Timur",
    image: "/images/PNS/Dlh.png",
    text: "Kami melakukan pembelian Bulldozer dan Wheel Loader untuk operasional TPA melalui Solusi Klik. Proses pengadaannya cukup lancar dan teknisi cukup responsif saat ada kendala teknis. Suku cadang tersedia dan ada layanan purna jual yang jelas.",
  },
  {
    name: "Dinas PUPR",
    role: "Provinsi Sumatera Barat",
    image: "/images/PNS/PU.png",
    text: "Kami bekerja sama dengan Solusi Klik untuk pengadaan alat berat. Secara umum, prosesnya sesuai aturan e-purchasing dan tim mereka komunikatif sejak awal. Pengiriman juga sesuai jadwal.",
  },
  {
    name: "RSUD Dr. Zainoel Abidin",
    role: "Kota Banda Aceh – Aceh",
    image: "/images/PNS/RSUD.png",
    text: "Solusi Klik membantu kami dalam pengadaan beberapa alat kesehatan. Barang dikirim sesuai pesanan dan mendapat dukungan teknis saat instalasi. Komunikasi selama proses juga cukup baik.",
  },
  {
    name: "Dinas Pendidikan",
    role: "Provinsi Kalimantan Tengah",
    image: "/images/PNS/DInas Pendidikan.png",
    text: "Kami membeli laptop dan proyektor untuk kebutuhan sekolah. Solusi Klik memfasilitasi proses pemesanan di e-Katalog, dan kami dibantu untuk memastikan spek sesuai kebutuhan. Pengiriman aman dan tepat waktu.",
  },
  {
    name: "BPBD",
    role: "Provinsi Nusa Tenggara Timur",
    image: "/images/PNS/BPBD.png",
    text: "Kami menggunakan layanan Solusi Klik untuk pengadaan tenda evakuasi dan genset. Secara keseluruhan, prosesnya berjalan baik dan tim cukup tanggap ketika kami butuh informasi teknis tambahan.",
  },
];

export default function Client() {
  return (
    <div
      className="text-white mt-5 py-5 px-3"
      style={{ backgroundColor: "#0a5bd1" }}
    >
      <div className="container text-center ">
        <h2 className="fw-semibold display-3 mx-5">
          Apa Kata Klien Kami Tentang Pengadaan Bersama Solusi Klik
        </h2>
        <p className="fs-5 text-light mt-3" style={{marginLeft:"15rem", marginRight:"15rem"}}>
          <b>Kepuasan Klien Adalah Prioritas Utama Kami </b>Dari kebutuhan pengadaan skala kecil hingga proyek besar lintas instansi, Solusi Klik telah membantu berbagai lembaga pemerintah menjalankan proses pengadaan secara efisien, transparan, dan sesuai regulasi. Inilah yang mereka sampaikan tentang pengalaman mereka bersama Solusi
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="d-flex align-items-center justify-content-end">
            {/* Avatar 1 */}
            <img
              src="/images/bnn.png"
              alt="User 1"
              className="rounded-circle border border-4 border-white"
              style={{
                width: "60px",
                height: "60px",
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
                width: "60px",
                height: "60px",
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
                width: "60px",
                height: "60px",
                objectFit: "cover",
                marginLeft: "-10px",
                zIndex: 1,
              }}
            />
            {/* Plus Button */}
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#eee",
                marginLeft: "-10px",
                zIndex: 0,
              }}
            >
              <span
                style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center">
          <div className="text-center text-lg-start d-flex gap-3">
            <div>
            <span
              className="mb-1 fw-bold"
              style={{ fontSize: "3.5rem", lineHeight: 1 }}
            >
              4.5+
            </span>

            </div>
            <div>
            <span className="mb-0 fw-semibold fs-5">
              Ulasan Positif dari<br/>
              Instansi
            </span>

            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} style={{height:"40rem"}}>
              <div
                className="p-5 h-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <div
                  style={{
                    minHeight: "380px",
                    fontSize: "1.1rem",
                  }}
                >
                  <div
                    className="text-dark display-5 mb-3"
                    style={{ lineHeight: 0 }}
                  >
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="fs-4 text-dark">{t.text}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle"
                    width="100"
                    height="100"
                  />
                  <div>
                    <strong className="text-primary d-block fs-5">{t.name}</strong>
                    <div className="fs-6 text-dark">{t.role}</div>
                    <div className="text-warning fs-4">★★★★★</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div
          className="swiper-button-prev-custom btn btn-light position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            left: "-100px",
            zIndex: 10,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: 0,
            fontSize: "25px",
          }}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="swiper-button-next-custom btn btn-light position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            right: "-100px",
            zIndex: 10,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: 0,
            fontSize: "25px",
          }}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
