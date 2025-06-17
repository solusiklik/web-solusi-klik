import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Slider() {
  return (
    <div className="mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/Alat Berat.png" className="d-block w-100" alt="Slide 1"   style={{ height: '400px', objectFit: 'cover' }}/>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Title</h5>
              <p>Description for first slide</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/bnn.png" className="d-block w-100" alt="Slide 2"   style={{ height: '400px', objectFit: 'cover' }}/>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Title</h5>
              <p>Description for second slide</p>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src="/images/alat laboratorium.png" className="d-block w-100" alt="Slide 3"   style={{ height: '400px', objectFit: 'cover' }}/>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Title</h5>
              <p>Description for third slide</p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Slider;
