import React from "react";

export default function Hero() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 pe-5">
          <h1 className="fw-bold display-5 mb-4">
            Partner Terpercaya <br />
            Untuk Pengadaan <br />
            Pemerintah.
          </h1>
          <p className="text-muted fs-6">
            Dipercaya berbagai kementerian, dinas, dan BUMN sebagai mitra
            pengadaan strategis selama bertahun-tahun. Kami telah berhasil
            menyelesaikan ribuan proyek pengadaan dengan tingkat kepuasan tinggi
            dari instansi pemerintah..
          </p>
          <p className="text-muted fs-6">
            Tim profesional kami memahami prosedur tender, e-katalog, dan sistem
            LKPP dengan dukungan dokumentasi lengkap. Proses administrasi yang
            rapi dan sesuai regulasi memastikan kelancaran pengadaan instansi
            Anda dari awal hingga serah terima.
          </p>
          <div className="d-flex align-items-center bg-dark text-white rounded-pill p-4 mt-4 gap-5 flex-wrap">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-shield-halved me-4 text-success fs-2"></i>
              <span className="fw-semibold">
                Cepat. Terpercaya. <br />
                Berkualitas.
              </span>
            </div>
            <div className="ms-auto">
              <button className=" rounded-pill fw-semibold" style={{backgroundColor: "#0d6dfc"}}>
                More About us{" "}
                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0 p-0 position-relative">
          <img
            src="/images/Gambar indo.jpg"
            alt="Worker"
            className="img-fluid"
            style={{
              maxHeight: "480px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div
            className="bg-dark text-white fw-semibold p-3 position-absolute top-0 end-0"
            style={{
              maxWidth: "350px",
              border: "12px solid white",
            }}
          >
            **Lebih dari 1.000 instansi pemerintah telah mempercayai produk dan
            layanan berkualitas SolusiKlik sebagai partner pengadaan strategis
            mereka.**
          </div>
        </div>
      </div>
    </div>
  );
}
