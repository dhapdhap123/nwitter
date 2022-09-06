import { getAuth, signOut } from "firebase/auth";
import { authService } from "firebaseConfig";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const onLogOutClick = () => {
        auth.signOut();
        navigate("/");
    };
    
    return (
    <>
        <button onClick={onLogOutClick}>Log out</button>
    </>
    );
};

export default Profile;