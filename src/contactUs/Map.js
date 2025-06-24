export default function Map() {
  return (
    <div>
      <div className="container my-5">
        <h2 className="fw-bold mb-4">Find Us on the Map</h2>
        <div
          className="ratio ratio-21x9 rounded overflow-hidden shadow"
          style={{ width: "100%", height: "19rem" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.311135465985!2d106.61744807480319!3d-6.222642393765401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc4662309231%3A0xda1780d8a70f6624!2sSolusi%20Klik%20-%20Penyedia%20Barang%20%26%20Jasa%20di%20E-Katalog%20LKPP!5e0!3m2!1sid!2sid!4v1750732180361!5m2!1sid!2sid"
            width="600"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
