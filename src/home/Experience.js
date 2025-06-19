import styles from "../css/Experience.module.css";

export default function Experience() {
  return (
<div className="row w-100" style={{ fontFamily: "Poppins, sans-serif" }}>
  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
    <img
      src="/images/Alat Berat.png"
      style={{
        width: "100%",
        height: "25rem",
        objectFit: "cover",
      }}
      alt="Alat Berat"
    />
  </div>
  <div className="col-12 col-lg-6">
    <div className="row h-100">
      <div className="col-12 col-md-6">
        <div
          className={`${styles["card"]} border p-4`}
          style={{ height: "25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div className="d-flex justify-content-end">
            <a className={`${styles["btn-experience"]} btn w-auto`}>
              <i className={`${styles["icon-experience"]} fs-1 fa-solid fa-hammer`}></i>
            </a>
          </div>
          <div>
            <h6 className="mb-3 fw-semibold fs-3" style={{ fontSize: "20px" }}>
              Produk Bersertifikasi
            </h6>
            <p className="card-text" style={{ fontSize: "14px" }}>
              Semua produk memiliki sertifikasi resmi SNI, ISO, dan standar teknis lainnya yang dipersyaratkan pengadaan pemerintah.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div
          className={`${styles["card"]} border p-4`}
          style={{ height: "25rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
          <div className="d-flex justify-content-end">
            <a className={`${styles["btn-experience"]} btn w-auto`}>
              <i className={`${styles["icon-experience"]} fs-1 fa-solid fa-hammer`}></i>
            </a>
          </div>
          <div>
            <h6 className="mb-3" style={{ fontSize: "20px" }}>
              Siap Kirim Seluruh Indonesia
            </h6>
            <p className="card-text" style={{ fontSize: "14px" }}>
              Jaringan distribusi menjangkau seluruh Indonesia dengan sistem logistik terintegrasi. Produk sampai tepat waktu dan kondisi prima ke lokasi instansi manapun.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
