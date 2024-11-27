
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editUserApi, getUserProfileApi } from '../api/Api';

const EditUser = () => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newData, setNewData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getUserProfileApi(userId);
                setUserData(response.data.user);
                setNewData(response.data.user);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editUserApi(userId, newData);
            // Redirect the user to their profile page with the updated user ID
            window.location.href = `/profile/${userId}`;
            console.log("User details updated successfully!");
        } catch (error) {
            console.error("Error updating user details:", error);
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
                        <h2 className="text-center mb-4">Edit User</h2>
                        {userData && (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="firstName"
                                        value={newData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        name="lastName"
                                        value={newData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        name="email"
                                        value={newData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-dark w-100">Update</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
