import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    const { handleGoogleSignIn } = useAuth();
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-container">
            <button
                className="btn btn-success p-2 fw-bold fs-5 text-white"
                onClick={googleSignIn}
            >
                <span className="pe-2 text-white">
                </span>
                Google Sign In
            </button>
        </div>
    );
};

export default Login;