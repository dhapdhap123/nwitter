import { getAuth, updateProfile } from "firebase/auth";
import { dbService } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";

const Profile = ({ refreshUser, userObj }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const auth = getAuth();
    const onLogOutClick = () => {
        auth.signOut();
        navigate("/");
    };
    const getMyNweets = async () => {
        const q = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", userObj.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
    }
    useEffect(() => {
        getMyNweets();
    }, []);
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayname !== newDisplayName){
            if (newDisplayName === "" || null){
                setNewDisplayName("Nweeter");
            } else {
                await updateProfile(userObj, {displayName: newDisplayName});
                refreshUser();
            }
        }
    }
    const onChange = (event) => {
        setNewDisplayName(event.target.value);
    }
    return (
    <>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Display name"
                onChange={onChange}
                value={newDisplayName}
                />
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log out</button>
    </>
    );
};

export default Profile;