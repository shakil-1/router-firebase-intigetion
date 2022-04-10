import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, {replace: true})
            })
    }

    return (
        <div>
            <h3>Plese Login</h3>
            <div>
                <button onClick={handelGoogleSignIn}>Google Sign In</button>
            </div>

            <form>
                <input type="email" placeholder='your email' name="" id="" /><br />
                <input type="password" name="" placeholder='yor password' id="" /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;