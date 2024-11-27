import React, { useEffect, useState } from 'react';
import { getAllUsersApi } from '../../api/Api';
import UserTable from '../../components/UserTable';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers(); // Fetch users when the component mounts
    }, []);

    const fetchUsers = () => {
        getAllUsersApi()
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    };

    return (
        <div className="container mt-4">
            <h2>User List</h2>
            <UserTable users={users} updateUserList={fetchUsers} />
        </div>
    );
};

export default AdminDashboard;
