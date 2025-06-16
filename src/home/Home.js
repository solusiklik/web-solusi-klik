import "../css/Home.css";
import Why from "./Why";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="row align-items-center">
          {/* Konten Kiri */}
          <div className="col-lg-6 p-4 p-md-5">
            <div className="text-md-start text-center">
              <p className="title">
                Penyedia Inaproc/E-katalog Terlengkap & Terpercaya Nomor 1 di
                Indonesia
              </p>
              <p className="text-muted" style={{ lineHeight: 2 }}>
                Solusi Klik menyediakan berbagai macam produk berkualitas mulai
                dari Alat Berat, Elektronik, Furniture, Alat Kesehatan, dan
                masih banyak lagi! Mau pengadaan barang di eKatalog LKPP? Ya
                Solusi Klik jawabannya!!
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center my-4">
                <a
                  className="btn d-flex align-items-center justify-content-between"
                  style={{
                    backgroundColor: "#d8fa52",
                    borderRadius: "3rem",
                    fontSize: "14px",
                    fontWeight: "500",
                    gap: "10px",
                    padding: "10px 20px",
                    width: "11rem",
                  }}
                >
                  Get a Quote
                  <i
                    className="fa-solid fa-arrow-up-long"
                    style={{
                      backgroundColor: "#0c232b",
                      color: "white",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  ></i>
                </a>
                <a className="btn" style={{ borderRadius: "3rem" }}>
                  <i
                    className="fa-solid fa-play"
                    style={{
                      backgroundColor: "#0c232b",
                      color: "white",
                      borderRadius: "50%",
                      padding: "15px",
                    }}
                  ></i>
                </a>
              </div>
              <div className="mt-5">
                <p className="fw-semibold mb-1">Our Client</p>
                <div
                  className="text-center mt-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <h5 className="fw-bold">Join our team Now</h5>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    {/* Avatar 1 */}
                    <img
                      src="/images/1.jpg"
                      alt="User 1"
                      className="rounded-circle border border-white"
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
                      src="/images/1.jpg"
                      alt="User 2"
                      className="rounded-circle border border-white"
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
                      src="/images/1.jpg"
                      alt="User 3"
                      className="rounded-circle border border-white"
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
                <div className="d-flex align-items-center flex-wrap">
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
                  <p className="fw-medium me-3 mb-0">(4.5/5)</p>
                  <h1 className="mb-0 me-2">4.5+</h1>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    Review Positif Dari Instansi Pemerintah
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Gambar Kanan */}
          <div className="col-lg-6 p-0">
            <div style={{ height: "100vh", width: "100%" }}>
              <img
                className="img-fluid"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                src="/images/1.jpg"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Why />
    </div>
  );
}

export default Home;
