import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createBlogApi, getAuthorizationHeader } from "../api/Api";

const Editor = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !content) {
    toast.error("Please fill in all required fields.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("blogImage", image);
    }

    // Pass the authorization header obtained from getAuthorizationHeader
    const response = await createBlogApi(formData, getAuthorizationHeader());

    if (response.status === 201) {
      toast.success("Blog post created successfully!");
      navigate("/");
    } else {
      toast.error("Failed to create blog post. Please try again.");
    }
  } catch (error) {
    console.error("Error creating blog post:", error);
    toast.error("Server Error");
  }
};

  

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && /^image\/(png|jpg|jpeg)$/.test(selectedFile.type)) {
      setImage(selectedFile);
    } else {
      toast.error("Please select a valid image file (png, jpg, jpeg).");
      setImage(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Create a Blog Post</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter the title of your blog post"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Enter the content of your blog post"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Select Image (png, jpg, jpeg)
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="form-control mb-3"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="btn btn-dark w-100 mb-3"
              >
                Create Blog Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
