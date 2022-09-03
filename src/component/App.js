import React, { useState } from "react";
import AppRouter from "./Router";
import { authService} from "../firebaseConfig";

function App(){
    console.log(authService);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <>
        <AppRouter isLoggedIn={isLoggedIn}/>
        <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>)
}

export default App;