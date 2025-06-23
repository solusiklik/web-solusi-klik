import styles from "../css/Service.module.css";

function Service() {
  return (
    <div className="container pt-5 px-3 px-md-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-hammer`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                Kajian Lapangan
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Analisis kebutuhan instansi langsung dari kondisi lapangan, agar solusi pengadaan tepat sasaran dan sesuai standar teknis.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5 `}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-faucet-drip`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                Produk Teruji
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Katalog e-Katalog LKPP yang lengkap, didukung pengalaman pengadaan lintas sektor dan rekam jejak proyek yang terbukti sukses.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5 `}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-wrench`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                Tepat Waktu
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Pengiriman selalu on-time berkat sistem logistik terintegrasi dan komitmen jadwal yang disesuaikan dengan kebutuhan proyek instansi.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5 `}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-screwdriver-wrench`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                Kualitas Terjaga
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Produk diuji secara teknis sebelum diserahkan untuk menjamin mutu dan spesifikasi sesuai standar pengadaan.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5 `}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-paint-roller`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                After Sales
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Dukungan teknisi berpengalaman dan ketersediaan suku cadang di seluruh Indonesia memastikan layanan cepat, mudah, dan andal.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-5 `}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-wheat-awn`}
                ></i>
              </a>
              <h6 className={`${styles["card-title"]} my-3`}>
                Dokumen Lengkap
              </h6>
              <p className={`${styles["card-text"]} fw-semibold`}>
                Administrasi lengkap dan sesuai regulasi pengadaan, mendukung proses audit, pelaporan, dan kepatuhan instansi tanpa kendala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
