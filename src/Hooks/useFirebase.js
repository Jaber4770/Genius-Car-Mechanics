import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google account
    const SignInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({});
            }
        })
        return () => unsubscribe;
    }, [])

    // Log out from the site
    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({});
            })
    }

    return {
        users,
        LogOut,
        SignInUsingGoogle
    }
};

export default useFirebase;