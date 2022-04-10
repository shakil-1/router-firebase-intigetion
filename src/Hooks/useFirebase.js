import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.init";


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const useFirebase = () => {
    const [user, setUser] = useState({});

    const sinWidthGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])

    const handelSignOut  =() =>{
        signOut(auth)
        .then(() =>{})
    }

    return { user, sinWidthGoogle , handelSignOut}
}

export default useFirebase;