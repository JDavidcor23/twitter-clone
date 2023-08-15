import React from "react";
import { Sidebar } from "../components";

export const Profile = () => {
  return (
    <div className="body">
      <Sidebar />
      <div className="feed">
        <div className="feed__header">
          <h2>Profile</h2>
        </div>
        <div className="container__notifications">
          <div className="notifications">
            <img
              src="https://img.freepik.com/free-icon/user_318-286823.jpg"
              alt=""
            />
            <div>
              <h2>Jorge David Diaz</h2>
              <p>@jdavidcor23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
