import React, { useState } from "react";

export const usePost = () => {
  const url = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`${url}/post`);
    const data = await response.json();
    setPosts(data);
  };

  return { getPosts, posts };
};
