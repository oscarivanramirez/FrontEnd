import React from "react";

export default function Popup({content, handleClose}){
    return (
        <div>
            <button onClick = {handleClose}>x</button>
            {content}
            <button onClick = {handleClose}>Submit</button>

        </div>
    );
};
 
