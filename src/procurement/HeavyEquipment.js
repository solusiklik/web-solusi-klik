import { useEffect, useState } from "react";

function BlogPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://solusiklik.co.id/wp-json/wp/v2/posts/60300")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
}

export default BlogPost;
