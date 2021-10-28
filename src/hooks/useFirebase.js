import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();

    //google sign in
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    return {
        user,
        error,
        handleGoogleSignIn,
        logOut,
        isLoading,
    };
};

export default useFirebase;