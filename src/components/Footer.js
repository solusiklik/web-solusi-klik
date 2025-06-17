function Footer() {
  return (
    <div
      className="mt-5 w-100"
      style={{
        backgroundColor: "#0d6dfc",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="row container px-3 px-md-5 m-5">
        <div className="col-lg-6">
          <h2>
            Subcribe Our <br /> Newsletters
          </h2>
        </div>
        <div className="col-lg-6">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ marginLeft: "15rem", marginRight: "15rem" }}
      >
        <div className="col-lg-3">
          <h1>Bavion</h1>
          <h4>Solar & Renewable Energy</h4>
          <h6>
            Lorem ipsum dolor sit amet co adipiscing elit ut elit tellus luctus
            nec ullamc pulvinar dapibus leo ipsum dolor.
          </h6>
        </div>
        <div className="col-lg-3">
          <p>Quick Links</p>
          <div className="d-flex">
            <a
              className="btn btn-service w-auto"
              style={{ borderRadius: "50%" }}
            >
              <i className="fa-solid fa-hammer icon-service fs-5"></i>
            </a>
            <p>home</p>
          </div>
        </div>
        <div className="col-lg-3">
          <p>Services</p>
          <div className="d-flex">
            <a
              className="btn btn-service w-auto"
              style={{ borderRadius: "50%" }}
            >
              <i className="fa-solid fa-hammer icon-service fs-5"></i>
            </a>
            <p>home</p>
          </div>
        </div>
        <div className="col-lg-3">
          <h3>Contact Information</h3>
          <div className="d-flex">
            <div>
              {" "}
              <a
                className="btn btn-service w-auto"
                style={{ borderRadius: "50%" }}
              >
                <i className="fa-solid fa-hammer icon-service fs-5"></i>
              </a>
            </div>
            <div>
              <p>phone</p>
              <p>0761-8523-398</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ marginLeft: "15rem", marginRight: "15rem" }}
      >
        <div className="col-lg-6">
          <p>Copyright © 2025 Krakenbox. All Rights Reserved.</p>
        </div>
        <div className="col-lg-3">
          <p>Privacy Policy</p>
        </div>
        <div className="col-lg-3">
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
