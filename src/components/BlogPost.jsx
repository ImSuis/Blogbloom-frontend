import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { paginationBlogApi, searchBlogByTitleApi } from '../api/Api'; // Import the search API

const BlogPosts = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]); // State to store search results
    const { pageNumber } = useParams();

    useEffect(() => {
        if (!searchResults.length) { // If there are no search results, fetch paginated blogs
            const fetchBlogs = async () => {
                try {
                    const response = await paginationBlogApi(pageNumber || currentPage);
                    console.log('Response from paginationBlogApi:', response);

                    if (response && response.success && Array.isArray(response.blogs)) {
                        setBlogs(response.blogs);
                        setMaxPage(response.maxPage);
                    } else {
                        console.error('Invalid response data structure:', response);
                    }
                } catch (error) {
                    console.error('Error fetching blogs:', error);
                }
            };

            fetchBlogs();
        }
    }, [pageNumber, currentPage, searchResults]);

    const handleSearch = async (query) => {
        try {
            if (query.trim() === '') { // If the search query is empty, reset searchResults
                setSearchResults([]);
                return;
            }
            const response = await searchBlogByTitleApi(query);
            console.log('Response from searchBlogByTitleApi:', response);

            if (response && response.success && Array.isArray(response.blogs)) {
                setSearchResults(response.blogs);
            } else {
                console.error('Invalid response data structure:', response);
            }
        } catch (error) {
            console.error('Error searching blogs by title:', error);
        }
    };

    const getBlogImage = (blog) => {
        return blog.blogImageUrl || 'https://via.placeholder.com/150'; // Use placeholder image if no imageUrl is provided
    };

    const truncateContent = (content, maxLength) => {
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength) + '...';
    };

    const goToPage = (page) => {
        if (page < 1) {
            page = 1; // Ensure page number doesn't go below 1
        } else if (page > maxPage) {
            page = maxPage; // Ensure page number doesn't exceed maxPage
        }
        setCurrentPage(page);
    };

    // Generate an array of page numbers from 1 to maxPage
    const pageNumbers = [];
    for (let i = 1; i <= maxPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mt-4 mb-5">
            <div className="mb-4">
                <h2 className="mb-3">Blog Posts</h2>
                {/* Search input field */}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by title" onChange={(e) => handleSearch(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="button" onClick={() => handleSearch('')}>Clear</button>
                </div>
            </div>

            {/* Display search results if there are any */}
            {searchResults.length > 0 && searchResults.map((blog) => (
                <Link to={`/blogs/${blog._id}`} key={blog._id} className="text-decoration-none text-dark">
                    <div className="media my-4 d-flex align-items-start">
                        <img
                            src={getBlogImage(blog)}
                            className="mr-3"
                            alt={blog.title}
                            style={{ width: '150px', height: '150px', marginRight: '20px' }}
                        />
                        <div className="media-body">
                            <h5 className="mt-0">{blog.title}</h5>
                            <p className="small text-muted">
                                <strong>Author:</strong>{' '}
                                {blog.user ? `${blog.user.firstName || 'Unknown'} ${blog.user.lastName || 'Unknown'}` : 'Unknown'}
                            </p>
                            <p>{truncateContent(blog.content, 300)}</p>
                        </div>
                    </div>
                </Link>
            ))}

            {/* Render paginated blogs if no search results */}
            {!searchResults.length && blogs.map((blog) => (
                <Link to={`/blogs/${blog._id}`} key={blog._id} className="text-decoration-none text-dark">
                    <div className="media my-4 d-flex align-items-start">
                        <img
                            src={getBlogImage(blog)}
                            className="mr-3"
                            alt={blog.title}
                            style={{ width: '150px', height: '150px', marginRight: '20px' }}
                        />
                        <div className="media-body">
                            <h5 className="mt-0">{blog.title}</h5>
                            <p className="small text-muted">
                                <strong>Author:</strong>{' '}
                                {blog.user ? `${blog.user.firstName || 'Unknown'} ${blog.user.lastName || 'Unknown'}` : 'Unknown'}
                            </p>
                            <p>{truncateContent(blog.content, 300)}</p>
                        </div>
                    </div>
                </Link>
            ))}

            {/* Pagination controls */}
            <div className="d-flex justify-content-between align-items-center">
                <button
                    className="btn btn-dark"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        className="btn btn-dark"
                        onClick={() => goToPage(page)}
                        disabled={currentPage === page}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="btn btn-dark"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === maxPage || blogs.length === 0} // Disable if on max page or no blogs
                >
                    Next
                </button>
            </div>
        </div >
    );
};

export default BlogPosts;
