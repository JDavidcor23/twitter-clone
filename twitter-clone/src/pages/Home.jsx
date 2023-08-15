import React, { useEffect } from "react";
import { Post, Sidebar } from "../components";
import { usePost } from "../hooks/usePost";

export const Home = () => {
  const { getPosts, posts } = usePost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="body">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <div className="tweetBox">
          <form action="">
            <div className="tweetBox__input">
              <img
                src="https://img.freepik.com/free-icon/user_318-286823.jpg"
                alt=""
              />
              <input type="text" placeholder="What's happening?" />
            </div>
            <button className="tweetBox__tweetButton">Tweet</button>
          </form>
        </div>
        {posts.length > 0 &&
          posts.map((post) => <Post {...post} key={post.id} />)}
      </div>
    </div>
  );
};
