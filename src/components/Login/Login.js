import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className="login-container d-flex flex-column justify-content-center align-items-center login-background">
            <div className="shadow p-3 mb-3 bg-body rounded">
                <button
                    className="btn btn-success p-2 fw-bold fs-5 text-white"
                    onClick={googleSignIn}
                >
                    <span className="pe-2 text-white">
                        <FontAwesomeIcon icon={faGoogle} />
                    </span>
                    Google Sign In
                </button>
            </div>
            <p>Don't have account?<a href="https://accounts.google.com/SignUp?hl=en" rel='noreferrer' target='_blank'>Create Account</a></p>
        </div>
    );
};

export default Login;