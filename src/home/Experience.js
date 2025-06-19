import styles from "../css/Experience.module.css";

export default function Experience() {
  return (
    <div className="row w-100">
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
        <div className="row h-100" style={{ height: "25rem" }}>
          {/* CARD 1 */}
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className={`${styles.card} h-100`}>
              <div className="d-flex justify-content-end mb-3">
                <div className={styles.icon}>
                  <i className="fa-solid fa-tools fs-4 text-dark"></i>
                </div>
              </div>
              <div>
                <h6 className="fw-semibold mb-2" style={{ fontSize: "25px" }}>
                  Custom Solar Solutions
                </h6>
                <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  Semua produk memiliki sertifikasi resmi SNI, ISO, dan standar teknis lainnya yang dipersyaratkan pengadaan pemerintah.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6">
            <div className={`${styles.card} h-100`}>
              <div className="d-flex justify-content-end mb-3">
                <div className={styles.icon}>
                  <i className="fa-solid fa-truck-fast fs-4 text-dark"></i>
                </div>
              </div>
              <div>
                <h6 className="fw-semibold mb-2" style={{ fontSize: "25px" }}>
                  Siap Kirim Seluruh Indonesia
                </h6>
                <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>
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
