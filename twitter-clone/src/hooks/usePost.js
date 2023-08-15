import { useState } from "react";
export const usePost = () => {
  const url = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [customError, setCustomError] = useState("");
  const [values, setValues] = useState({});
  const getPosts = async () => {
    const response = await fetch(`${url}/post`);
    const data = await response.json();
    setPosts(data);
  };
  const sizeImage = (file) => {
    const maxSize = 200 * 1024;
    if (file) {
      const fileSize = file.size;
      if (fileSize > maxSize) {
        return true;
      } else {
        return false;
      }
    }
  };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const size = sizeImage(file);
    try {
      if (file !== undefined && size === false) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(`${url}/upload/image/`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setValues({ ...values, hasImage: data.urlImage });
        setCustomError("");
      } else {
        setCustomError("Image size is too large");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e, name, username, profileImage) => {
    e.preventDefault();
    try {
      await fetch(`${url}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          profileImage,
          timestamp: Date.now(),
          ...values,
        }),
      });
      await getPosts();
      e.target.reset();
      setValues({});
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getPosts,
    posts,
    uploadImage,
    customError,
    handleChange,
    values,
    handleSubmit,
  };
};
