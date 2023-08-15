import React from "react";
import { Post, Sidebar, Widgets } from "../components";

export const Home = () => {
  return (
    <div className="container">
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
          <Post />
        </div>
      </div>
    </div>
  );
};
