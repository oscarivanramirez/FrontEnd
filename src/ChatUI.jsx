import React from "react";

export default function ChatUI(){

    return(
                                       /* MAIN DIV */

        /* setting the properties to the main <div> of the chat box which dictates size of chat box */
        <div style={{
            border: '5px solid black', 
            display: 'flex', /* used for responsive design */
            flexDirection: 'column', /* Allows for any divs inside this main div to be placed below one another*/
            height: '60vh', /* Set chat box height to 60% of browser window */
            width: '30vw', /* Set chat box width to 30% of browser window */
            backgroundColor: 'rgba(255, 99, 71, 0.5'} 
        }>
                                {/* DIVS INSIDE MAIN DIV */}

            <div style={{border: '1px solid blue'}}> {/* Div for Chat Box Title */}
                <h1>TELE-STREAM CHAT</h1>
            </div> 

            <div style={{border:'1px solid green'}}> {/* Div for Chat Log */}
                Chat Log
            </div>

            <div> {/* Div for user input and Chat Button */}
                <input type="text"/>
                <button >
                    Chat
                </button>
            </div>



        </div>

    )
}