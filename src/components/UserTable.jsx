import React from 'react';
import { updateUserRoleApi } from '../api/Api';
import '../style/UserTable.css';
const UserTable = ({ users, isAdmin, updateUserList }) => {
    const handleRoleChange = (userId) => {
        // Find the user by ID
        const userToUpdate = users.find(user => user._id === userId);
        if (!userToUpdate) {
            console.error('User not found.');
            return;
        }

        // Update the user's role
        userToUpdate.isAdmin = !userToUpdate.isAdmin;

        // Call the API to update the user's role
        updateUserRoleApi(userId)
            .then(response => {
                // Handle success response
                console.log('User role updated successfully:', response.data);
                // Update user list in parent component
                updateUserList();
            })
            .catch(error => {
                // Handle error response
                console.error('Error updating user role:', error);
                // Revert the user's role if the update fails
                userToUpdate.isAdmin = !userToUpdate.isAdmin;
            });
    };

    return (
        <table className="table table-bordered table-striped mt-4 mx-auto">
            <thead className="table-dark">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                            <div className="toggle-container">
                                <input type="checkbox" className="toggle-checkbox" checked={user.isAdmin} onChange={() => handleRoleChange(user._id)} />
                                <label className="toggle-slider" onClick={() => handleRoleChange(user._id)}></label>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
