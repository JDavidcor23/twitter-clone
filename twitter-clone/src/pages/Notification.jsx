import React from "react";
import { Sidebar } from "../components";
import { getReadableDateTime } from "../helpers/date";
import twitter from "../assets/twitter.png";

export const Notification = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2>Notification</h2>
        </div>
        <div className="container__notifications">
          <div className="notifications">
            <img src={twitter} alt="" />
            <p>There was a login to your account {getReadableDateTime()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
