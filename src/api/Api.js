import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5501",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const testApi = () => Api.get("/test");

export const createUserApi = (data) => Api.post("/api/user/create", data);

export const loginUserApi = async (data) => {
  try {
    const response = await Api.post("/api/user/login", data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user)); // Stringify user object before storing
    console.log("Token stored in localStorage:", token);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createBlogApi = (data, config) =>
  Api.post("/api/blog/create-blog", data, config);

export const getAllBlogsApi = () => Api.get("/api/blog/get-blogs");

export const getAllUsersApi = () => Api.get("/api/user/users");

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getAuthorizationHeader = () => ({
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`, // Include authorization token from local storage
  },
});

export const getSingleBlogApi = (blogId) =>
  Api.get(`/api/blog/get-single-blog/${blogId}`, getAuthorizationHeader()); // Include authorization header in the request

export const getCommentsApi = (blogId) =>
  Api.get(`/api/comments/get-comment/${blogId}`, getAuthorizationHeader()); // Include authorization header in the request

export const postCommentApi = (blogId, data) =>
  Api.post(
    `/api/comments/create-comment/${blogId}`,
    data,
    getAuthorizationHeader()
  ); // Include authorization header in the request

export const deleteCommentApi = (commentId) =>
  Api.delete(
    `/api/comments/delete-comment/${commentId}`,
    getAuthorizationHeader()
  );

export const deleteBlogApi = (blogId) =>
  Api.delete(`/api/blog/delete-blog/${blogId}`, getAuthorizationHeader());

export const editBlogApi = (blogId, formData, headers) =>
  Api.put(`/api/blog/edit-blog/${blogId}`, formData, headers);

// Update the paginationBlogApi function to use the correct endpoint URL

export const paginationBlogApi = async (page) => {
  try {
    // Use the correct endpoint URL with the page query parameter
    const response = await Api.get(`/api/blog/get_pagination?page=${page}`);
    console.log("Response from paginationBlogApi:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error fetching paginated blogs:", error);
    throw error;
  }
};

export const changePasswordApi = async (oldPassword, newPassword) => {
  try {
    // Make a PUT request to the change password endpoint
    const response = await Api.put(
      "/api/user/change-password",
      { oldPassword, newPassword }, // Send old password and new password in the request body
      getAuthorizationHeader() // Include authorization header
    );
    console.log("Password changed successfully:", response.data.message);
    return response.data;
  } catch (error) {
    console.error("Error changing password:", error.response.data.message);
    throw error;
  }
};

export const requestCodeApi = async (email) => {
  try {
    const response = await Api.post("/api/user/request-code", { email });
    console.log("Response from requestCodeApi:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error requesting code:", error.response.data.message);
    throw error;
  }
};

export const verifyCodeAndChangePasswordApi = async (
  email,
  code,
  newPassword
) => {
  try {
    const response = await Api.post(
      "/api/user/verify-code-and-change-password",
      { email, code, newPassword }
    );
    console.log("Password changed successfully:", response.data.message);
    return response.data;
  } catch (error) {
    console.error("Error changing password:", error.response.data.message);
    throw error;
  }
};

export const updateUserRoleApi = (userId) => {
  return Api.put(`/api/user/${userId}/role`);
};

export const searchBlogByTitleApi = async (title) => {
  try {
    const response = await Api.get(`/api/blog/search-blog?title=${title}`);
    console.log("Response from searchBlogByTitleApi:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error(
      "Error searching blogs by title:",
      error.response.data.message
    );
    throw error;
  }
};

export const getUserProfileApi = (userId) =>
  Api.get(`/api/user/profile/${userId}`, getAuthorizationHeader());



export const editUserApi = async (userId, newData) => {
  try {
    const response = await Api.put(`/api/user/edit/${userId}`, newData, getAuthorizationHeader());
    console.log("User details updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user details:", error.response.data.message);
    throw error;
  }
};

export const deleteUserApi = (userId) => Api.delete(`/api/user/delete/${userId}`, getAuthorizationHeader());
