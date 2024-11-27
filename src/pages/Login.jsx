import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../api/Api";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        loginUserApi(data)
            .then((res) => {
                if (res.data.success === false) {
                    toast.error(res.data.message);
                } else {
                    toast.success(res.data.message);
                    localStorage.setItem("token", res.data.token);

                    // set user data
                    const jsonDecode = JSON.stringify(res.data.userData);
                    localStorage.setItem("user", jsonDecode);

                    // Redirect to homepage
                    navigate("/");
                }
            })
            .catch((err) => {
                toast.error("Server Error");
                console.log(err.message);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">Login To Your Account</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-dark w-100 mb-3"
                            >
                                Login
                            </button>
                            <p className="text-center">
                                Don't have an account?{" "}
                                <a
                                    href="/register"
                                    className="text-black text-decoration-none"
                                >
                                    Signup
                                </a>
                            </p>
                            <p className="text-center">
                                Forgot Password?{" "}
                                <a
                                    href="/forgot-password"
                                    className="text-black text-decoration-none"
                                >
                                    Reset
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
