import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
             <h2>This is home </h2>
            <li> {user? user.displayName: 'empty'}</li>
        </div>
    );
};

export default Product;