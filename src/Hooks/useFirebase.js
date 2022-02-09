import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUsers] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google account
    const SignInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user);
            }
            else {
                setUsers({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // Log out from the site
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({})
                .finally(()=> setIsLoading(false));
            })
    }

    return {
        user,
        logOut,
        isLoading,
        SignInUsingGoogle
    }
};

export default useFirebase;