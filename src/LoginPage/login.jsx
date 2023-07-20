import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [activeForm, setActiveForm] = useState('login');

    const toggleForm = () => {
        setActiveForm(activeForm === 'login' ? 'register' : 'login');
    };

    const toggleLogPassword = () => {
        const a = document.getElementById('logPassword');
        const eye = document.getElementById('eye');
        const eyeSlash = document.getElementById('eye-slash');

        if (a.type === "password") {
            a.type = "text";
            eye.style.opacity = "0";
            eyeSlash.style.opacity = "1";
        } else {
            a.type = "password";
            eye.style.opacity = "1";
            eyeSlash.style.opacity = "0";
        }
    };

    const toggleRegPassword = () => {
        const d = document.getElementById('regPassword');
        const eye2 = document.getElementById("eye-2");
        const eyeSlash2 = document.getElementById("eye-slash-2");

        if (d.type === "password") {
            d.type = "text";
            eye2.style.opacity = "0";
            eyeSlash2.style.opacity = "1";
        } else {
            d.type = "password";
            eye2.style.opacity = "1";
            eyeSlash2.style.opacity = "0";
        }
    };

    return (
        <div className="container">
            <div className="box">
                {/* <!-- Login Box --> */}
                <div className={`box-login ${activeForm === 'login' ? 'active' : ''}`}>

                    <div className="top-header">
                        <h3>Hello, Again</h3>
                        <small>We are happy to have you back.</small>
                    </div>
                    <div className="input-group">
                        <div className="input-field">
                            <input type="text" className="input-box" id="logEmail" required />
                            <label htmlFor="logEmail">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input-box" id="logPassword" required />
                            <label htmlFor="logPassword">Password</label>
                            <div className="eye-area">
                                <div className="eye-box" onClick={toggleLogPassword}>
                                    <i className="fa-regular fa-eye" id="eye"></i>
                                    <i className="fa-regular fa-eye-slash" id="eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="remember">
                            <input type="checkbox" id="formCheck" className="check" />
                            <label htmlFor="formCheck"> Remember Me</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="input-submit" value="Sign In" />
                        </div>
                        <div className="forgot">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>

                </div>

                {/* <!-- Register Box --> */}

                <div className={`box-register ${activeForm === 'register' ? 'active' : ''}`}>

                    <div className="top-header">
                        <h3>Sign Up, Now</h3>
                        <small>We are happy to have you with us.</small>
                    </div>
                    <div className="input-group">
                        <div className="input-field">
                            <input type="text" className="input-box" id="regUser" required />
                            <label htmlFor="regUser">Username</label>
                        </div>
                        <div className="input-field">
                            <input type="text" className="input-box" id="regEmail" required />
                            <label htmlFor="regEmail">Email address</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input-box" id="regPassword" required />
                            <label htmlFor="regPassword">Password</label>
                            <div className="eye-area">
                                <div className="eye-box" onClick={toggleRegPassword}>
                                    <i className="fa-regular fa-eye" id="eye-2"></i>
                                    <i className="fa-regular fa-eye-slash" id="eye-slash-2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="remember">
                            <input type="checkbox" id="formCheck-2" className="check" />
                            <label htmlFor="formCheck-2"> Remember Me</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="input-submit" value="Sign Up" />
                        </div>
                    </div>

                </div>

                {/* <!-- Switch --> */}

                <div className="switch">
                    <a href="#" className={`login ${activeForm === 'login' ? 'active' : ''}`} onClick={toggleForm}>Login</a>
                    <a href="#" className={`register ${activeForm === 'register' ? 'active' : ''}`} onClick={toggleForm}>Register</a>
                    <div className="btn-active" id="btn"></div>
                </div>

            </div>
        </div>
    );
};

export default Login;
