import axios from "axios";
import blogs_mock from "../mock/blogs_mock";
import login_mock from "../mock/login_mock";
const baseURL = "http://localhost:5501";

describe("API Testing", () => {
  it("Test should work", async () => {
    const response = await axios.get(`${baseURL}/test`);
    expect(response.status).toEqual(200);
  });

  // login
  it("Login should work", async () => {
    const response = await axios.post(`${baseURL}/api/user/login`, login_mock);
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(true);
  });

  // create
  it("Register user should work", async () => {
    const userData = {
      firstName: "Johny",
      lastName: "Doe",
      email: "tes323t@user.com",
      password: "3123122",
    };

    const response = await axios.post(`${baseURL}/api/user/create`, userData);
    expect(response.status).toEqual(200);
    expect(response.data.success).toEqual(true);
  });

  //fetch all blogs and match all data with mock data
  it("Fetch all blogs", async () => {
    const response = await axios.get(`${baseURL}/api/blog/get-blogs`);
    expect(response.status).toEqual(200);
    expect(response.data.blogs).toBeDefined();

    //matching each product with mock data
    response.data.blogs.forEach((individualBlog, index) => {
      expect(individualBlog.title).toEqual(blogs_mock[index].title);
    });
  });

  it("Fetch single blog", async () => {
    const response = await axios.get(
      `${baseURL}/api/blog/get-single-blog/65aab7f170d19b5e86a209cf`
    );
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("blog");
  });

  it("Fetch single comment", async () => {
    const response = await axios.get(
      `${baseURL}/api/comments/get-comment/65db217b6c49234469be6da9`
    );
    expect(response.status).toBe(200);
    expect(response.data.comments.length).toBeGreaterThan(0); 
    const comment = response.data.comments[0]; 
    expect(comment).toHaveProperty("content");
  });
});
