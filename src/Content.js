import { useState, useEffect } from "react";

const api = "https://jsonplaceholder.typicode.com/";
const tabs = ["posts", "comments", "albums"];

export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  //handle click button type of tab to call api
  useEffect(() => {
    fetch(api + type)
      .then((resp) => resp.json())
      .then((post) => {
        setPosts(post);
      });
    console.log("Content callback useEffect");
  }, [type]);

  //Handle scroll event to show showGoToTop button
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    //Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Content">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <div>
        <p>Chiều dài màn hình: {width}</p>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={
              type === tab ? { backgroundColor: "yellow", color: "black" } : {}
            }
            onClick={() => {
              setType(tab);
            }}
          >
            {tab}
          </button>
        ))}
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title || post.name}</li>;
          })}
        </ul>
      </div>
      {showGoToTop && (
        <button style={{ position: "fixed", bottom: 10, right: 10 }} href="#">
          Go To Top
        </button>
      )}
      {console.log("Content re-render")}
    </div>
  );
}
