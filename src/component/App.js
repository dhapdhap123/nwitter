import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

function App(){
    const auth = getAuth();
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(auth);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user){
                setIsLoggedIn(true);
                setInit(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [])
    return (
    <>
        {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
        <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>)
}

export default App;