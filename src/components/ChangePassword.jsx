import React, { useState } from "react";
import { toast } from "react-toastify";
import { changePasswordApi } from "../api/Api";


const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the changePasswordApi function with old and new passwords
            await changePasswordApi(oldPassword, newPassword);
            // Clear form fields and reset error state on successful password change
            setOldPassword("");
            setNewPassword("");

            toast.success("Password changed successfully")

            setError(null);
        } catch (error) {
            // Handle error if password change fails
            toast.error("Incorrect old password")
            setError(error.response.data.message);
        }
    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">Change Password</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="oldPassword" className="form-label">
                                    Old Password
                                </label>
                                <input
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Enter your old password"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">
                                    New Password
                                </label>
                                <input
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Enter your new password"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-dark w-100 mb-3"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
