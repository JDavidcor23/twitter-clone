import React from "react";
import verifiedIcon from "../../assets/verified.png";
import { PostFooter } from "../PostFooter";

export const Post = () => {
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
              Name user
              <span className="post__headerSpecial">
                <img src={verifiedIcon} alt="" className="post-badge" />
                @username
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              libero vero, earum nisi ab, nihil tempore, quam maiores esse
              soluta ipsa odit molestiae necessitatibus adipisci! Voluptatibus
              iusto repudiandae perspiciatis voluptas?
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1691891357/Screenshot_2023-08-12_204904_c9uabj.png"
          alt=""
        />
        <PostFooter />
      </div>
    </div>
  );
};
