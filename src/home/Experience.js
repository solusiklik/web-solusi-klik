import styles from "../css/Experience.module.css";

export default function Experience() {
  return(
    <div className="row" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="col-lg-6 p-0">
        <img src="/images/Alat Berat.png" style={{ width:"100%", height: "25rem" , objectFit: "cover"}}/>
      </div>   
      <div className="col-lg-6 row justify-content-around" style={{ padding: "20px 20px 0px 20px"}}>
        <div className="col-lg-6">
          <div className={`${styles["card"]} h-100 border-1 p-4 border-info`}>
            <div className="card-body">
              <div className="d-flex justify-content-end" style={{ marginBottom: "8rem" }}>
                <a className={`${styles["btn-experience"]} btn w-auto`}>
                  <i
                    className={`${styles["icon-experience"]} fs-1 fa-solid fa-hammer`}
                  ></i>
                </a>
              </div>
              <h6 className="my-3" style={{ fontSize: "25px" }}>
                Produk Bersertifikasi
              </h6>
              <p className="card-text" style={{ fontSize: "16px" }}>
                Semua produk memiliki sertifikasi resmi SNI, ISO, dan standar teknis lainnya yang dipersyaratkan pengadaan pemerintah. Kualitas terjamin dan dapat dipertanggungjawabkan secara legal.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={`${styles["card"]} h-100 border-1 p-3 border-info`}>
            <div className="card-body">
              <div className="d-flex justify-content-end" style={{ marginBottom: "8rem" }}>
                <a className={`${styles["btn-experience"]} btn w-auto`}>
                  <i
                    className={`${styles["icon-experience"]} fs-1 fa-solid fa-hammer`}
                  ></i>
                </a>
              </div>
              <h6 className="my-3" style={{ fontSize: "25px" }}>
                Siap Kirim Seluruh Indonesia
              </h6>
              <p className="card-text" style={{ fontSize: "16px" }}>
                Jaringan distribusi menjangkau seluruh Indonesia dengan sistem logistik terintegrasi. Produk sampai tepat waktu dan kondisi prima ke lokasi instansi manapun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}