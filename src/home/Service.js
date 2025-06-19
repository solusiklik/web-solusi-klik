import styles from "../css/Service.module.css";

function Service() {
  return (
    <div
      className="container px-3 px-md-5"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i
                  className={`${styles["icon-service"]} fs-1 fa-solid fa-hammer`}
                ></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i className={`${styles["icon-service"]} fs-1 fa-solid fa-faucet-drip`}></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i className={`${styles["icon-service"]} fs-1 fa-solid fa-wrench`}></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i className={`${styles["icon-service"]} fs-1 fa-solid fa-screwdriver-wrench`}></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i className={`${styles["icon-service"]} fs-1 fa-solid fa-paint-roller`}></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`${styles["card"]} h-100 border-0 p-3`}>
            <div className="card-body">
              <a className={`${styles["btn-service"]} btn w-auto`}>
                <i className={`${styles["icon-service"]} fs-1 fa-solid fa-wheat-awn`}></i>
              </a>
              <h6 className="card-title my-3" style={{ fontSize: "22px" }}>
                Secure Pengadaan Aman
              </h6>
              <p className="card-text" style={{ fontSize: "15px" }}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
