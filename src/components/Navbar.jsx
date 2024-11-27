import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality based on the searchQuery
    console.log("Search Query:", searchQuery);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white border-bottom"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "18px 70px",
        }}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src="assets/images/logo2.png"
                alt="Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
                style={{ maxHeight: "50px", maxWidth: "100%" }}
              />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="ms-auto" role="search">
              {user ? (
                <div className="d-flex align-items-center">
                  <Link
                    className="btn btn-outline-dark me-2"
                    to="/editor"
                    style={{ borderRadius: "35px" }}
                  >
                    Editor
                  </Link>
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ borderRadius: "35px" }}
                    >
                      Welcome, {user.firstName}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/profile/${user._id}`} // Update the link to include userId
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/change-password"
                        >
                          Change Password
                        </Link>
                      </li>
                      {user.isAdmin && (
                        <li>
                          <Link className="dropdown-item" to="/admin">
                            Admin Dashboard
                          </Link>
                        </li>
                      )}
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                          to="/logout"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    className="btn btn-outline-dark me-2"
                    to={"/login"}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "35px",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-outline-light"
                    to={"/register"}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "35px",
                    }}
                  >
                    Register
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
