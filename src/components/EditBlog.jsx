import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editBlogApi, getAuthorizationHeader, getSingleBlogApi } from "../api/Api";

const EditBlog = () => {
    const navigate = useNavigate();
    const { blogId } = useParams(); // Get the blog ID from the URL parameters
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null); // State for new image
    const [currentImage, setCurrentImage] = useState(""); // State for current image URL

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // Fetch the blog data using the blog ID
                const response = await getSingleBlogApi(blogId);
                const { title, content, imageUrl } = response.data.blog;
                setTitle(title);
                setContent(content);
                setCurrentImage(imageUrl || ""); // Set current image URL or blank if no image
            } catch (error) {
                console.error("Error fetching blog:", error);
                toast.error("Failed to fetch blog data. Please try again.");
                navigate("/");
            }
        };

        fetchBlog();
    }, [blogId, navigate]);

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
            const response = await editBlogApi(blogId, formData, getAuthorizationHeader());

            if (response.status === 200) {
                toast.success("Blog post updated successfully!");
                navigate(`/blogs/${blogId}`);
            } else {
                toast.error("Failed to update blog post. Please try again.");
            }
        } catch (error) {
            console.error("Error updating blog post:", error);
            toast.error("Server Error");
        }
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile && /^image\/(png|jpg|jpeg)$/.test(selectedFile.type)) {
            setImage(selectedFile);
            setCurrentImage(URL.createObjectURL(selectedFile)); // Update current image preview
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
                        <h2 className="text-center mb-4">Edit Blog Post</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    value={title}
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
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control mb-3"
                                    placeholder="Enter the content of your blog post"
                                />
                            </div>
                            {currentImage && (
                                <div className="mb-3">
                                    <label htmlFor="currentImage" className="form-label">
                                        Current Image
                                    </label>
                                    <div className="mb-3">
                                        <img src={currentImage} alt="Current Blog" className="img-fluid" />
                                    </div>
                                </div>
                            )}
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
                                {currentImage && !image && (
                                    <div className="mb-3">
                                        <label htmlFor="previewImage" className="form-label">
                                            New Image Preview
                                        </label>
                                        <div className="mb-3">
                                            <img src={currentImage} alt="New Blog" className="img-fluid" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-dark w-100 mb-3"
                            >
                                Update Blog Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
