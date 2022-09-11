import {
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import React from "react";
import AuthForm from "../component/Authform";

const Auth = () => {
    
    const onSocialClick = async (event) => {
        const auth = getAuth();
        const {
            target: {name}
        } = event;
        let provider;
        if (name === "google"){
            provider = new GoogleAuthProvider();
        } else if (name === "github"){
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(auth, provider);
    };

    return (
    <div>
        <AuthForm />
        <div>
            <button onClick={onSocialClick} name="google">Continue with Google</button>
            <button onClick={onSocialClick} name="github">Continue with Github</button>
        </div>
    </div>
    )
}
export default Auth;