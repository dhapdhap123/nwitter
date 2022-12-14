import React, { useState } from "react";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

const AuthForm = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAcount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            let data;
            const auth = getAuth();
            if(newAccount) {
                data = await createUserWithEmailAndPassword(auth, email, password);
            } else {
                data = await signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data);
        } catch(error){
            setError(error.message)
        }
    };
    const toggleAccount = () => {
        setNewAcount(prev => !prev);
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={onChange} />
                <input type="submit" value={newAccount ? "Create Account" : "Log in"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Log in" : "Create account"}</span>
        </>
)};

export default AuthForm;