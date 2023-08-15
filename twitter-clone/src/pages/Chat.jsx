import React from "react";
import { Sidebar } from "../components";
import twitter from "../assets/twitter.png";

export const Chat = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2>Chat</h2>
        </div>
        <div className="container__notifications">
          <div className="notifications">
            <img src={twitter} alt="" />
            <p>There are no messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};
