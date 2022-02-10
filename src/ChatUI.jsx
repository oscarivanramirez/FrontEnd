import React from "react";
import './ChatUI.css'

export default function ChatUI(){

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
                    <input className="typing" type="text"/>
                </div>
                <button>
                    Chat
                </button>



            </div>

        </div>
        

    )
}