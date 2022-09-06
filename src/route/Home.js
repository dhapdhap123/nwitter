import { dbService } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDocs, query, collection, addDoc, serverTimestamp, QuerySnapshot } from "firebase/firestore";
import { async } from "@firebase/util";

const Home = ({ userObj }) => {
    console.log(userObj);
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNweets = async() => {
        const q = query(collection(dbService, "nweets")); 
        const QuerySnapshot = await getDocs(q);
        QuerySnapshot.forEach((doc) => {
            const nweetObj = {
                ...doc.data(),
                id: doc.id,
            }
            setNweets(prev => [nweetObj, ...prev]);
        });
    }
    useEffect(() => {
        getNweets();
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(dbService, "nweets"), {
            text: nweet,
            createAt: serverTimestamp(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };
    const onChange = (e) =>{
        setNweet(e.target.value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange}
                value={nweet}
                type="text"
                placeholder="what's on your mind?"
                maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map(nweet => <div key={nweet.id}>
                    <h4>{nweet.nweet}</h4>
                </div>)}
            </div>
        </div>
    );
};
export default Home;