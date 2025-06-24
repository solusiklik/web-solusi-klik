import styles from "../css/Article.module.css";
import { useEffect, useState } from "react";

function Article() {
  const [posts, setPosts] = useState([]);
  const baseUrl = "https://solusiklik.co.id/wp-json/wp/v2/posts?slug=";
  const linkContent = [
    "e-katalog-drone-pertanian",
    "ekatalog-cultivator",
    "e-katalog-aspal",
  ];
  useEffect(() => {
    Promise.all(
      linkContent.map((slug) =>
        fetch(baseUrl + slug)
          .then((res) => res.json())
          .then((data) => data[0])
      )
    ).then((results) => {
      const filteredPosts = results.filter(Boolean);
      setPosts(filteredPosts);
    });
  }, []);

  function getFirstImageSrc(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const img = doc.querySelector("img");
    return img?.getAttribute("src") || null;
  }

  function stripHtml(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <h2 style={{ fontSize: "4rem", textAlign: "center" }}>Our Blog</h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {posts.length === 0 &&
            [...Array(6)].map((_, i) => (
              <div key={i} className="col">
                <div className="placeholder-glow">
                  <div className="card h-100 p-4">
                    <div
                      className="placeholder col-12 mb-2"
                      style={{ height: "150px" }}
                    ></div>
                    <p className="placeholder col-6 mb-1"></p>
                    <p className="placeholder col-4"></p>
                  </div>
                </div>
              </div>
            ))}
          {posts.map((post, index) => (
            <div className="col position-relative" key={index}>
              <div
                className={styles["image-wrapper"]}
                onClick={() => (window.location.href = post?.link)}
              >
                {post?.content?.rendered && (
                  <img
                    src={getFirstImageSrc(post?.content?.rendered)}
                    alt="Gambar pertama"
                    className={styles["image"]}
                  />
                )}
              </div>
              <div>
                <h6
                  className={`${styles["title"]} my-3`}
                  dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
                  onClick={() => (window.location.href = post?.link)}
                ></h6>
                <div
                  className="d-flex gap-3 align-items-center"
                  style={{ fontSize: "15px" }}
                >
                  <p>{stripHtml(post.content.rendered).substring(0, 150)}...</p>
                </div>
                <div
                  className="d-flex gap-3 align-items-center mt-2"
                  style={{ fontSize: "13px" }}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-regular fa-circle-user"></i>
                    <span>fayyad</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-regular fa-folder-closed"></i>
                    <span>Green Tech</span>
                  </div>
                </div>
              </div>
              <div
                className="position-absolute btn btn-primary border-0 lh-1 text-white text-center"
                style={{
                  top: "15px",
                  right: "25px",
                  padding: "4px 8px",
                  borderRadius: "0.5rem",
                  fontSize: "12px",
                  lineHeight: 1.2,
                }}
              >
                <span className="fw-semibold fs-6">28</span>
                <br />
                <span style={{ fontSize: "14px" }}>May</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Article;
