import React from "react";
import verifiedIcon from "../../assets/verified.png";
import { PostFooter } from "../PostFooter";

export const Post = ({ data }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <img
          src="https://img.freepik.com/free-icon/user_318-286823.jpg"
          alt=""
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {data.name}
              <span className="post__headerSpecial">
                <img src={verifiedIcon} alt="" className="post-badge" />
                {`@${data.username}`}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{data.description}</p>
          </div>
        </div>
        <img src={data.hasImage} alt="" />
        <PostFooter />
      </div>
    </div>
  );
};
