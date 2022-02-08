import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { SignInUsingGoogle } = useAuth();
    return (
        <div>
            <h1>Login your account!</h1>
            <h3>Login only availabe by Google</h3>
            <button onClick={SignInUsingGoogle} type="button" class="btn btn-outline-success">Google</button>
        </div>
    );
};

export default Login;