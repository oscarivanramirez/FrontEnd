import React from 'react';
import { useState, useEffect } from "react";
import './ChatUI.css'
import axios from "axios";
import {useParams} from 'react-router-dom';
import Webcam from '../Webcam';
import { useSession } from '../UserSession';
import NavBar from '../NavBar';
import ReactPlayer from 'react-player';

export default function ChatUI(){

    const [newMessage, addNewMsg] = useState('');
    const [error, setError] = useState('');
    const [messages, setMessages] = useState(undefined);
    const [refresh, setRefresh] = useState(0);
    const session = useSession();
    let {roomname} = useParams();

    useEffect(() => {
        axios.get(`/messages/${roomname}/list`)
        .then((res) => {
            if(res.data){
                setMessages(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
            setError(err.toString());
        })
    }, [refresh])

    const resetInputField = () => {
        setMessages("");
    };

    const handleAddMessage = () => {
        axios.post(`https://swejol.herokuapp.com/messages/create/${roomname}/${newMessage}`)
        .then((res) => {
            console.log(res);
            setRefresh(refresh + 1)
            addNewMsg("")
            
        })
        .catch((err) =>{
            console.log(err)
            setError(err.toString())
        })
    }
    return(
                                       /* MAIN DIV */

        /* setting the properties to the main <div> of the chat box which dictates size of chat box */
        /* DIVS INSIDE MAIN DIV */
        <>
        <NavBar/>
        <div className="chat">
            <div className="chatVideo">
                {roomname}
                {session.state.name}
                <Webcam/>
                <ReactPlayer 
                    className="stream"
                    url={"https://youtu.be/rqNZTZBK3gs"}
                    volume={0.00}
                    playing={true}
                    height={"77.2vh"}
                    width={"70vw"}
                />

            </div>
            <div className="chatLeft">
                <div className="chatTitle">
                    Chat Log
                </div>
                <div className="sentMessages">
                    {messages && messages.map((messages, index) => (
                        <div key={`${messages}-${index}`}>
                            <p>{messages}<br/></p>
                        </div>
                        
                    ))}
                </div>
                <div> {/* Div for user input and Chat Button */}
                    <input 
                    value={newMessage}
                    onChange={(event) => addNewMsg(event.target.value)}
                    className="typing" type="text"/>
                </div>
                <button onClick={handleAddMessage}>Chat</button>



            </div>

        </div>
        </>
        

    )
}