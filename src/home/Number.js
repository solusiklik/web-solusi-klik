import CountUp from 'react-countup';

function Number() {
  return (
    <div className="row d-flex w-100" style={{ marginTop: "6rem", marginBottom: "6rem"  }}>
      <div className="col-lg-2"></div>
      <div className="col-lg-2 col-md-3 mb-4 ml-lg-4 ps-lg-4">
        <div className="d-flex align-items-center">
          <p className="fs-1 m-0 fw-semibold text-dark"><CountUp end={70} duration={2} separator="," />k</p>
          
          <i
            className="fa-solid fa-plus text-primary ms-2"
            style={{
              textShadow: "0 0 1px #0d6efd, 0 0 1px #0d6efd",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>
        <p className="mt-2 fw-semibold">Total Produk di e-Katalog</p>
      </div>

      <div className="col-lg-2 col-md-3 mb-4 border-start border-info ps-lg-4">
        <div className="d-flex align-items-center">
          <p className="fs-1 m-0 fw-semibold text-dark"><CountUp end={15600} duration={2} separator="," /></p>
          <i
            className="fa-solid fa-plus text-primary ms-2"
            style={{
              textShadow: "0 0 1px #0d6efd, 0 0 1px #0d6efd",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>
        <p className="mt-2 fw-semibold">Total Instansi Mitra</p>
      </div>

      <div className="col-lg-2 col-md-3 mb-4 border-start border-info ps-lg-4">
        <div className="d-flex align-items-center">
          <p className="fs-1 m-0 fw-semibold text-dark"><CountUp end={14} duration={2} separator="," />th</p>
          <i
            className="fa-solid fa-plus text-primary ms-2"
            style={{
              textShadow: "0 0 1px #0d6efd, 0 0 1px #0d6efd",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>
        <p className="mt-2 fw-semibold">Total Transaksi</p>
      </div>

      <div className="col-lg-2 col-md-3 mb-4 border-start border-info ps-lg-4">
        <div className="d-flex align-items-center">
          <p className="fs-1 m-0 fw-semibold text-dark"><CountUp end={235} duration={2} separator="," /></p>
          <i
            className="fa-solid fa-plus text-primary ms-2"
            style={{
              textShadow: "0 0 1px #0d6efd, 0 0 1px #0d6efd",
              fontSize: "1.5rem",
            }}
          ></i>
        </div>
        <p className="mt-2 fw-semibold">Produk Terdistribusi</p>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
}

export default Number;
