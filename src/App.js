import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BlogPosts from "./components/BlogPost";
import ChangePassword from "./components/ChangePassword";
import EditBlog from "./components/EditBlog";
import ForgotPassword from "./components/ForgotPasssord";
import Navbar from "./components/Navbar";
import ResetPassword from "./components/ResetPassword";
import EditUser from "./pages/EditUser";
import Editor from "./pages/Editor";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import VeiwBlog from "./pages/ViewBlog";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoutes from "./protected/AdminRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<BlogPosts />} />
        <Route path="/blogs/page/:pageNumber" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/blogs/:blogId" element={<VeiwBlog />}></Route>
        <Route path="/edit-blog/:blogId" element={<EditBlog />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/edit/:userId" element={<EditUser />} />

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminDashboard />} />
          {/* <Route path="/admin/edit/:id" element={<AdminEdit />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
