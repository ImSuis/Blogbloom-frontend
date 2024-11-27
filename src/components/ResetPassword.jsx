import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { verifyCodeAndChangePasswordApi } from '../api/Api';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async () => {
        setIsLoading(true);
        try {
            const response = await verifyCodeAndChangePasswordApi(email, code, newPassword);
            toast.success(response.message);
            navigate('/login');
        } catch (error) {
            setError(error.message);
            toast.error('Error resetting password: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">Reset Password</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                    Verification Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Enter verification code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={handleResetPassword}
                                className="btn btn-dark w-100 mb-3"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Resetting Password...' : 'Reset Password'}
                            </button>
                            {message && <p className="text-success">{message}</p>}
                            {error && <p className="text-danger">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
