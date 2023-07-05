import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

// make context provider so that we can use user in every component

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  //useEffect to check if user exist or not
  useEffect(() => {
    // firebase function call // ALSO CHANGE APP.JS AND INDEX.JS
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // need to have clean up function for real time listening if not memory leak
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      { children }
    </AuthContext.Provider>
  );
};
