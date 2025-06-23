import styles from "../css/LogoCarousel.module.css";

const logos = [
  "/images/Logo Client/BANJARMASIN.png",
  "/images/Logo Client/BAPPENAS.png",
  "/images/Logo Client/BBKFP.png",
  "/images/Logo Client/BBPBAP.webp",
  "/images/Logo Client/BEACUKAI.png",
  "/images/Logo Client/BNN.png",
  "/images/Logo Client/BNPB.png",
  "/images/Logo Client/BPLS.png",
  "/images/Logo Client/BPPT.png",
  "/images/Logo Client/BPPW.png",
  "/images/Logo Client/COA BANJAR.png",
  "/images/Logo Client/COA RIAU.png",
  "/images/Logo Client/DBM DKI.png",
  "/images/Logo Client/DLHK.png",
  "/images/Logo Client/hutan.png",
  "/images/Logo Client/INSPEKTORATDKI.webp",
  "/images/Logo Client/K PATRIOT.png",
  "/images/Logo Client/KAB NIAS.png",
  "/images/Logo Client/KAB TEBO.png",
  "/images/Logo Client/KABGROBONGAN.png",
  "/images/Logo Client/KABPADANG.png",
  "/images/Logo Client/KABSLEMAN.png",
  "/images/Logo Client/KEMEN AGRICULTURE.png",
  "/images/Logo Client/KEMEN INDUSTRI.png",
  "/images/Logo Client/KEMEN KESEHATAN.png",
  "/images/Logo Client/KEMEN KEUANGAN.png",
  "/images/Logo Client/KEMEN PU.jpg",
  "/images/Logo Client/KEMEN PU.png",
  "/images/Logo Client/KEMEN PUPR.jpg",
  "/images/Logo Client/KEMENHAN.png",
  "/images/Logo Client/KEMENKES BAKTI.webp",
  "/images/Logo Client/KEMENKEU.png",
  "/images/Logo Client/KEMENLAUT.png",
  "/images/Logo Client/KOMINFO.png",
  "/images/Logo Client/KOTA TGR.png",
  "/images/Logo Client/LAPAN.png",
  "/images/Logo Client/PEMKOT MAKASSAR.png",
  "/images/Logo Client/PUPR.png",
  "/images/Logo Client/SBRJ LAMPUNG.png",
  "/images/Logo Client/TOBA1.png",
  "/images/Logo Client/UGM.png",
  "/images/Logo Client/UNDIP.png",
  "/images/Logo Client/WIKA KOBE.png",
];

export default function LogoCarousel() {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h2 style={{ fontSize: "4rem", textAlign: "center" }}>Our Client</h2>
        </div>
      </div>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["sliderLeft"]}`}>
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className={`${styles["logo"]}`}
            />
          ))}
        </div>
      </div>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["sliderRight"]}`}>
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className={`${styles["logo"]}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
