import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Haruto Sakamoto",
    role: "Architect",
    image: "https://i.pravatar.cc/100?img=1",
    text: "Bavion’s custom solar solutions fit perfectly with my eco-home designs. Clients love the energy savings.",
  },
  {
    name: "Emily Hart",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Bavion helped us switch to solar with ease and professionalism. Now, our energy bills are lower and our home is greener.",
  },
  {
    name: "Marcus Levine",
    role: "Operations Director",
    image: "https://i.pravatar.cc/100?img=3",
    text: "Their solar system powers our facility efficiently. We’ve cut costs and improved sustainability at the same time.",
  },
  {
    name: "Marcus Levine",
    role: "Operations Director",
    image: "https://i.pravatar.cc/100?img=3",
    text: "Their solar system powers our facility efficiently. We’ve cut costs and improved sustainability at the same time.",
  },
];

export default function Client() {
  return (
    <div
      className="text-white mt-5 pt-5 px-3"
      style={{ backgroundColor: "#0a5bd1", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container text-center ">
        <h2 className="fw-semibold display-3 mx-5">
          What Our Clients Say About Going Solar With Bavion
        </h2>
        <p className="fs-5 text-light mt-3" style={{marginLeft:"15rem", marginRight:"15rem"}}>
          Client satisfaction is at the heart of everything we do. From
          residential rooftops to large-scale solar farms, we’ve helped hundreds
          of clients make the transition to clean, renewable energy—efficiently
          and affordably. Here’s what they have to say about their experience
          with our solar solutions.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="d-flex align-items-center justify-content-end">
            {/* Avatar 1 */}
            <img
              src="/images/bnn.png"
              alt="User 1"
              className="rounded-circle border border-4 border-white"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                marginLeft: "-10px",
                zIndex: 3,
              }}
            />
            {/* Avatar 2 */}
            <img
              src="/images/kemenhan.png"
              alt="User 2"
              className="rounded-circle border border-4 border-white"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                marginLeft: "-10px",
                zIndex: 2,
              }}
            />
            {/* Avatar 3 */}
            <img
              src="/images/pupr.jpg"
              alt="User 3"
              className="rounded-circle border border-4 border-white"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                marginLeft: "-10px",
                zIndex: 1,
              }}
            />
            {/* Plus Button */}
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#eee",
                marginLeft: "-10px",
                zIndex: 0,
              }}
            >
              <span
                style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center">
          <div className="text-center text-lg-start d-flex gap-3">
            <div>
            <span
              className="mb-1 fw-bold"
              style={{ fontSize: "3.5rem", lineHeight: 1 }}
            >
              4.5+
            </span>

            </div>
            <div>
            <span className="mb-0 fw-semibold fs-5">
              Review Positif <br/>
              Dari Instansi Pemerintah
            </span>

            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="p-5 h-100 d-flex flex-column justify-content-between"
                style={{
                  background:
                    "linear-gradient(to bottom,rgb(45, 104, 255), #0a5bd1)",
                }}
              >
                <div
                  style={{
                    minHeight: "380px",
                    fontSize: "1.1rem",
                  }}
                >
                  <div
                    className="text-success display-5 mb-3"
                    style={{ lineHeight: 0 }}
                  >
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="mb-5 fs-4">{t.text}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle"
                    width="100"
                    height="100"
                  />
                  <div>
                    <strong className="text-dark d-block fs-5">{t.name}</strong>
                    <div className="fs-6">{t.role}</div>
                    <div className="text-warning fs-4">★★★★★</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div
          className="swiper-button-prev-custom btn btn-light position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            left: "-100px",
            zIndex: 10,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: 0,
            fontSize: "25px",
          }}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div
          className="swiper-button-next-custom btn btn-light position-absolute d-flex justify-content-center align-items-center"
          style={{
            top: "50%",
            right: "-100px",
            zIndex: 10,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: 0,
            fontSize: "25px",
          }}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
