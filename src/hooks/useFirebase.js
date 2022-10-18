import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider , signOut, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();


const signInUsingGoogle = () => {
    const googleProvider = new  GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
        setUser(result.user)
    })
}

// observe user state change
useEffect(()=> {
  const unSubscribed = onAuthStateChanged(auth, user => {
        if(user) {
            setUser()
        }
        else {
            setUser({})
        }
    });
    return () => unSubscribed;
},{})
const logOut =() => {
    signOut(auth)
    .then(()=> { })
}
  
    return { 
         user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;