import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserApi } from '../api/Api';

const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // useState (Setting error message)
  const [fnameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCpasswordError] = useState('');

  // validate input value
  const validate = () => {
    let isValid = true;

    // reset error message
    setFnameError('');
    setLnameError('');
    setEmailError('');
    setPasswordError('');
    setCpasswordError('');

    if (firstName.trim() === '') {
      setFnameError('Firstname is required');
      isValid = false;
    }
    if (lastName.trim() === '') {
      setLnameError('Lastname is required');
      isValid = false;
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      setCpasswordError('Confirm Password is required');
      isValid = false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setCpasswordError('Password and Confirm Password must be the same');
      isValid = false;
    }

    return isValid;
  };

  // function for changing input value
  const changeFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastname = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the data
    const isValid = validate();
    if (!isValid) {
      return;
    }

    // making json data object
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // making API Call
    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error('Server Error');
        console.log(err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Create a New Account</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  onChange={changeFirstname}
                />
                {fnameError && (
                  <p className="text-danger">{fnameError}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  onChange={changeLastname}
                />
                {lnameError && (
                  <p className="text-danger">{lnameError}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={changeEmail}
                />
                {emailError && (
                  <p className="text-danger">{emailError}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={changePassword}
                />
                {passwordError && (
                  <p className="text-danger">{passwordError}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  onChange={changeConfirmPassword}
                />
                {cpasswordError && (
                  <p className="text-danger">{cpasswordError}</p>
                )}
              </div>
              <button
                className="btn btn-dark w-100"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create an Account'}
              </button>
              <p className="mt-2 text-center">
                Already have an account?{' '}
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

export default Register;
