import React, { useEffect } from "react";
import { Post, Sidebar } from "../components";
import { usePost } from "../hooks/usePost";

export const Home = () => {
  const {
    getPosts,
    posts,
    uploadImage,
    handleChange,
    values,
    handleSubmit,
    customError,
  } = usePost();

  const profileImage = "https://img.freepik.com/free-icon/user_318-286823.jpg";
  const name = "Jorge David Diaz";
  const username = "@jdavidcor23";

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
          <form
            action=""
            onSubmit={(e) => handleSubmit(e, name, username, profileImage)}
          >
            <div className="tweetBox__input">
              <img src={profileImage} alt="" />
              <input
                type="text"
                placeholder="What's happening?"
                onChange={handleChange}
                name="description"
              />
            </div>
            <img src={values?.hasImage} alt="" className="previewImage" />
            <div className="tweetBox__containerButtons">
              <button className="tweetBox__tweetButton" type="submit">
                Tweet
              </button>
              <input
                className="tweetBox__uploadButton custom-file-input"
                type="file"
                accept=".jpg, .png"
                onChange={uploadImage}
              />
            </div>
          </form>
          {customError.length > 0 && (
            <div className="error" role="alert">
              {customError}
            </div>
          )}
        </div>
        {posts.length > 0 &&
          posts.map((post) => <Post {...post} key={post.id} />)}
      </div>
    </div>
  );
};
