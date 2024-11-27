// import moment from 'moment';
// import React, { useEffect, useState } from 'react';
// import { toast } from "react-toastify";
// import { deleteCommentApi, getCommentsApi, getSingleBlogApi, postCommentApi } from '../api/Api';

// const SingleBlogPost = ({ blogId, loggedInUserId }) => {
//     const [blog, setBlog] = useState(null);
//     const [comments, setComments] = useState([]);
//     const [replyingTo, setReplyingTo] = useState(null); // State to track which comment is being replied to
//     const [commenting, setCommenting] = useState(false); // State to track whether the comment text field should be displayed

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const blogResponse = await getSingleBlogApi(blogId);
//                 console.log('Blog Data:', blogResponse.data); // Log the blog data
//                 setBlog(blogResponse.data.blog);

//                 const commentsResponse = await getCommentsApi(blogId); // Fetch comments using the getCommentsApi function
//                 console.log('Comments Data:', commentsResponse.data); // Log the comments data
//                 setComments(commentsResponse.data.comments);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [blogId]);

//     if (!blog) {
//         return <div>Loading...</div>;
//     }

//     // Function to organize comments into a tree-like structure
//     const organizeComments = (comments) => {
//         const commentMap = new Map();
//         const rootComments = [];

//         // Map each comment to its ID
//         comments.forEach(comment => {
//             commentMap.set(comment._id, comment);
//         });

//         // Iterate over comments to build the tree
//         comments.forEach(comment => {
//             if (comment.parentComment) {
//                 const parentComment = commentMap.get(comment.parentComment);
//                 if (parentComment) {
//                     if (!parentComment.replies) {
//                         parentComment.replies = [];
//                     }
//                     parentComment.replies.push(comment);
//                 }
//             } else {
//                 rootComments.push(comment);
//             }
//         });

//         return rootComments;
//     };

//     // Organize comments into a tree-like structure
//     const threadedComments = organizeComments(comments);

//     // Function to handle click on the comment icon
//     const handleCommentIconClick = () => {
//         setCommenting(!commenting); // Toggle the commenting state
//     };

//     // Function to post a comment
//     const handleCommentSubmit = async () => {
//         // Get the content of the comment from the input field
//         const commentContent = document.getElementById('commentInput').value;

//         try {
//             // Post the comment to the backend
//             await postCommentApi(blogId, { content: commentContent });
//             // Refresh comments after posting
//             const commentsResponse = await getCommentsApi(blogId);
//             setComments(commentsResponse.data.comments);
//             // Clear the input field and hide the comment text field
//             document.getElementById('commentInput').value = '';
//             setCommenting(false);
//             toast.success("Comment posted successfully.");
//         } catch (error) {
//             console.error('Error posting comment:', error);
//         }
//     };

//     // Function to handle submitting a reply
//     const handleReplySubmit = async (parentCommentId, replyContent) => {
//         try {
//             await postCommentApi(blogId, { content: replyContent, parentComment: parentCommentId });
//             // Refresh comments after posting
//             const commentsResponse = await getCommentsApi(blogId);
//             setComments(commentsResponse.data.comments);

//             // Clear replyingTo state
//             setReplyingTo(null);
//             toast.success("Reply posted successfully.");
//         } catch (error) {
//             toast.error("Error posting reply.");
//             console.error('Error posting reply:', error);
//         }
//     };

//     // Function to handle deleting a comment
//     const handleDeleteComment = async (commentId) => {
//         try {
//             await deleteCommentApi(commentId);
//             // Refresh comments after deleting
//             const commentsResponse = await getCommentsApi(blogId);
//             setComments(commentsResponse.data.comments);

//             // Show success toast message or perform any other necessary actions
//             toast.success("Comment deleted successfully.");
//         } catch (error) {
//             console.error('Error deleting comment:', error);
//             // Show error toast message or perform any other necessary actions
//             toast.error("You are not authorized to delete this comment.");
//         }
//     };

//     // Function to render threaded comments recursively
//     const renderComments = (comments, renderedIds = new Set()) => {
//         return (
//             <ul className="list-unstyled">
//                 {comments.map(comment => {
//                     if (renderedIds.has(comment._id)) {
//                         return null; // Skip rendering if the comment is already rendered
//                     }
//                     renderedIds.add(comment._id); // Add comment ID to rendered set
//                     return (
//                         <li key={comment._id}>
//                             <div>
//                                 <div className="comment-meta" style={{ marginBottom: '0.5em' }}>
//                                     <p className="small text-muted" style={{ fontSize: '0.9em', margin: '0' }}>
//                                         <small>Author:</small>{' '}
//                                         <span className="text-grey" style={{ fontSize: '0.8em' }}>{`${comment.user.firstName || 'Unknown'} ${comment.user.lastName || 'Unknown'}`}</span>
//                                     </p>
//                                     <p className="small text-muted" style={{ fontSize: '0.9em', margin: '0' }}>
//                                         <strong>Date:</strong>{' '}
//                                         <span className="text-grey" style={{ fontSize: '0.8em' }}>{moment(comment.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
//                                     </p>
//                                 </div>
//                                 <p>{comment.content}</p>
//                                 <div className="action-icons" style={{ marginTop: '-1em' }}>
//                                     {(comment.user.id === loggedInUserId || loggedInUserId === 'admin') && ( // Check if the logged-in user is the author of the comment or is an admin
//                                         <i className="bi bi-trash-fill" onClick={() => handleDeleteComment(comment._id)}></i> // Delete icon with onClick event
//                                     )}
//                                     <i className="bi bi-reply-fill" onClick={() => setReplyingTo(comment._id)}></i> {/* Bootstrap reply icon */}
//                                 </div>
//                                 {replyingTo === comment._id && ( // Conditional rendering for reply text field
//                                     <div className="reply-text-field">
//                                         <div className="input-group mb-3">
//                                             <input id="replyInput" type="text" className="form-control" placeholder="Write a reply..." style={{ width: 'calc(100% - 42px)', marginBottom: '0.5em' }} />
//                                             <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => setReplyingTo(null)}>Cancel</button>
//                                             <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'black', color: 'white', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => handleReplySubmit(comment._id, document.getElementById('replyInput').value)}>Reply</button>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                             {comment.replies && <ul>{renderComments(comment.replies, renderedIds)}</ul>} {/* Render replies recursively */}
//                         </li>
//                     );
//                 })}
//             </ul>
//         );
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-10 offset-md-1">
//                     <h2>{blog.title}</h2>
//                     <p className="small text-muted mb-2">
//                         <strong>Author:</strong>{' '}
//                         <span className="text-grey">{`${blog.user.firstName || 'Unknown'} ${blog.user.lastName || 'Unknown'}`}</span>
//                     </p>
//                     <p className="small text-muted mb-4">
//                         <strong>Date:</strong>{' '}
//                         <span className="text-grey">{moment(blog.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
//                     </p>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-10 offset-md-1">
//                     <img
//                         src={blog.blogImageUrl || 'https://via.placeholder.com/600x400'}
//                         alt={blog.title}
//                         className="img-fluid mb-4"
//                     />
//                     <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
//                     <div className="comment-icon" style={{ textAlign: 'left', marginTop: '1em' }} onClick={handleCommentIconClick}>
//                         <i className="bi bi-chat-square-dots"></i> {/* Bootstrap comment icon */}
//                     </div>
//                     {commenting && ( // Conditional rendering for the comment text field
//                         <div className="comment-text-field">
//                             <div className="input-group mb-3">
//                                 <input id="commentInput" type="text" className="form-control" placeholder="Write a comment..." style={{ width: 'calc(100% - 42px)', marginBottom: '0.5em' }} />
//                                 <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => setCommenting(false)}>Cancel</button>
//                                 <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'black', color: 'white', borderRadius: '35px', marginBottom: '0.5em' }} onClick={handleCommentSubmit}>Comment</button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-10 offset-md-1">
//                     <h4 className="mt-5">Comments:</h4>
//                     {renderComments(threadedComments)}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleBlogPost;

// const handleEditBlog = () => {

// }

// const handleDeleteBlog = () => {

// }

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { deleteBlogApi, deleteCommentApi, editBlogApi, getCommentsApi, getSingleBlogApi, postCommentApi } from '../api/Api';

const SingleBlogPost = ({ blogId, loggedInUserId }) => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [replyingTo, setReplyingTo] = useState(null);
    const [commenting, setCommenting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const blogResponse = await getSingleBlogApi(blogId);
                setBlog(blogResponse.data.blog);

                const commentsResponse = await getCommentsApi(blogId);
                setComments(commentsResponse.data.comments);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [blogId]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    console.log('Author ID:', blog.user._id);
    console.log('Logged In User ID:', loggedInUserId);


    const organizeComments = (comments) => {
        const commentMap = new Map();
        const rootComments = [];

        comments.forEach(comment => {
            commentMap.set(comment._id, comment);
        });

        comments.forEach(comment => {
            if (comment.parentComment) {
                const parentComment = commentMap.get(comment.parentComment);
                if (parentComment) {
                    if (!parentComment.replies) {
                        parentComment.replies = [];
                    }
                    parentComment.replies.push(comment);
                }
            } else {
                rootComments.push(comment);
            }
        });

        return rootComments;
    };

    const threadedComments = organizeComments(comments);

    const handleCommentIconClick = () => {
        setCommenting(!commenting);
    };

    const handleCommentSubmit = async () => {
        const commentContent = document.getElementById('commentInput').value;

        try {
            await postCommentApi(blogId, { content: commentContent });
            const commentsResponse = await getCommentsApi(blogId);
            setComments(commentsResponse.data.comments);
            document.getElementById('commentInput').value = '';
            setCommenting(false);
            toast.success("Comment posted successfully.");
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleReplySubmit = async (parentCommentId, replyContent) => {
        try {
            await postCommentApi(blogId, { content: replyContent, parentComment: parentCommentId });
            const commentsResponse = await getCommentsApi(blogId);
            setComments(commentsResponse.data.comments);
            setReplyingTo(null);
            toast.success("Reply posted successfully.");
        } catch (error) {
            toast.error("Error posting reply.");
            console.error('Error posting reply:', error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await deleteCommentApi(commentId);
            const commentsResponse = await getCommentsApi(blogId);
            setComments(commentsResponse.data.comments);
            toast.success("Comment deleted successfully.");
        } catch (error) {
            console.error('Error deleting comment:', error);
            toast.error("You are not authorized to delete this comment.");
        }
    };

    const handleEditBlog = async (blogId) => {
        try {
            // Call the editBlogApi function to edit the blog
            await editBlogApi(blogId);
            navigate(`/edit-blog/${blogId}`);
        } catch (error) {
            console.error('Error editing blog:', error);
        }
    };

    const handleDeleteBlog = async () => {
        const confirmDialog = window.confirm("Are you sure you want to delete this product?")
        if (!confirmDialog) {
            return;
        } else {
            await deleteBlogApi(blogId);
            navigate('/')
            toast.success("Blog deleted successfully.");
        }
    };

    const renderComments = (comments, renderedIds = new Set()) => {
        return (
            <ul className="list-unstyled">
                {comments.map(comment => {
                    if (renderedIds.has(comment._id)) {
                        return null;
                    }
                    renderedIds.add(comment._id);
                    return (
                        <li key={comment._id}>
                            <div>
                                <div className="comment-meta" style={{ marginBottom: '0.5em' }}>
                                    <p className="small text-muted" style={{ fontSize: '0.9em', margin: '0' }}>
                                        <small>Author:</small>{' '}
                                        <span className="text-grey" style={{ fontSize: '0.8em' }}>{`${comment.user.firstName || 'Unknown'} ${comment.user.lastName || 'Unknown'}`}</span>
                                    </p>
                                    <p className="small text-muted" style={{ fontSize: '0.9em', margin: '0' }}>
                                        <strong>Date:</strong>{' '}
                                        <span className="text-grey" style={{ fontSize: '0.8em' }}>{moment(comment.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                                    </p>
                                </div>
                                <p>{comment.content}</p>
                                <div className="action-icons" style={{ marginTop: '-1em' }}>
                                    <i className="bi bi-reply-fill" onClick={() => setReplyingTo(comment._id)}></i>
                                    {(comment.user._id === loggedInUserId) && (
                                        <i className="bi bi-trash-fill" onClick={() => handleDeleteComment(comment._id)} style={{ marginLeft: '0.5em', cursor: 'pointer' }}></i>
                                    )}
                                </div>
                                {replyingTo === comment._id && (
                                    <div className="reply-text-field">
                                        <div className="input-group mb-3">
                                            <input id="replyInput" type="text" className="form-control" placeholder="Write a reply..." style={{ width: 'calc(100% - 42px)', marginBottom: '0.5em' }} />
                                            <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => setReplyingTo(null)}>Cancel</button>
                                            <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'black', color: 'white', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => handleReplySubmit(comment._id, document.getElementById('replyInput').value)}>Reply</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {comment.replies && <ul>{renderComments(comment.replies, renderedIds)}</ul>}
                        </li>
                    );
                })}
            </ul>
        );
    };
    
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>{blog.title}</h2>
                        {(blog.user._id === loggedInUserId) && (
                            <div className="action-icons">
                                <i className="bi bi-pencil-fill me-3" onClick={() => handleEditBlog(blog._id)} style={{ fontSize: '1.5rem' }}></i>
                                <i className="bi bi-trash-fill" onClick={() => handleDeleteBlog(blog._id)} style={{ fontSize: '1.5rem' }}></i>
                            </div>

                        )}
                    </div>
                    <p className="small text-muted mb-2">
                        <strong>Author:</strong>{' '}
                        <span className="text-grey">{`${blog.user.firstName || 'Unknown'} ${blog.user.lastName || 'Unknown'}`}</span>
                    </p>
                    <p className="small text-muted mb-4">
                        <strong>Date:</strong>{' '}
                        <span className="text-grey">{moment(blog.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <img
                        src={blog.blogImageUrl || 'https://via.placeholder.com/600x400'}
                        alt={blog.title}
                        className="img-fluid mb-4"
                    />
                    <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
                    <div className="comment-icon" style={{ textAlign: 'left', marginTop: '1em' }} onClick={handleCommentIconClick}>
                        <i className="bi bi-chat-square-dots"></i>
                    </div>
                    {commenting && (
                        <div className="comment-text-field">
                            <div className="input-group mb-3">
                                <input id="commentInput" type="text" className="form-control" placeholder="Write a comment..." style={{ width: 'calc(100% - 42px)', marginBottom: '0.5em' }} />
                                <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px', marginBottom: '0.5em' }} onClick={() => setCommenting(false)}>Cancel</button>
                                <button className="btn btn-outline-dark me-2" type="button" style={{ backgroundColor: 'black', color: 'white', borderRadius: '35px', marginBottom: '0.5em' }} onClick={handleCommentSubmit}>Comment</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <h4 className="mt-5">Comments:</h4>
                    {renderComments(threadedComments)}
                </div>
            </div>
        </div>
    );

};

export default SingleBlogPost;
