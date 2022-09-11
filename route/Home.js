import { dbService, storageService } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { orderBy, onSnapshot, query, collection } from "firebase/firestore";
import Nweet from "component/Nweet";
import NweetFactory from "../component/NweetFactory";


const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArray = snapshot.docs.map((doc) => {return {
                id: doc.id,
                ...doc.data(),
            }});
            setNweets(nweetArray);
        })
    }, []);
    return(
        <div>
            <NweetFactory userObj={userObj} />
            <div>
                {nweets.map((nweet) => 
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}/>)}
            </div>
        </div>
    );
};
export default Home;