import React from "react";
import './PopUp.css'

export default function Popup({content, handleCloseX, handleCloseS}){
    return (
        <div className = "modal">
            <div className="modelContent">
                <button onClick = {handleCloseX}>x</button>
                {content}
                <button onClick = {handleCloseS}>Submit</button>
                
            </div>
            
        </div>
    );
};