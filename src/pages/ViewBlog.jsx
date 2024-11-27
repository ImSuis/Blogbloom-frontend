// src/components/ViewBlog.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL params
import SingleBlogPost from '../components/SingleBlogPost';

const ViewBlog = () => {
    const { blogId } = useParams();
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Parse user object from local storage

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-9">
                    <SingleBlogPost blogId={blogId} loggedInUserId={loggedInUser._id} />
                </div>
            </div>
        </div>
    );
};


export default ViewBlog;
