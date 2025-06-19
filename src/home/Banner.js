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
    borderRadius: "1rem",
    backgroundImage: 'url("/images/Alat Berat.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "12rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  }}
>
  <div className="d-flex justify-content-between w-100 align-items-center">
    <h4 className="fw-bold mb-0">
      Power Your Future with Clean, Renewable Energy
    </h4>
    {/* icon */}
    <a
      className="btn btn-primary d-flex align-items-center justify-content-between"
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
          backgroundColor: "#0c232b",
          color: "white",
          borderRadius: "50%",
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
