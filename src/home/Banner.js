import React from "react";

function BannerSection() {
  return (
    <div
      className="container position-relative"
      style={{
        marginBottom: "-11rem",
        zIndex: 2,
      }}
    >
      <div
        className="text-white p-5"
        style={{
          backgroundImage: 'url("/images/Footer/Image Footer-06.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "12rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          opacity: 2,
        }}
      >
        <div className="d-flex justify-content-between w-100 align-items-center">
          <h4 className="fw-bold mb-0 fs-1">
            Solusi Cerdas E-Katalog Inaproc, dalam Satu Klik
          </h4>
          {/* icon */}
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
      </div>
    </div>
  );
}

export default BannerSection;
