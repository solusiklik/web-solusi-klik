import { useEffect, useState } from "react";

function BlogPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://solusiklik.co.id/wp-json/wp/v2/posts?slug=e-katalog-drone-pertanian")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
        }
      });
  }, []);

  if (!post) return <p>Loading...</p>;

  const imageSrc = getFirstImageSrc(post?.content?.rendered);
  return (
    <div>
      {/* <h2 dangerouslySetInnerHTML={{ __html: post.id }} /> */}
      <h2 dangerouslySetInnerHTML={{ __html: post?.title?.rendered }} />
      <h2 dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
      <h1>{post?.title?.rendered}</h1>
      {imageSrc && <img src={imageSrc} alt="Gambar pertama" />}
      {/* <h2 dangerouslySetInnerHTML={{ __html: post.content?.rendered }} /> */}
      {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> */}
    </div>
  );
}

function getFirstImageSrc(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const img = doc.querySelector("img");
  return img?.getAttribute("src") || null;
}

export default BlogPost;
