import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { getAuth, updateProfile } from "firebase/auth";
import { authService } from "../firebaseConfig";

function App(){
    const auth = getAuth();
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const [newName, setNewName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user){
                if (user.displayName === null || user.displayName === ""){
                    updateProfile(userObj, {displayName: "Nwitter"});
                }
                setIsLoggedIn(true);
                setUserObj(user);
            } else {
                setIsLoggedIn(false);
            }
            setInit(true);
        });
    }, []);
    const refreshUser = () => {
        const user = auth.currentUser;
        setNewName(user.displayName);
    }
    return (
    <>
        {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser}/> : "Initializing..."}
    </>)
}

export default App;