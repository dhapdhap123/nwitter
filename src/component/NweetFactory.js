import React from "react";
import { useEffect, useState } from "react";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { uuidv4 } from "@firebase/util";
import { storageService, dbService } from "firebaseConfig";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";

const NweetFactory = ({ userObj }) => {
    const [attachment, setAttachment] = useState("");
    const [nweet, setNweet] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        let attachmentUrl = "";
        if (attachment !== ""){
            const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }
        const nweetObj = {
            text: nweet,
            createAt: serverTimestamp(),
            creatorId: userObj.uid, 
            attachmentUrl
        }
        await addDoc(collection(dbService, "nweets"), nweetObj);
        setNweet("");
        setAttachment("");
    };
    const onChange = (e) =>{
        const { target: {value}, } = e;
        setNweet(value);
    }
    const onFileChange = (e) => {
        const {
            target: {files}
        } = e;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: { result }} = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => {
        setAttachment("");
    }

    return (<form onSubmit={onSubmit}>
        <input onChange={onChange}
            value={nweet}
            type="text"
            placeholder="what's on your mind?"
            maxLength={120} />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
            <div>
                <img src={attachment} width="50px" height="50px" />
                <button onClick={onClearAttachment}>Clear</button>
            </div>
        )}
    </form>
)};
export default NweetFactory;