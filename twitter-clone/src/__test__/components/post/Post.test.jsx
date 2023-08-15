import React from "react";
import { render, screen } from "@testing-library/react";

import { Post } from "./Post.jsx";

describe("Post Component", () => {
  const mockData = {
    name: "John Doe",
    username: "johndoe",
    description: "This is a test post.",
    hasImage: "https://example.com/image.jpg",
  };

  it("renders post data correctly", () => {
    const { getByAltText } = render(<Post data={mockData} />);

    const imageElement = getByAltText("image");
    expect(imageElement.src).toBe("https://example.com/image.jpg");
  });
});
