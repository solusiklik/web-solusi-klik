import styles from "../css/Innovation.module.css";

function Innovation() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <h2 style={{ fontSize: "4rem", textAlign: "center" }}>Our Blog</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          <div className="col position-relative">
            <div className={styles["image-wrapper"]}>
              <img
                src="/images/Alat Berat.png"
                alt="User 1"
                className={styles["image"]}
              />
            </div>
            <div>
              <h6 className={`${styles["title"]} my-3`}>
                Panduan Lengkap INAPROC Provinsi NAD Aceh
              </h6>
              <div
                className="d-flex gap-3 align-items-center"
                style={{ fontSize: "13px" }}
              >
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-circle-user"></i>
                  <span>fayyad</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-folder-closed"></i>
                  <span>Green Tech</span>
                </div>
              </div>
            </div>
            <div
              className="position-absolute btn btn-primary border-0 lh-1 text-white text-center"
              style={{
                top: "15px",
                right: "25px",
                padding: "4px 8px",
                borderRadius: "0.5rem",
                fontSize: "12px",
                lineHeight: 1.2,
              }}
            >
              <span className="fw-semibold fs-6">28</span>
              <br />
              <span style={{ fontSize: "14px" }}>May</span>
            </div>
          </div>
          <div className="col position-relative">
            <div className={styles["image-wrapper"]}>
              <img
                src="/images/Alat Berat.png"
                alt="User 1"
                className={styles["image"]}
              />
            </div>

            <div>
              <h6 className={`${styles["title"]} my-3`}>
                Kenapa Memahami Tahapan Pengadaan Itu Penting?
              </h6>
              <div
                className="d-flex gap-3 align-items-center"
                style={{ fontSize: "13px" }}
              >
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-circle-user"></i>
                  <span>fayyad</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-folder-closed"></i>
                  <span>Energy News</span>
                </div>
              </div>
            </div>
            <div
              className="position-absolute btn btn-primary border-0 lh-1 text-white text-center"
              style={{
                top: "15px",
                right: "25px",
                padding: "4px 8px",
                borderRadius: "0.5rem",
                fontSize: "12px",
                lineHeight: 1.2,
              }}
            >
              <span className="fw-semibold fs-6">28</span>
              <br />
              <span style={{ fontSize: "14px" }}>May</span>
            </div>
          </div>
          <div className="col position-relative">
            <div className={styles["image-wrapper"]}>
              <img
                src="/images/Alat Berat.png"
                alt="User 1"
                className={styles["image"]}
              />
            </div>
            <div>
              <h6 className={`${styles["title"]} my-3`}>
                Mengapa Penting Memahami Apa Itu Pengadaan Jasa?
              </h6>
              <div
                className="d-flex gap-3 align-items-center"
                style={{ fontSize: "13px" }}
              >
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-circle-user"></i>
                  <span>fayyad</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <i className="fa-regular fa-folder-closed"></i>
                  <span>Solar Tips</span>
                </div>
              </div>
            </div>
            <div
              className="position-absolute btn btn-primary border-0 lh-1 text-white text-center"
              style={{
                top: "15px",
                right: "25px",
                padding: "4px 8px",
                borderRadius: "0.5rem",
                fontSize: "12px",
                lineHeight: 1.2,
              }}
            >
              <span className="fw-semibold fs-6">28</span>
              <br />
              <span style={{ fontSize: "14px" }}>May</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Innovation;
