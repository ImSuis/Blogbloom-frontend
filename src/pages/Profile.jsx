import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUserApi, getUserProfileApi } from '../api/Api';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Assuming you have access to the userId
    const userId = user._id

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getUserProfileApi(userId);
                setUserProfile(response.data.user);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId]);

    const handleDelete = async () => {
        // Display confirmation dialog
        const confirmed = window.confirm("Are you sure you want to delete your profile?");
        if (!confirmed) {
            return; // If not confirmed, do nothing
        }

        try {
            await deleteUserApi(userId);
            // Upon successful deletion, clear localStorage and redirect to login
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Redirect to login page using React Router navigation
            navigate("/login");
        } catch (error) {
            console.error("Error deleting user:", error);
            // Handle error if deletion fails
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">User Profile</h2>
                        {userProfile && (
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        value={userProfile.firstName}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        value={userProfile.lastName}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        value={userProfile.email}
                                        disabled
                                    />
                                </div>
                                <button className="btn btn-danger w-100" onClick={handleDelete}>Delete Profile</button>
                            </form>
                        )}
                        <Link
                            className="btn btn-dark w-100 mt-3"
                            to={`/edit/${user._id}`}
                        >
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
