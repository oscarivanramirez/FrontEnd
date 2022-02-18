import React, { useState } from "react";
import './ChatUI.css'
import axios from "axios";

export default function ChatUI(){

    const [newMessage, addNewMsg] = useState('');
    const [error, setError] = useState('');

    const handleAddMessage = () => {
        axios.post(`messages/create/${newMessage}`)
        .then((res) => {
            console.log(res);
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
        <div>
            <div className="chatVideo">
                
            </div>
            <div className="chatLeft">
                <div className="chatTitle">
                    Chat Log
                </div>
                <div className="sentMessages">
                    Actual Messages
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
        

    )
}