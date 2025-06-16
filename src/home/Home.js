import "../css/Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <div className="row" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="col-md-6">
          <div style={{ marginTop: "12rem", marginLeft: "20rem" }}>
            <p className="title">
              Penyedia Inaproc/E-katalog Terlengkap & Terpercaya Nomor 1 di
              Indonesia
            </p>
            <p style={{ color: "gray", marginRight: "13rem", lineHeight: 2 }}>
              Solusi Klik menyediakan berbagai macam produk berkualitas mulai
              dari Alat Berat, Electronic, Furniture, Alat Kesehatan, dan masih
              banyak lagi! Mau pengadaan barang di eKatalog LKPP? Ya Solusi Klik
              jawabannya!!
            </p>
            <div className="row" style={{ display: "flex" }}>
              <div className="row" style={{ display: "flex" }}>
                <a
                  className="btn"
                  style={{
                    backgroundColor: "#d8fa52",
                    borderRadius: "3rem",
                    fontSize: "14px",
                    cursor: "pointer",
                    width: "11rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: "500",
                    gap: "10px",
                    paddingLeft: "22px",
                  }}
                >
                  Get a Quote
                  <div>
                    <i
                      className="fa-solid fa-arrow-up-long"
                      style={{
                        backgroundColor: "#0c232b",
                        color: "white",
                        borderRadius: "50%",
                        padding: "15px",
                      }}
                    ></i>
                  </div>
                </a>
                <a
                  className="btn"
                  style={{
                    borderRadius: "3rem",
                    cursor: "pointer",
                    width: "8rem",
                    textAlign: "center",
                  }}
                >
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
            </div>
            <div className="row mt-5">
              <div className="col-md-5">
                <p style={{ fontWeight: "600", marginBottom: "0" }}>Our Client</p>
              </div>
              <div className="col-md-7">
                <p style={{ fontWeight: "500"}}>(4.5/5)</p>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <h1>4.5+</h1><p style={{ margin: "2rem", fontSize: "14px" }}>Review Positif Dari Instansi Pemerintah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="image" style={{ height: "58rem", width: "100%" }} src="/images/1.jpg" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
