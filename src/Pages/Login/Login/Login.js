import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { SignInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '.login'

    const handleGoogleLogin = () => {
        SignInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }

    return (
        <div>
            <h1>Login your account!</h1>
            <h3>Login only availabe by Google</h3>
            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-success">Google</button>
        </div>
    );
};

export default Login;