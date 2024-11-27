import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestCodeApi } from '../api/Api';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRequestCode = async () => {
        setIsLoading(true);
        try {
            await requestCodeApi(email);
            toast.success('Code requested successfully');
            navigate('/reset-password');

        } catch (error) {
            toast.error('Error requesting code: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">Forgot Password</h2>
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
                            <button
                                type="submit"
                                onClick={handleRequestCode}
                                className="btn btn-dark w-100 mb-3"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending Code...' : 'Send Code'}
                            </button>
                            <p className="text-center">
                                Remember your password?{' '}
                                <a href="/login" className="text-black text-decoration-none">
                                    Login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
