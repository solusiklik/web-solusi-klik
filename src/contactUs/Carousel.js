import React, { useState } from "react";
import styles from "../css/ContactUs.module.css";

const faqs = [
  {
    question: "Apa saja produk yang tersedia di Solusi Klik?",
    answer:
      "Kami menyediakan beragam produk kebutuhan instansi pemerintah, mulai dari kendaraan operasional, alat berat, ambulans, alat pertanian, peralatan medis, hingga alat edukasi dan perlengkapan kantor. Kami memastikan produk kami lengkap dan selalu tersedia untuk kebutuhan Anda.",
  },
  {
    question: "Bagaimana proses pemesanan di Solusi Klik?",
    answer:
      "Anda bisa melakukan pemesanan langsung melalui platform e-Katalog LKPP (Inaproc) atau menghubungi tim kami secara langsung. Tim Solusi Klik siap membantu mulai dari konsultasi produk hingga proses pengadaan selesai.",
  },
  {
    question: "Berapa lama waktu pengiriman produk dari Solusi Klik?",
    answer:
      "Kami memahami pentingnya ketepatan waktu dalam pengadaan barang pemerintah. Oleh karena itu, kami memastikan pengiriman cepat dan tepat waktu ke seluruh wilayah Indonesia.",
  },
  {
    question: "Apakah produk di Solusi Klik bergaransi?",
    answer:
      "Ya, semua produk yang kami sediakan dilengkapi dengan garansi resmi. Kami juga menyediakan layanan purna jual, dukungan teknis, serta ketersediaan suku cadang.",
  },
  {
    question: "Apakah Solusi Klik melayani pengiriman ke seluruh Indonesia?",
    answer:
      "Tentu saja. Solusi Klik memiliki jaringan logistik yang kuat dan terintegrasi, memungkinkan kami untuk melakukan pengiriman produk ke seluruh Indonesia, bahkan hingga ke wilayah terpencil dengan cepat dan aman.",
  },
  {
    question: "Apakah produk Solusi Klik memiliki sertifikasi dan TKDN?",
    answer:
      "Ya, kami menjamin produk-produk yang tersedia di Solusi Klik telah memenuhi standar sertifikasi resmi serta Tingkat Komponen Dalam Negeri (TKDN), memastikan kualitas terbaik dan sesuai regulasi pengadaan pemerintah.",
  },
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  return (
    <div className="container my-5 pt-5">
      <div className="row g-5 align-items-start">
        {/* Left side: Title */}
        <div className="col-lg-5">
          <h2 className="fw-bold display-5">
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="col-lg-7">
          {faqs.map((faq, index) => (
            <div key={index} className="border-bottom py-3">
              <div
                className="d-flex justify-content-between align-items-center"
                onClick={() => toggleFAQ(index)}
                style={{ cursor: "pointer" }}
              >
                <span className="fw-semibold fs-5">{faq.question}</span>
                <div
                  className={`rounded-circle d-flex justify-content-center align-items-center text-white ${
                    activeIndex === index ? "bg-dark" : "bg-primary"
                  }`}
                  style={{
                    width: "30px",
                    height: "30px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                >
                  {activeIndex === index ? "-" : "+"}
                </div>
              </div>
              <div
                className={`${styles.faqAnswer} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                <div className="text-muted" style={{ textAlign: "justify" }}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
