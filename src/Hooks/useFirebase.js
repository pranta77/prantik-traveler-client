import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Fierbase.Init";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log(users);

  const auth = getAuth();

  //   User Sign In
  const signInGoogle = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUsers(result.user);
    });
  };

  //   User Sign Out
  const logOut = () => {
    setLoading(true);
    signOut(auth).then(() => {});
  };

  //   All User Observer State Changed
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    users,
    signInGoogle,
    logOut,
    loading,
  };
};

export default useFirebase;
